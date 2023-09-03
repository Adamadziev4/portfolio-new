import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const workData = [
  {
    id: 1,
    imgUrl: "/thumb1.jpg",
  },
  {
    id: 2,
    imgUrl: "/thumb2.jpg",
  },
  {
    id: 3,
    imgUrl: "/thumb3.jpg",
  },
  {
    id: 4,
    imgUrl: "/thumb4.jpg",
  },
  {
    id: 5,
    imgUrl: "/thumb1.jpg",
  },
  {
    id: 6,
    imgUrl: "/thumb4.jpg",
  },
  {
    id: 7,
    imgUrl: "/thumb2.jpg",
  },
  {
    id: 8,
    imgUrl: "/thumb3.jpg",
  },
];

const WorkSlider = () => {
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
      {workData.slice(0, 8).map((item, i) => (
        <SwiperSlide key={item.imgUrl}>
          <div
            className="relative rounded-lg overflow-hidden flex items-center justify-center group"
            key={item.imgUrl}
          >
            <div className="flex items-center justify-center relative overflow-hidden group">
              <Image
                src={item.imgUrl}
                width={500}
                height={300}
                alt={`Портфолио-${i + 1}`}
              />
              <div
                className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cbb1]
                  to-[#4922bdb7] opacity-0 group-hover:opacity-80 transition-all duration-700"
              />
              <div
                className="absolute bottom-0 translate-y-full group-hover:-translate-y-10
                    group-hover:xl:-translate-y-20 transition-all duration-300"
              >
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  <div className="delay-100">LIVE</div>
                  <div
                    className="translate-y-[500%] group-hover:translate-y-0 transition-all
                      duration-300 delay-150"
                  >
                    PROJECT
                  </div>
                  <div
                    className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all
                        duration-300 delay-200"
                  >
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
