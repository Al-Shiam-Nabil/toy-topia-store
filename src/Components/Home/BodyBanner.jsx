import React from 'react';

const BodyBanner = () => {
    return (
<div
  className="hero sm:h-[300px]"
  style={{
    backgroundImage:
      "url(https://i.ibb.co/nNTSLHZG/Whats-App-Image-2025-12-03-at-23-23-18-30a5a8c9.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-xl">
      <h1 className="mb-5 text-3xl sm:text-5xl font-bold">Discover Fun Toys</h1>
      <p className="mb-5">
        A wide collection of playful, safe, and exciting toys designed to spark creativity and imagination. From learning toys to adventure sets, we bring joy to every child’s world.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default BodyBanner;