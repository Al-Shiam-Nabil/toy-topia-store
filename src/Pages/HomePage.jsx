import React, { useEffect } from "react";
import SwiperSlider from "../Components/SwiperSlider/SwiperSlider";

import Container from "../Components/Container/Container";
import BannerAside from "../Components/Home/BannerAside";
import useLoadData from "../Hooks/useLoadData";
import PopularCard from "../Components/Home/PopularCard";
import LoadingComponent from "../Components/Loading/LoadingComponent";

import brand1 from "../assets/partners-1_1.avif";
import brand2 from "../assets/partners-2_1.avif";
import brand3 from "../assets/partners-3_1.avif";
import brand4 from "../assets/partners-4_1.avif";
import brand5 from "../assets/partners-5_1.avif";
import brand6 from "../assets/partners-6_1.avif";
import brand7 from "../assets/partners-7_1.avif";
import brand8 from "../assets/partners-8_1.avif";
import brand9 from "../assets/partners-9_1.avif";
import brand10 from "../assets/partners-10_1.avif";
import brand11 from "../assets/partners-11_1.avif";
import brand12 from "../assets/partners-12_1.avif";
import LoadingPage from "../Components/Loading/LoadingPage";
import { useLocation } from "react-router";

const HomePage = () => {
  const { data, loading } = useLoadData();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <>
      <title>ToyTopia - Home</title>
      <div>
        <Container className="mt-5">
          {/* swiper slider */}
          <section className="grid grid-cols-12 gap-5 max-h-[500px] mb-20">
            <div className="col-span-full lg:col-span-9 h-full">
              <SwiperSlider></SwiperSlider>
            </div>
            <BannerAside></BannerAside>
          </section>
        </Container>

        {/* extra offer  */}
        <Container className="text-center space-y-6 my-20">
          <h2 className="text-5xl/15 md:text-6xl font-bold text-accent ">
            Get Up to{" "}
            <span className="text-primary animate-pulse inline-block">65%</span>{" "}
            Offer
          </h2>
          <h3 className=" text-4xl font-bold text-accent">Explore Now !</h3>
        </Container>

        {/* populer toys */}
        <section className="bg-gray-50 py-12">
          <Container>
            <h3 className="text-center text-2xl lg:text-4xl font-semibold pb-8 text-accent">
              Popular Toys
            </h3>

            {loading ? (
              <LoadingComponent></LoadingComponent>
            ) : (
              <section className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {data.map((toy) => (
                  <PopularCard
                    key={toy.toyId}
                    toy={toy}
                    loading={loading}
                  ></PopularCard>
                ))}
              </section>
            )}
          </Container>
        </section>

        {/* trusted brand */}
        <Container className="py-20 ">
          <section>
            <h3 className="text-center text-2xl lg:text-4xl font-semibold pb-8 text-accent md:mb-8">
              Our Trusted Brands
            </h3>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-y-10 gap-x-5">
              <img src={brand1} alt="brand logo" />
              <img src={brand2} alt="brand logo" />
              <img src={brand3} alt="brand logo" />
              <img src={brand4} alt="brand logo" />
              <img src={brand5} alt="brand logo" />
              <img src={brand6} alt="brand logo" />
              <img src={brand7} alt="brand logo" />
              <img src={brand8} alt="brand logo" />
              <img src={brand9} alt="brand logo" />
              <img src={brand10} alt="brand logo" />
              <img src={brand11} alt="brand logo" />
              <img src={brand12} alt="brand logo" />
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
