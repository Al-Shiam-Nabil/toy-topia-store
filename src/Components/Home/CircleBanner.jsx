import React from "react";

const CircleBanner = () => {
  return (
    <div className="flex items-center flex-col-reverse lg:flex-row gap-20 my-20">
      <div className="shrink-0 ">
        <img
          src="https://i.ibb.co/cKVS2Bs3/toys-4940737-1280.jpg"
          alt="baby immage"
          className="rounded-full w-[400px] h-[400px] object-cover"
        />
      </div>

      <div className="text-center lg:text-left max-w-4xl lg:max-w-full">
        <h3 className="text-3xl font-bold text-primary mb-5 ">
          Making Childhood Magical
        </h3>
        <p>
          Step into our toy shop and discover a vibrant world of fun,
          creativity, and imagination. Every toy in our collection is carefully
          chosen to inspire learning, spark joy, and keep your child safe. From
          building sets, dolls, cars, and puzzles to exciting educational
          toys—our shelves are filled with endless possibilities for every
          child’s interest. We focus on quality, affordability, and
          unforgettable fun, making each visit a magical experience. Here, every
          toy brings a smile, and every purchase creates a happy memory!
        </p>
      </div>
    </div>
  );
};

export default CircleBanner;
