import { useState, useEffect } from 'react';
import './PresentAnimation.css';

const PresentAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);
  const frames = [
    './images/present-closed.png',    // Frame 1: Closed present
    './images/present-opening.png',   // Frame 2: Opening present
    './images/present-open.png'       // Frame 3: Open present
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => {
        if (prevFrame === frames.length - 1) {
          clearInterval(interval);
          // Hide the animation after a delay
          setTimeout(() => {
            setShowAnimation(false);
          }, 500);
          return prevFrame;
        }
        return prevFrame + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (!showAnimation) {
    return null;
  }

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