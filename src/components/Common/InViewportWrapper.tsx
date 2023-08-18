import React, { useState, useRef, useEffect,  FC, ReactElement } from 'react';

interface ChildComponentProps {
  isInViewport: boolean;
}

interface InViewportWrapperProps {
  children: ReactElement<ChildComponentProps> | ReactElement<ChildComponentProps>[];
}

const InViewportWrapper: FC<InViewportWrapperProps> = ({ children }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isInViewport, setIsInViewport] = useState<boolean>(false);

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    if (entries[0].isIntersecting) {
      setIsInViewport(true);
    }
  };

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
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isInViewport })
      )}
    </div>
  );
};

export default InViewportWrapper;