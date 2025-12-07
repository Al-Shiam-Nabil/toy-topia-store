import React from "react";

const LoadingComponent = () => {
  return (
    <div className="grid place-items-center w-full bg-transparent h-[300px]">
      <span className="loading loading-bars loading-xl text-primary"></span>
    </div>
  );
};

export default LoadingComponent;
