import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import LoadingPage from "../Components/Loading/LoadingPage";
import Container from "../Components/Container/Container";

const PrivacyPolicyPage = () => {
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
      <title>ToyTopia - privacy policy</title>
      <Container className="bg-gray-50 pt-10 pb-20">
        <section className="bg-white px-4 py-8 sm:p-10 rounded-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-secondary mb-10">
            privacy policy
          </h2>

          <div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">
                1. INTRODUCTION TO THIS PRIVACY POLICY
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
                2. THE PERSONAL DATA WE COLLECT
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
                3. USE AND DISCLOSURE OF YOUR PERSONAL DATA
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
                4. UPDATING YOUR PERSONAL DATA
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
                5. WITHDRAWAL OF CONSENT
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
                6. ACCESSING AND CORRECTING
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
                7. SECURITY OF YOUR PERSONAL DATA
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
          </div>
        </section>
      </Container>
    </>
  );
};

export default PrivacyPolicyPage;
