import React from "react";
import { motion } from "framer-motion";

import { Circles } from "../../components/Circles";
import { ProjectSlider } from "../../components/Sliders/ProjectSlider";
import { fadeIn } from "../../variants";
import { useRouter } from "next/router";
import { workData } from "../../components/WorkSlider";

const Project = () => {
  const { query } = useRouter();

  const activeProject = workData.find((item) => item.id === Number(query.slug));

  return (
    <div className="h-full bg-primary/30 py-48 flex items-center">
      <Circles />
      <div className="container mx-auto -mt-36">
        <div className="flex flex-col xl:flex-row gap-x-8 ">
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
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Проект представляет из себя сервис доставки еды <br />
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ProjectSlider id={Number(query.slug)} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
