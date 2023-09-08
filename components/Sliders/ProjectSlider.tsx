import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { workData } from "../../components/WorkSlider";

export const ProjectSlider = ({ id }: { id: number }) => {
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
          <div
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
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
