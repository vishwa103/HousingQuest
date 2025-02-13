import React, { useEffect, useRef, useState } from 'react';

const BottomToTopReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Ensure the animation happens only once
        }
      },
      { threshold: 0.1 } // Adjust the threshold for triggering the animation
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={elementRef}
      className={`bottom-to-top-reveal ${isVisible ? 'btbanimate' : ''}`}
    >
      <div className="btreveal-content">{children}</div>
    </div>
  );
};

export default BottomToTopReveal;
