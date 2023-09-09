import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { workData } from "./WorkSlider";

export const ProjectSlider = ({ id }: { id: number }) => {
  const activeProject = workData.find((item) => item.id === id);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        959: {
          slidesPerView: 2,
        },
      }}
      pagination={{ clickable: true }}
      modules={[Pagination]}
    >
      {activeProject?.imgUrls.map((item) => (
        <SwiperSlide key={item}>
          <div className="relative rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer">
            <div className="flex items-center justify-center relative overflow-hidden group">
              <Image src={item} width={500} height={300} alt={`Портфолио`} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
