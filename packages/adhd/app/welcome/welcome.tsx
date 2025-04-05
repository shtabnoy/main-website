import { useEffect, useRef, useState } from 'react';
import './welcome.css';

export function Welcome() {
  const [circlePosition, setCirclePosition] = useState({ cx: 0, cy: 0, r: 1 });
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleClick = () => {
    setCirclePosition((prev) => ({ ...prev, r: 500 }));
  };

  useEffect(() => {
    if (spanRef.current) {
      const iRect = spanRef.current.getBoundingClientRect();
      const h1Rect = spanRef.current.parentElement?.getBoundingClientRect();
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
        Welcome to my s<span ref={spanRef}>i</span>
        te
      </h1>
      <div className="wrapper z-20" onClick={handleClick}>
        <div className="overlay" style={{ maskImage: 'url(#mask)' }} />
        <h1 className={`text-black target-text`}>
          Welcome to my s<span>i</span>
          te
        </h1>
      </div>
    </>
  );
}
