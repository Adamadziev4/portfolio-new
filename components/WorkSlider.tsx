import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import Link from "next/link";

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

export const workData = [
  {
    id: 1,
    title: "Мужская одежда",
    description: "",
    imgUrl: "/portfolio/akula/main.png",
    imgUrls: [
      "/portfolio/akula/1.1.png",
      "/portfolio/akula/1.2.png",
      "/portfolio/akula/1.3.png",
      "/portfolio/akula/main.png",
      "/portfolio/akula/4.png",
      "/portfolio/akula/5.png",
      "/portfolio/akula/6.png",
      "/portfolio/akula/7.png",
      "/portfolio/akula/8.png",
    ],
  },
  {
    id: 2,
    title: "Сервис доставки еды",
    description: "",
    imgUrl: "/portfolio/food-dashboard/main.png",
    imgUrls: [
      "/portfolio/food-dashboard/1.png",
      "/portfolio/food-dashboard/2.png",
      "/portfolio/food-dashboard/3.png",
      "/portfolio/food-dashboard/4.png",
    ],
  },
  {
    id: 3,
    title: "Кроссовки",
    description: "",
    imgUrl: "/portfolio/sneakers/main.png",
    imgUrls: [
      "/portfolio/sneakers/1.1.png",
      "/portfolio/sneakers/1.2.png",
      "/portfolio/sneakers/1.3.png",
      "/portfolio/sneakers/2.png",
      "/portfolio/sneakers/4.png",
      "/portfolio/sneakers/5.png",
    ],
  },
];

// const workData = [
//   {
//     id: 1,
//     imgUrl: "/thumb1.jpg",
//   },
//   {
//     id: 2,
//     imgUrl: "/thumb2.jpg",
//   },
//   {
//     id: 3,
//     imgUrl: "/thumb3.jpg",
//   },
//   {
//     id: 4,
//     imgUrl: "/thumb4.jpg",
//   },
//   {
//     id: 5,
//     imgUrl: "/thumb1.jpg",
//   },
//   {
//     id: 6,
//     imgUrl: "/thumb4.jpg",
//   },
//   {
//     id: 7,
//     imgUrl: "/thumb2.jpg",
//   },
//   {
//     id: 8,
//     imgUrl: "/thumb3.jpg",
//   },
// ];

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
      {workData.slice(0, 8).map((item) => (
        <SwiperSlide key={item.id}>
          <Link
            href={`/work/${item.id}`}
            className="relative rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer"
            key={item.imgUrl}
          >
            <div className="flex items-center justify-center relative overflow-hidden group">
              <Image
                src={item.imgUrl}
                width={500}
                height={300}
                alt={`Портфолио-${item.id}`}
              />
              <div
                className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cbb1]
                  to-[#4922bdb7] opacity-0 group-hover:opacity-80 transition-all duration-700"
              />
              <div
                className="absolute bottom-0 translate-y-full group-hover:-translate-y-10
                    group-hover:xl:-translate-y-20 transition-all duration-300"
              >
                <div
                  className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] bg-slate-500
                text-white py-1 px-2"
                >
                  {/* <div className="delay-100">LIVE</div> */}
                  <div
                    className="translate-y-[500%] group-hover:translate-y-0 transition-all
                      duration-300 delay-150 "
                  >
                    <p className="">{item.title}</p>
                    {/* PROJECT */}
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
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
