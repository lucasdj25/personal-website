import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { useTransition, animated } from '@react-spring/web';


interface TransitionInWrapperProps {
  children: ReactNode;
  direction?: string;
}

function TransitionInWrapper({ children }: TransitionInWrapperProps){
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isInViewport, setIsInViewport] = useState<boolean>(false);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      setIsInViewport(true);
    }
  };

  const transitions = useTransition(children, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    config: { tension: 300, friction: 100 },
  });

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div ref={targetRef}>
      {transitions((style) =>
        isInViewport ? (
          <animated.div style={style}  className="animated-item">
            {children}
          </animated.div>
        ) : null
      )}
    </div>
  );
};

export default TransitionInWrapper;