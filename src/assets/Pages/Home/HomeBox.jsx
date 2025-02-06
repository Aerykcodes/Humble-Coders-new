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
          padding: 10px;
          margin-bottom: 20px;
          background-color: #f7fbfe;
          border-radius: 8px;
          box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 95%; /* Make the container less wide */
          margin-left: auto;
          margin-right: auto; /* Center the container */
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
