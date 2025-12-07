import React from "react";
import { FaStar } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

const ToyDetailsCard = ({ findDetails: p }) => {
  return (
    <div className=" p-5 lg:p-8 bg-white rounded-2xl shadow-md">
      <div className=" overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Image */}
        <div className="lg:col-span-1 flex  ">
          <div className="w-full max-w-md shrink-0 ">
            <img
              src={p?.image}
              alt={p?.name}
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-sm"
            />

            <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
              <div>
                Sold:{" "}
                <span className="font-medium text-gray-800">
                  {p?.soldCount}
                </span>
              </div>
              <div>
                Delivery:{" "}
                <span className="font-medium text-gray-800">
                  {p?.deliveryTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Details */}
        <div className="md:col-span-2  flex flex-col">
          <div className="flex justify-between items-start flex-wrap gap-x-4 gap-y-2">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                {p?.name}
              </h1>
              <div className="mt-1 text-sm text-gray-600">
                by <span className="font-medium text-gray-800">{p?.brand}</span>{" "}
                — <span>{p?.sellerLocation}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                <span className="font-semibold">{p?.averageRating}</span>
                <span className="text-sm text-gray-500">
                  ({p?.totalReviews})
                </span>
              </div>

              <button
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="wishlist"
              >
                <FaRegHeart />
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-baseline gap-3">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                ৳{p?.discountPrice}
              </div>
              {p?.discountPrice < p?.price && (
                <div className="text-base text-gray-500 line-through">
                  ৳{p?.price}
                </div>
              )}
            </div>

            <div className="text-sm text-gray-600">
              In stock:{" "}
              <span className="font-medium text-gray-800">{p?.inStock}</span>
            </div>
          </div>

          <hr className="my-4" />

          {/* Description */}
          <div className="prose max-w-none text-gray-800">
            <h2 className="text-lg font-semibold">Product Description</h2>
            <p className="mt-2 text-justify">{p?.description}</p>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Features</h3>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
                {p?.features?.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="mt-3 text-sm text-gray-700">
                <div>
                  <strong>Materials:</strong> {p?.materials}
                </div>
                <div>
                  <strong>Age Range:</strong> {p?.ageRange}
                </div>
                <div>
                  <strong>Dimensions:</strong> {p?.dimensions}
                </div>
                <div>
                  <strong>Weight:</strong> {p?.weight}
                </div>

                {/* Reviews placeholder */}
                <div className="mt-4">
                  <h3 className="font-semibold">Customer Reviews</h3>
                  <div className="mt-1 space-y-3">
                    <div className="text-sm text-gray-700">
                      Average Rating{" "}
                      <span className="font-semibold">{p?.averageRating}</span>{" "}
                      from{" "}
                      <span className="font-semibold">{p?.totalReviews}</span>{" "}
                      reviews.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Shipping & Safety</h3>
              <div className="mt-2 text-sm text-gray-700">
                <div>
                  <strong>Delivery:</strong> {p?.deliveryTime} •{" "}
                  <strong>Cost:</strong> ৳{p.shippingCost}
                </div>
                <div className="mt-2">
                  <strong>Safety:</strong>
                </div>
                <ul className="mt-1 list-disc list-inside text-sm text-gray-700">
                  {p?.safetyWarnings?.length ? (
                    p?.safetyWarnings.map((s, i) => <li key={i}>{s}</li>)
                  ) : (
                    <li>No specific warnings</li>
                  )}
                </ul>

                {p?.certifications?.length > 0 && (
                  <div className="mt-2">
                    <strong>Certifications:</strong>{" "}
                    {p?.certifications.join(", ")}
                  </div>
                )}
              </div>

              <div className="mt-4">
                <h3 className="font-semibold">Seller</h3>
                <div className="mt-2 text-sm text-gray-700">
                  <div className="font-medium">{p?.sellerName}</div>
                  <div>{p?.sellerLocation}</div>
                  <div className="mt-1">Rating: {p?.sellerRating} / 5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsCard;
