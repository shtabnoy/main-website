import { useEffect, useRef, useState } from 'react';
import './welcome.css';

const MIN_RADIUS = 5;
const ALIGNMENT = 3;
const MAX_RADIUS = typeof window !== 'undefined' ? window.innerWidth : 0;

export function Welcome() {
  const [circlePosition, setCirclePosition] = useState({
    cx: 0,
    cy: 0,
    r: MIN_RADIUS,
  });
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleClick = () => {
    setCirclePosition((prev) => ({ ...prev, r: MAX_RADIUS }));
  };

  useEffect(() => {
    if (spanRef.current) {
      const iRect = spanRef.current.getBoundingClientRect();
      const h1Rect = spanRef.current.parentElement?.getBoundingClientRect();
      if (h1Rect) {
        setCirclePosition({
          cx: iRect.left + iRect.width / 2,
          cy: iRect.top + iRect.height / 2 + ALIGNMENT,
          r: MIN_RADIUS,
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
        Welcome t<span ref={spanRef}>o</span> my site
      </h1>
      <div className="wrapper z-20">
        <div className="overlay" />
        <h1 className={`text-black target-text`}>
          Welcome t
          <span className="cursor-pointer" onClick={handleClick}>
            o
          </span>{' '}
          my site
        </h1>
      </div>
    </>
  );
}
