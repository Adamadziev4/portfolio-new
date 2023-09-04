import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import Avatar from "../../components/Avatar";
import { Circles } from "../../components/Circles";
import { fadeIn } from "../../variants";

const aboutData = [
  {
    title: "Технологии",
    info: [
      {
        // title: "Разработка",
        icons: [
          {
            title: "HTML",
            imgUrl: "/techIcons/html.png",
          },
          {
            title: "CSS",
            imgUrl: "/techIcons/css.png",
          },
          {
            title: "TypeScript",
            imgUrl: "/techIcons/ts.png",
          },
          {
            title: "React",
            imgUrl: "/techIcons/react.png",
          },
          {
            title: "Next",
            imgUrl: "/techIcons/nextjs.png",
          },
          {
            title: "Node",
            imgUrl: "/techIcons/node.png",
          },
          {
            title: "Postgre",
            imgUrl: "/techIcons/pgsql.png",
          },
          {
            title: "Strapi",
            imgUrl: "/techIcons/strapi.png",
          },
        ],
      },
      // {
      //   title: "Дизайн",
      //   icons: ["/techIcons/figma.png"],
      // },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  {
    title: "Опыт",
    info: [
      {
        title: "Интернет-провайдер Ellco",
        stage: "Март 2023 - Сентябрь 2023",
      },
    ],
  },
  // {
  //   title: "credentials",
  //   info: [
  //     {
  //       title: "Web Development - ABC University, LA, CA",
  //       stage: "2011",
  //     },
  //     {
  //       title: "Computer Science Diploma - AV Technical Institute",
  //       stage: "2009",
  //     },
  //     {
  //       title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
  //       stage: "2006",
  //     },
  //   ],
  // },
];

const About = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 pb-4"
          >
            Технологии <span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-8 xl:mb-12 px-2 xl:px-0"
          >
            Я использую актуальные веб-технологии, с помощью которых можно
            разрабатывать SEO-оптимизированные и быстрые веб-сайты, которые в
            дальнейшем можно легко масштабировать и продвигать
          </motion.p>
          {/* <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute
              after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  ~1.5
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              <div
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute
              after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>

              <div
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute
              after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-6 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, i) => (
              <div
                key={item.title}
                className={`${
                  index === i
                    ? "text-accent after:w-[100%] after:bg-accent after:transition-all"
                    : "after:w-8"
                } cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:duration-300 after:bg-white
                after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(i)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex"></div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4"></div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-12 justify-center items-center">
                  {item.icons?.map((icon, iconIndex) => (
                    <div className="text-[14px] text-white/80 flex flex-col justify-center items-center gap-1">
                      <Image
                        src={icon.imgUrl}
                        width={50}
                        height={50}
                        alt="Технология"
                      />
                      <span>{icon.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
