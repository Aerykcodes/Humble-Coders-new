import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeBox({ heading, content }) {
  return (
    <div className="homebox-container">
      <h4 className="homebox-heading">{heading}</h4>
      <br />
      <p className="homebox-content">{content}</p>

      <style jsx>{`
        .homebox-container {
          padding: 20px;
          border-left : 5px solid darkblue;
          margin-bottom: 20px;
          background-color: #f7fbfe;
          border-radius: 8px;
          box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
          text-align: center; /* Default alignment */
        }

      .homebox-heading {
  text-align: center; /* Center the heading */
  color: #4263a6; /* Set the text color */
  }


        .homebox-content {
          text-align: left; /* Left align the content */
        }
      `}</style>
    </div>
  );
}

export default HomeBox;