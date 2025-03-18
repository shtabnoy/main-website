import { useEffect, useRef, useState } from 'react';
import './welcome.css';

export function Welcome() {
  const [isClicked, setIsClicked] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ cx: 0, cy: 0 });
  const iRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (iRef.current && containerRef.current) {
      const iRect = iRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setCirclePosition({
        cx: iRect.left + iRect.width / 2 - containerRect.left,
        cy: iRect.top + iRect.height / 2 - containerRect.top,
      });
    }
  }, []);

  return (
    <>
      <div ref={containerRef} className="wrapper">
        <svg width="0" height="0">
          <defs>
            <mask id="mask">
              <circle
                fill="#FFFFFF"
                className={isClicked ? 'expand-circle' : ''}
                cx={circlePosition.cx}
                cy={circlePosition.cy}
                r="1"
              />
            </mask>
          </defs>
        </svg>
        <div className="divy masked"></div>
        <h1 className="text-4xl text-[#6B8E23]">
          Welcome to my s
          <span ref={iRef} onClick={handleClick}>
            i
          </span>
          te
        </h1>
        <h1 className="text-4xl text-black masked">
          Welcome to my s
          <span ref={iRef} onClick={handleClick}>
            i
          </span>
          te
        </h1>
      </div>
    </>
  );
}
