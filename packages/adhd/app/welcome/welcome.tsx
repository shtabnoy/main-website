import { useState } from 'react';
import './welcome.css';

export function Welcome() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen`}
      onClick={handleClick}
    >
      <h1 className="text-4xl text-[#6B8E23]">
        Welcome to my s
        <span className={`interactive-dot ${isClicked ? 'expand-circle' : ''}`}>
          i
        </span>
        te
      </h1>
    </div>
  );
}
