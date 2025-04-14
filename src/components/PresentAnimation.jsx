import { useState, useEffect } from 'react';
import './PresentAnimation.css';

const PresentAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = [
    '/images/present-closed.png',    // Frame 1: Closed present
    '/images/present-opening.png',   // Frame 2: Opening present
    '/images/present-open.png'       // Frame 3: Open present
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 2000); // Change frame every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="present-container">
      <img 
        src={frames[currentFrame]} 
        alt={`Present frame ${currentFrame + 1}`}
        className="present-image"
      />
    </div>
  );
};

export default PresentAnimation; 