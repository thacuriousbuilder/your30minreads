import { useState, useEffect } from 'react';

function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimensions;
}

export default useWindowDimensions;