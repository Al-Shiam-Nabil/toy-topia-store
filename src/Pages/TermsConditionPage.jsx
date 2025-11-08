import React, { useContext, useEffect } from "react";
import Container from "../Components/Container/Container";
import { AuthContext } from "../Context/AuthContext";
import LoadingPage from "../Components/Loading/LoadingPage";
import { useLocation } from "react-router";

const TermsConditionPage = () => {
  const { loading } = useContext(AuthContext);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <>
      <title>ToyTopia - Terms and Conditions</title>
      <Container className="bg-gray-50 pt-10 pb-20">
        <section className="bg-white px-4 py-8 sm:p-10 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-secondary mb-10">
            Terms and Conditions
          </h2>

          <div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">1. INTRODUCTION</h3>
              <p>
                Daraz offers the easiest collection point service to facilitate
                low-cost delivery to customers, where customers can collect
                their orders from their nearest pick-up point. After selecting
                the product you want to order or adding your items to the cart,
                follow these simple steps mentioned below:Click on “Collect your
                parcel from the nearest Daraz Pick-up point with a reduced
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">
                2. CONDITIONS OF USE
              </h3>
              <p>
                Daraz offers the easiest collection point service to facilitate
                low-cost delivery to customers, where customers can collect
                their orders from their nearest pick-up point. After selecting
                the product you want to order or adding your items to the cart,
                follow these simple steps mentioned below:Click on “Collect your
                parcel from the nearest Daraz Pick-up point with a reduced
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">
                3. CONDITIONS OF SALE (BETWEEN SELLERS AND CUSTOMERS)
              </h3>
              <p>
                Daraz offers the easiest collection point service to facilitate
                low-cost delivery to customers, where customers can collect
                their orders from their nearest pick-up point. After selecting
                the product you want to order or adding your items to the cart,
                follow these simple steps mentioned below:Click on “Collect your
                parcel from the nearest Daraz Pick-up point with a reduced
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">4. BUYER POLICY</h3>
              <p>
                Daraz offers the easiest collection point service to facilitate
                low-cost delivery to customers, where customers can collect
                their orders from their nearest pick-up point. After selecting
                the product you want to order or adding your items to the cart,
                follow these simple steps mentioned below:Click on “Collect your
                parcel from the nearest Daraz Pick-up point with a reduced
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">
                5. REPRESENTATIONS AND WARRANTIES
              </h3>
              <p>
                Daraz offers the easiest collection point service to facilitate
                low-cost delivery to customers, where customers can collect
                their orders from their nearest pick-up point. After selecting
                the product you want to order or adding your items to the cart,
                follow these simple steps mentioned below:Click on “Collect your
                parcel from the nearest Daraz Pick-up point with a reduced
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">6. RETURNS</h3>
              <p>
                Daraz offers the easiest collection point service to facilitate
                low-cost delivery to customers, where customers can collect
                their orders from their nearest pick-up point. After selecting
                the product you want to order or adding your items to the cart,
                follow these simple steps mentioned below:Click on “Collect your
                parcel from the nearest Daraz Pick-up point with a reduced
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">7. Others</h3>
              <p>
                Daraz offers the easiest collection point service to facilitate
                low-cost delivery to customers, where customers can collect
                their orders from their nearest pick-up point. After selecting
                the product you want to order or adding your items to the cart,
                follow these simple steps mentioned below:Click on “Collect your
                parcel from the nearest Daraz Pick-up point with a reduced
              </p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default TermsConditionPage;
