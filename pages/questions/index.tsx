import { motion } from "framer-motion";
import React from "react";
import { Circles } from "../../components/Circles";
import { fadeIn } from "../../variants";

const questions = [
  {
    id: 1,
    question: "Зачем мне интернет-магазин?",
    answer: `<p><b>1</b>. Вы сможете удобно продемонстрировать весь ваш ассортимент товаров структурированно, по категориям</p> <br/>
         <p><b>2</b>. Ваш сайт может стать дополнительным источником трафика. Укажите его в своих соц.сетях, а также продвигайте его через контекстную рекламу, рекламу на визитках, баннерах и тд</p> <br/>
         <p><b>3</b>. Посредством сайта вы выделитесь среди конкурентов, у которых нет своего сайта</p> <br/>
         <p><b>4</b>. Через интернет-магазин вы сможете стимулировать пользователей к покупке. Например сделав акцент на определенных товарах, указав ваши акции, выделив товары со скидкой и тд ...</p> <br/>
         `,
  },
  // <p><b>5</b>. Кто-то купит через переписку, кто-то придет на точку, а кто-то закажет через сайт</p> <br/>
  {
    id: 2,
    question: "А если мне сайт не понравится",
    answer: ``,
  },
];

const Questions = () => {
  const [activeAnswer, setActiveAnswer] = React.useState(0);

  return (
    <div className="h-full bg-primary/30 py-28 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col w-full">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 pb-4 -mt-20"
          >
            Вопрос / ответ <span className="text-accent">.</span>
          </motion.h2>
          <div className="w-full grid gap-4">
            {questions.map(({ id, question, answer }) => (
              <>
                <div
                  onClick={() =>
                    setActiveAnswer((prev) => (prev === id ? 0 : id))
                  }
                  className="border-b border-white py-2 md:py-4 px-4 w-[100%] text-left cursor-pointer"
                >
                  <div className="flex justify-between items-center gap-8 text-base lg:text-lg">
                    {question}
                    <svg
                      fill="#fff"
                      height="15px"
                      width="15px"
                      viewBox="0 0 330 330"
                      className={`${
                        activeAnswer === id ? "rotate-180" : null
                      } transition-all`}
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          id="XMLID_225_"
                          d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  {activeAnswer === id ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: answer }}
                      className="lg:text-lg mt-4 text-sm "
                    />
                  ) : null}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
