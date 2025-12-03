import React from "react";
import Navbar from "../Components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import LoadingPage from "../Components/Loading/LoadingPage";
import Notice from "../Components/Header/Notice";

const HomePageLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div className="flex flex-col min-h-screen">
      <Notice></Notice>
      <header className="sticky top-0 z-50">
        <Navbar></Navbar>
      </header>

      <main className="flex-1">
        {isNavigating && <LoadingPage></LoadingPage>}
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomePageLayout;
