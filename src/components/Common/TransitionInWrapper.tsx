import React, { ReactNode } from 'react';
import { animated, useInView, useSpring } from '@react-spring/web';


interface TransitionInWrapperProps {
  children: ReactNode;
  xTo?: number;
  yTo?: number;
  delay?: number;
  className?: string;
  once?: boolean;
  rootMargin?: string;
  onClick?: () => void;
}

function TransitionInWrapper({ children, xTo = 0, yTo = 0, delay = 0, className, once = true, rootMargin = "10", onClick}: TransitionInWrapperProps){
  const [ref, inView] = useInView({
      rootMargin: `-${rootMargin}% 0px -${rootMargin}% 0px`,
      once: once,
  })

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? 0 : xTo,
    y: inView ? 0 : yTo,
    config: { tension: 280, friction: 120 },
    delay: delay,
  });

  return (
    <animated.span ref={ref} style={springProps} className={className} onClick={onClick}>
      {children}
    </animated.span>
  );
};

export default TransitionInWrapper;