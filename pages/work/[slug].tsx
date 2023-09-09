import React from "react";
import { motion } from "framer-motion";

import { Circles } from "../../components/Circles";
import { ProjectSlider } from "../../components/Sliders/ProjectSlider";
import { fadeIn } from "../../variants";
import { useRouter } from "next/router";
import { workData } from "../../components/Sliders/WorkSlider";

const Project = () => {
  const { query } = useRouter();

  const activeProject = workData.find((item) => item.id === Number(query.slug));

  return (
    <div className="h-full bg-primary/30 py-48 flex items-center">
      <p className="absolute bottom-[150px] right-3 w-36 text-right text-[12px] md:hidden">
        Другие работы
        <svg
          viewBox="0 -4.5 20 20"
          fill="#000000"
          className="w-4 ml-[95px] mt-1"
        >
          <g transform="translate(-220.000000, -6684.000000)" fill="gray">
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583"
                id="arrow_down-[#338]"
              />
            </g>
          </g>
        </svg>
      </p>
      <Circles />
      <div className="container mx-auto -mt-36">
        <div className="flex flex-col xl:flex-row gap-x-8 ">
          {/* <Link href="/work" className="ml-8 mb-10 text-slate-500">
            Назад
          </Link> */}

          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-4xl xl:mt-8"
            >
              {activeProject?.title} <span className="text-accent">.</span>
            </motion.h2>
          </div>
          {activeProject?.description ? (
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-left text-sm mt-6"
            >
              {activeProject?.description} <br />
            </motion.div>
          ) : null}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ProjectSlider id={Number(query.slug)} />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-left text-sm mt-6"
          >
            <b className="text-gray-300">В проекте имеется: </b>
            <p className="text-gray-400">
              {activeProject?.inProject.map((item) => {
                return (
                  <>
                    {item} <br />
                  </>
                );
              })}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
