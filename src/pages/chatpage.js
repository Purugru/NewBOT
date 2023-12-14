// ChatPage.js

import React, { useState } from 'react';
import './pagecss/chatpage.css';

const ChatPage = () => {
  const [text, setText] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSendClick = () => {
    // Handle the send button click logic here
    console.log('Sending message:', text);
    // Clear the text after sending
    setText('');
  };

  const handleKeyPress = (event) => {
    // Check if Enter key is pressed and Shift key is not pressed
    if (event.key === 'Enter' && !event.shiftKey) {
      // Handle the Enter key logic (e.g., send the message)
      event.preventDefault(); // Prevent default behavior (new line)
      handleSendClick();
    }
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`chat-page ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className={`navbar ${isSidebarOpen ? 'navbar-open' : ''}`}>
        <button className="sidebar-toggle" onClick={handleToggleSidebar}>
          {/* Add your sandwich icon or any other icon here */}
          &#9776;
        </button>
        Navbar Content
      </div>

      {isSidebarOpen && (
        <div className="sidebar">
          {/* Content for the sidebar */}
          Sidebar Content
          <button className="sidebar-toggle" onClick={handleToggleSidebar}>
            {/* Add your sandwich icon or any other icon here */}
            &#9776;
          </button>
        </div>
      )}

      <div className="main-content">
        Chat Content
      </div>

      <div className="footer">
        <div className="text-bar">
          <textarea
            placeholder="Type your message..."
            value={text}
            onChange={handleTextChange}
            onKeyPress={handleKeyPress}
            className="text-input"
            style={{ width: '800px' }}
          />
          <button className="send-button" onClick={handleSendClick}>
            {/* Add your send icon or any other icon here */}
            &#10148;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
