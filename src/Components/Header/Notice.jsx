import React from "react";
import Container from "../Container/Container";
import Marquee from "react-fast-marquee";

const Notice = () => {
  return (
    <Container className="w-full bg-white">
      <Marquee>
        <h3 className="py-2 mr-20 ">
          Welcome to Toy Topia Store. where fun never ends! We bring you safe,
          creative, and exciting toys for kids of all ages. Spark imagination,
          laughter, and learning with every playtime.
        </h3>
      </Marquee>
    </Container>
  );
};

export default Notice;
