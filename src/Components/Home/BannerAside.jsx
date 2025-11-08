import React from "react";
import asideBanner1 from "../../assets/aside-banner-1.jpg";
import asideBanner2 from "../../assets/aside-banner-2.jpg";
import asideBanner3 from "../../assets/aside-banner-3.jpg";
const BannerAside = () => {
  return (
    <div className="col-span-3 hidden lg:flex flex-col justify-between">
      <img
        src={asideBanner1}
        alt="banner aside image"
        className="w-full h-[155px] object-cover rounded-xl"
      />
      <img
        src={asideBanner2}
        alt="banner aside image"
        className="w-full h-[155px] object-cover rounded-xl"
      />
      <img
        src={asideBanner3}
        alt="banner aside image"
        className="w-full h-[155px] object-cover rounded-xl"
      />
    </div>
  );
};

export default BannerAside;
