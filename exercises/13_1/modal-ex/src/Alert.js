import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { title, content, timeSEconds } = props.children;
  setTimeout(() => props.hideComponent(), timeSEconds * 1000);
  return (
    <div className="Alert">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Alert;
