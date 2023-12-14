import React from 'react';
import './pagecss/Landing.css';

const Lander = () => {
  return (
    <div className="container">
      <section id="teal-section">
        {/* Content for teal section */}
      </section>

      <section className="transparent-section"></section>

      <section id="white-section">
        <div id="text-and-buttons">
        <div className="hello-text">Hello!</div>
          <div className="button-container">
            <button>Signup</button>
            <button>Login</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lander;
