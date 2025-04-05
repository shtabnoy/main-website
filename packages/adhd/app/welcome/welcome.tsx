import { useEffect, useRef, useState } from 'react';
import './welcome.css';

export function Welcome() {
  const [circlePosition, setCirclePosition] = useState({ cx: 0, cy: 0, r: 1 });
  const iRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

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
      <h1 className="text-4xl text-[#6B8E23] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        Welcome to my s<span ref={iRef}>i</span>
        te
      </h1>
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
      <div
        className="wrapper z-20"
        ref={wrapperRef}
        onClick={handleClick}
        style={{ mask: 'url(#mask)', WebkitMask: 'url(#mask)' }}
      >
        <div className="divy masked" />
        <h1
          className={`text-4xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        >
          Welcome to my s<span>i</span>
          te
        </h1>
      </div>
    </>
  );
}
