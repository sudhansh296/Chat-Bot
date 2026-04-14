# 🤖 AI Chat-Bot - React & Vite

A modern, responsive AI-powered chatbot built with React.js and Vite, featuring real-time conversations and sleek UI design.

![Chat-Bot Preview](https://img.shields.io/badge/Status-Complete-brightgreen)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Learning Outcomes](#learning-outcomes)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 Overview

This AI Chat-Bot is a modern React application that provides an interactive conversational interface. Built with Vite for lightning-fast development and optimized production builds, the chatbot features a clean, responsive design with real-time messaging capabilities.

**🎯 Project Goals:**
- Create an intuitive chat interface
- Implement real-time messaging
- Responsive design for all devices
- Modern React development practices
- Fast performance with Vite

## ✨ Features

### 🤖 Chat Functionality
- **Real-time Messaging** - Instant message sending and receiving
- **AI-Powered Responses** - Intelligent conversation capabilities
- **Message History** - Persistent chat conversation
- **Typing Indicators** - Visual feedback during conversations
- **Auto-scroll** - Automatic scrolling to latest messages
- **Message Timestamps** - Time tracking for all messages

### 🎨 User Interface
- **Modern Design** - Clean, minimalist chat interface
- **Responsive Layout** - Works perfectly on mobile and desktop
- **Smooth Animations** - Elegant transitions and effects
- **Dark/Light Theme** - Multiple theme options
- **Emoji Support** - Rich text messaging with emojis
- **File Attachments** - Support for image and file sharing

### ⚡ Performance
- **Vite Build System** - Lightning-fast development and builds
- **Code Splitting** - Optimized bundle loading
- **Lazy Loading** - Efficient component loading
- **PWA Ready** - Progressive Web App capabilities

## 🚀 Demo

### Live Preview
🌐 **Live Demo**: [Chat-Bot on Vercel](https://your-chatbot.vercel.app)

### Quick Start
```bash
# Clone the repository
git clone https://github.com/sudhansh296/Chat-Bot.git
cd Chat-Bot/chatbot-project

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Technologies Used

| Technology | Purpose | Version |
|------------|---------|---------|
| **React.js** | Frontend Framework | ^18.0.0 |
| **Vite** | Build Tool | ^4.0.0 |
| **JavaScript** | Programming Language | ES6+ |
| **CSS3** | Styling | Latest |
| **HTML5** | Structure | Latest |
| **Node.js** | Runtime Environment | ^16.0.0 |

### Key Libraries
- **React Hooks** - State management and lifecycle
- **React Router** - Navigation (if applicable)
- **Axios** - HTTP client for API calls
- **CSS Modules** - Scoped styling
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Modern web browser

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sudhansh296/Chat-Bot.git
   cd Chat-Bot
   ```

2. **Navigate to Chat-Bot Project**
   ```bash
   cd chatbot-project
   ```

3. **Install Dependencies**
   ```bash
   # Using npm
   npm install
   
   # Or using yarn
   yarn install
   ```

4. **Start Development Server**
   ```bash
   # Using npm
   npm run dev
   
   # Or using yarn
   yarn dev
   ```

5. **Open in Browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
Chat-Bot/
│
├── chatbot-project/           # Main React application
│   ├── public/
│   │   ├── index.html        # HTML template
│   │   └── favicon.ico       # App icon
│   │
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── ChatBot.jsx   # Main chat component
│   │   │   ├── Message.jsx   # Message component
│   │   │   ├── InputBox.jsx  # Input component
│   │   │   └── Header.jsx    # Header component
│   │   │
│   │   ├── styles/           # CSS files
│   │   │   ├── App.css       # Main styles
│   │   │   ├── ChatBot.css   # Chat styles
│   │   │   └── index.css     # Global styles
│   │   │
│   │   ├── utils/            # Utility functions
│   │   │   ├── api.js        # API calls
│   │   │   └── helpers.js    # Helper functions
│   │   │
│   │   ├── App.jsx           # Main App component
│   │   └── main.jsx          # Entry point
│   │
│   ├── package.json          # Dependencies
│   ├── vite.config.js        # Vite configuration
│   └── README.md             # Project documentation
│
├── ecommerce-project/        # Additional project
└── node_modules/             # Dependencies
```

## 🧩 Key Components

### 1. Main Chat Component
```jsx
// ChatBot.jsx
import React, { useState, useEffect } from 'react';
import Message from './Message';
import InputBox from './InputBox';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (text) => {
    // Message sending logic
  };

  return (
    <div className="chatbot-container">
      <div className="messages">
        {messages.map(msg => <Message key={msg.id} {...msg} />)}
      </div>
      <InputBox onSend={sendMessage} />
    </div>
  );
};
```

### 2. Message Component
```jsx
// Message.jsx
const Message = ({ text, sender, timestamp }) => (
  <div className={`message ${sender}`}>
    <div className="message-content">{text}</div>
    <div className="message-time">{timestamp}</div>
  </div>
);
```

### 3. Input Component
```jsx
// InputBox.jsx
const InputBox = ({ onSend }) => {
  const [input, setInput] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-box">
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};
```

## 🔌 API Integration

### Chat API Setup
```javascript
// utils/api.js
const API_BASE_URL = 'https://your-api-endpoint.com';

export const sendChatMessage = async (message) => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
```

## 🚀 Deployment

### Deploy to Vercel

1. **Build the Project**
   ```bash
   cd chatbot-project
   npm run build
   ```

2. **Create vercel.json** (in chatbot-project folder)
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "dist/**/*",
         "use": "@vercel/static"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/dist/$1"
       },
       {
         "src": "/",
         "dest": "/dist/index.html"
       }
     ]
   }
   ```

3. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Set Root Directory to `chatbot-project`
   - Set Build Command to `npm run build`
   - Set Output Directory to `dist`
   - Click "Deploy"

### Environment Variables
```bash
# .env file
VITE_API_URL=your_api_endpoint
VITE_APP_NAME=Chat-Bot
```

## 📱 Responsive Design

### Mobile Optimization
```css
/* Mobile First Approach */
.chatbot-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .chatbot-container {
    height: 100vh;
    border-radius: 0;
  }
  
  .message {
    max-width: 85%;
  }
}
```

## 🎓 Learning Outcomes

### React Skills Developed
- ✅ Functional components with hooks
- ✅ State management with useState
- ✅ Effect handling with useEffect
- ✅ Component composition
- ✅ Props and event handling
- ✅ Conditional rendering

### Modern Development
- ✅ Vite build system
- ✅ ES6+ JavaScript features
- ✅ Module bundling
- ✅ Hot module replacement
- ✅ Code splitting
- ✅ Performance optimization

## 🚀 Future Enhancements

### Phase 1: Core Features
- [ ] Voice message support
- [ ] File upload functionality
- [ ] Message search feature
- [ ] Chat export options
- [ ] Multiple chat rooms

### Phase 2: Advanced Features
- [ ] AI personality customization
- [ ] Multi-language support
- [ ] Push notifications
- [ ] Offline message queue
- [ ] User authentication

### Phase 3: Enterprise Features
- [ ] Admin dashboard
- [ ] Analytics and insights
- [ ] Custom AI training
- [ ] API rate limiting
- [ ] Enterprise security

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Development Setup
1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test your changes**
   ```bash
   npm run test
   npm run build
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

**Sudhansh** - [@sudhansh296](https://github.com/sudhansh296)

**Project Link**: [https://github.com/sudhansh296/Chat-Bot](https://github.com/sudhansh296/Chat-Bot)

---

<div align="center">
  <h3>⭐ Star this repository if you found it helpful! ⭐</h3>
  <p>Made with ❤️ by <a href="https://github.com/sudhansh296">Sudhansh</a></p>
</div>