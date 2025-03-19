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
    if (iRef.current) {
      const iRect = iRef.current.getBoundingClientRect();
      const h1Rect = iRef.current.parentElement?.getBoundingClientRect();
      if (h1Rect) {
        console.log('cx', iRect.left + iRect.width / 2 - h1Rect.left);
        console.log('cy', iRect.top + iRect.height / 2 - h1Rect.top);
        setCirclePosition({
          cx: iRect.left + iRect.width / 2 - h1Rect.left, // Relative to h1
          cy: iRect.top + iRect.height / 2 - h1Rect.top, // Relative to h1
        });
      }
      // const containerRect = containerRef.current.getBoundingClientRect();
      // setCirclePosition({
      //   cx: iRect.left + iRect.width / 2 - containerRect.left,
      //   cy: iRect.top + iRect.height / 2 - containerRect.top,
      // });
    }
  }, []);

  return (
    <>
      <svg width="0" height="0">
        <defs>
          <mask id="mask">
            <circle
              fill="#ffffff"
              cx={'282.390625'}
              cy={'20'}
              r="1"
              className={isClicked ? 'expand-circle' : ''}
            />
          </mask>
        </defs>
      </svg>
      <div ref={containerRef} className="wrapper">
        {/* <div className="divy masked">
        </div> */}
        <h1 className="text-4xl text-[#6B8E23] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Welcome to my s<span>i</span>
          te
        </h1>
        <h1 className="text-4xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 masked">
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
