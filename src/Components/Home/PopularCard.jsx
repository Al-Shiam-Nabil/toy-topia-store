import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const PopularCard = ({ toy }) => {
  const { toyId, toyName, rating, availableQuantity, price, pictureURL } = toy;

  return (
    <div className=" p-5 rounded-xl space-y-3 bg-white shadow">
      <img
        src={pictureURL}
        alt={toyName}
        className="w-full h-[200px] object-cover bg-gray-300 rounded-xl"
      />
      <h3 className="font-semibold">{toyName}</h3>
      <div>
        <div className="spy-1">
          <h3>Price : $ {price}</h3>
          <h3>Quantity: {availableQuantity}</h3>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => {
          if (index < Math.floor(rating)) {
            return <FaStar key={index} className="text-warning"></FaStar>;
          }
          return <FaStar key={index} className="text-gray-400"></FaStar>;
        })}
      </div>

      <Link
        to={`/toy-details/${toyId}`}
        className="btn btn-primary text-secondary w-full hover:bg-secondary hover:text-white border-none outline-none shadow-none"
      >
        View More
      </Link>
    </div>
  );
};

export default PopularCard;
