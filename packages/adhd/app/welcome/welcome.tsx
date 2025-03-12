import { useState } from 'react';
import './welcome.css';

export function Welcome() {
  const [isClicked, setIsClicked] = useState(false);

  const [showNewText, setShowNewText] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setShowNewText(true);
      document.body.classList.add('new-theme-bg');
    }, 1000); // Adjust the timeout to match the animation duration
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen`}
      onClick={handleClick}
    >
      <h1
        className={`text-4xl ${showNewText ? 'text-black' : 'text-[#6B8E23]'}`}
      >
        Welcome to my s
        <span
          className={`interactive-dot ${isClicked ? 'expand-circle' : ''} ${
            showNewText ? 'hide-dot' : ''
          }`}
        >
          i
        </span>
        te
      </h1>
    </div>
  );
}
