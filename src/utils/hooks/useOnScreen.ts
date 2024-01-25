import React, { useEffect, useState } from 'react';

const useOnScreen = (ref: React.RefObject<HTMLElement>, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observerCallback: IntersectionObserverCallback = ([entry]) => {
      if (!isVisible) {
        setIsVisible(entry.isIntersecting);
      }
    };

    const observer = new IntersectionObserver(observerCallback, { rootMargin });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin, isVisible]);
};

export default useOnScreen;
