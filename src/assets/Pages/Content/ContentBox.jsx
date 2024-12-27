import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContentBox({ heading, content }) {
  const boxStyle = {
    borderLeft: '5px solid darkblue',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  const headingStyle = {
    textAlign: 'center',
  };

  const contentStyle = {
    textAlign: 'left',
    listStyleType: 'disc',
    paddingLeft: '20px'
  };

  return (
    <div style={boxStyle}>
      <h4 style={headingStyle}>{heading}</h4>
      <div style={contentStyle}>{content}</div>
    </div>
  );
}

export default ContentBox;
