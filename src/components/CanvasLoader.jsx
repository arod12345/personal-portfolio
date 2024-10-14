import React, { useEffect, useState } from 'react';

const CanvasLoader = ({ loading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return Math.min(prev + 10, 100); // Increment progress
        });
      }, 500); // Change interval duration as needed

      return () => clearInterval(interval);
    } else {
      setProgress(0); // Reset progress when loading is false
    }
  }, [loading]);

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-8 border border-gray-300 rounded overflow-hidden bg-gray-100 flex flex-col items-center justify-center transition-opacity duration-300 ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className="h-full bg-green-500 transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
      <div className="mt-1 font-bold">{progress}%</div>
    </div>
  );
};

export default CanvasLoader;
