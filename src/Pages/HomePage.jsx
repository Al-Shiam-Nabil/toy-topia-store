import React, { useEffect } from "react";
import SwiperSlider from "../Components/SwiperSlider/SwiperSlider";

import Container from "../Components/Container/Container";
import BannerAside from "../Components/Home/BannerAside";
import useLoadData from "../Hooks/useLoadData";
import PopularCard from "../Components/Home/PopularCard";
import LoadingComponent from "../Components/Loading/LoadingComponent";

import LoadingPage from "../Components/Loading/LoadingPage";
import { useLocation } from "react-router";
import OurCommitment from "../Components/Home/OurCommitment";
import TrustedBrands from "../Components/Home/TrustedBrands";
import BodyBanner from "../Components/Home/BodyBanner";
import Details from "../Components/Home/Details";
import Testimonials from "../Components/Home/Testimonials";
import CircleBanner from "../Components/Home/CircleBanner";

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

        {/* our commitment */}
        <Container>
          <OurCommitment></OurCommitment>
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
            <h3 className="text-3xl font-bold text-center mb-10 ">
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

        {/* details */}
        <Details></Details>

        {/* body banner */}
        <Container>
          <BodyBanner></BodyBanner>
        </Container>

        {/* circle banner */}
        <Container>
          <CircleBanner></CircleBanner>
        </Container>

        {/* testimonials */}
        <Container>
          <Testimonials></Testimonials>
        </Container>

        {/* trusted brand */}
        <Container className="pb-20">
        <TrustedBrands></TrustedBrands>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
