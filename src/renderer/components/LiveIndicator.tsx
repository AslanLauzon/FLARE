import React from 'react';
import './LiveIndicator.css';

const LiveIndicator: React.FC = () => {
  return (
    <div className="live-indicator-container">
      <div className="live-dot" />
      <span>LIVE</span>
    </div>
  );
};

export default LiveIndicator;
