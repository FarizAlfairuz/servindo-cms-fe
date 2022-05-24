import { useCallback, useEffect, useState } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
  }, [setWindowDimensions, getWindowDimensions]);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
