import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import { motion } from "motion/react";

const PopularCard = ({ toy }) => {
  const { toyId, toyName, rating, availableQuantity, price, pictureURL } = toy;

  return (
    <motion.button whileHover={{ scale: 1.03, transition: { duration: 0.4 } }} whileTap={{ scale: 0.95 , transition: { duration: 0.4 }}}>
      <div className=" rounded-xl  bg-white shadow cursor-pointer">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-[150px] object-cover bg-gray-300 rounded-t-xl"
        />

        <div className="p-3 space-y-3 text-start">
          <h3 className="font-semibold text-sm sm:text-base truncate ">
            {toyName}
          </h3>
          <div>
            <div className="text-sm sm:text-base">
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
            className="btn btn-primary text-secondary w-full hover:btn-secondary hover:text-white border-none outline-none shadow-none rounded-full truncate"
          >
            View More
          </Link>
        </div>
      </div>
    </motion.button>
  );
};

export default PopularCard;
