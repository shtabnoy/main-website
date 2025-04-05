import { useEffect, useRef, useState } from 'react';
import './welcome.css';

export function Welcome() {
  const [circlePosition, setCirclePosition] = useState({ cx: 0, cy: 0, r: 1 });
  const iRef = useRef<HTMLSpanElement>(null);

  const handleClick = () => {
    setCirclePosition((prev) => ({ ...prev, r: 500 }));
  };

  useEffect(() => {
    if (iRef.current) {
      const iRect = iRef.current.getBoundingClientRect();
      const h1Rect = iRef.current.parentElement?.getBoundingClientRect();
      if (h1Rect) {
        setCirclePosition({
          cx: iRect.left,
          cy: iRect.top,
          r: 1,
        });
      }
    }
  }, []);

  return (
    <>
      <svg width="0" height="0">
        <defs>
          <mask id="mask">
            <circle
              fill="#ffffff"
              cx={circlePosition.cx}
              cy={circlePosition.cy}
              r={circlePosition.r}
            />
          </mask>
        </defs>
      </svg>
      <h1 className="text-[#6B8E23] z-10 target-text">
        Welcome to my s<span ref={iRef}>i</span>
        te
      </h1>
      <div className="wrapper z-20">
        <div className="overlay" />
        <h1 className={`text-black target-text`}>
          Welcome to my s<span onClick={handleClick}>i</span>
          te
        </h1>
      </div>
    </>
  );
}
