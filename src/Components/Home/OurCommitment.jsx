import React from "react";
import { IoIosPricetags } from "react-icons/io";
import { MdSupportAgent, MdVerified } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const OurCommitment = () => {
  return (
    <div className="my-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      <div className="flex items-center justify-center gap-5 border border-primary rounded-xl p-3 ">
        <IoIosPricetags className="text-4xl text-primary shrink-0"></IoIosPricetags>
        <div>
          <h3 className="text-xl font-bold text-primary">Best Prices</h3>
          <p className=" font-medium text-gray-600">Affordable for All</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 border border-primary rounded-xl p-3 ">
        <TbTruckDelivery className="text-4xl text-primary shrink-0"></TbTruckDelivery>
        <div>
          <h3 className="text-xl font-bold text-primary">Fastest Delivey</h3>
          <p className=" font-medium text-gray-600">Always Arrives Faster</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 border border-primary rounded-xl p-3 ">
        <MdVerified className="text-4xl text-primary shrink-0"></MdVerified>
        <div>
          <h3 className="text-xl font-bold text-primary whitespace-nowrap">
            Guarantee Promise
          </h3>
          <p className=" font-medium text-gray-600">Shop With Confidence</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 border border-primary rounded-xl p-3 ">
        <MdSupportAgent className="text-4xl text-primary shrink-0"></MdSupportAgent>
        <div>
          <h3 className="text-xl font-bold text-primary">Online Support</h3>
          <p className="font-medium text-gray-600">24/7 Customer Support</p>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
