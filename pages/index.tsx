import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import ParticlesContainer from "../components/ParticlesContainer";
import { aboutData } from "./about";
import React from "react";
import { Circles } from "../components/Circles";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <Circles />
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div
          className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto"
        >
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 -mt-20"
          >
            Добро <span className="text-accent">пожаловать</span> <br />
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-16 text-white"
          >
            Меня зовут Залимхан, мне 22 года <br /> Я программист, разработчик
            сайтов
            <br /> <br />Я использую актуальные веб-технологии, с помощью
            которых можно разрабатывать SEO-оптимизированные и быстрые
            веб-сайты, которые в дальнейшем можно легко масштабировать и
            продвигать
            <br /> <br />
            <p className="xl:hidden text-sm">
              Кликните на кружочек, <br /> чтобы посмотреть мои работы
            </p>
          </motion.p>
          <div className="flex justify-center xl:hidden relative z-10">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          ></motion.div>
        </div>
      </div>

      <div className="w-full h-full absolute right-0 bottom-0 ">
        <div
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full
          absolute mix-blend-color-dodge translate-z-0"
        />
        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0
        lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
