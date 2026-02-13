 import { useRef,useEffect } from 'react'
 import {ChatMessage} from './ChatMessage'
 import './ChatMessages.css';

 function ChatMessages({chatMessages}){
            const chatMessagesRef =useRef(null);

            useEffect(()=>{
                const containerElem=chatMessagesRef.current;
                if(containerElem){
                    containerElem.scrollTop = containerElem.scrollHeight;
                }
            },[chatMessages]);

        return(
            <div className="chat-messages-container" ref={chatMessagesRef}>
                {chatMessages.map((chatMessage)=>{
                    return (
                        <ChatMessage 
                            message = {chatMessage.message}
                            sender = {chatMessage.sender}
                            key = {chatMessage.id} 
//Parent Component: Passes the props (The "Giver").
//Child Component: Receives the props (The "Receiver").
                        />
                    );
                })}
            </div>
        ) 

    };

    export default ChatMessages;
