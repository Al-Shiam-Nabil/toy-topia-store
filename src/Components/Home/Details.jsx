import React from "react";
import Container from "../Container/Container";

const Details = () => {
  return (
   <>
    <div className="bg-gray-800">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 items-center w-full ">
          <div className="lg:w-1/2">
            <img
              src="https://i.ibb.co/fznkFBkQ/Whats-App-Image-2025-12-04-at-00-05-02-b37d82e2.jpg"
              alt="image"
            />
          </div>

          <div className="lg:w-1/2 space-y-4 ">
            <h2 className="text-3xl font-bold text-secondary">
              Your Kids’ Favorite Toy Store
            </h2>
            <p className="text-gray-300">
              At ToyTopia, we bring joy, creativity, and imagination to every
              child’s world. Our toys are selected with care to ensure safety,
              durability, and endless fun. From learning toys to adventure sets,
              every product is designed to help kids grow smarter, play better,
              and smile brighter. Your child’s happiness matters — and we’re
              here to make every moment of play magical. Whether you're looking
              for the perfect gift or everyday play essentials, our collection
              makes finding the right toy simple and stress-free. We believe in
              inspiring young minds, supporting healthy development, and
              creating play experiences that build a brighter future for every
              little dreamer.
            </p>
          </div>
        </div>

        
      </Container>
    </div>

    <Container className="max-w-4xl! mx-auto text-center my-20">
         <h2 className="text-3xl font-bold text-primary mb-5">
              Your Kids’ Favorite Toy Store
            </h2>
         <p className="text-accent ">
              At ToyTopia, we bring joy, creativity, and imagination to every
              child’s world. Our toys are selected with care to ensure safety,
              durability, and endless fun. From learning toys to adventure sets,
              every product is designed to help kids grow smarter, play better,
              and smile brighter. 
            </p>
    </Container>
   </>
  );
};

export default Details;
