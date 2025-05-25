"use client";

import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import axios from "axios";
import Image from "next/image";
import CategorySection from "@/components/CategorySection";

interface IBanner{
  _id: string,
  imageUrl: string
}

export default function HomePage() {
  const [banners, setBanners] = useState<IBanner[]>([]);

  // fetch all banners from server
  const fetchAllBanner = async () => {
    try {
      const allBanner = await axios.get(
        "https://jewellery-y5qn.onrender.com/api/banner"
      );
      console.log(allBanner.data.data);
      setBanners(allBanner?.data?.data);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  console.log(banners);

  useEffect(() => {
    fetchAllBanner();
  }, []);

  return (
    <div>
      <>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        
          {banners?.map((banner:IBanner, index: number) => (
            <SwiperSlide key={index}>
              <Image src={banner.imageUrl} height={100} width={2000} alt="banner-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
      <CategorySection />
    </div>
  );
}
