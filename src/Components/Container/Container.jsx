import React from "react";

const Container = ({ children, className }) => {
  return <div className={`px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto ${className} `}>{children}</div>;
};

export default Container;
