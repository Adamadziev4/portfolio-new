import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

export const navData = [
  { name: "Главная", path: "/", icon: <HiHome /> },
  { name: "Технологии", path: "/about", icon: <HiRectangleGroup /> },
  // { name: "Мои работы", path: "/my-services", icon: <HiRectangleGroup /> },
  { name: "Мои работы", path: "/work", icon: <HiViewColumns /> },
  // {
  //   name: "testimonials",
  //   path: "/testimonials",
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  // {
  //   name: "contact",
  //   path: "/contact",
  //   icon: <HiEnvelope />,
  // },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0
    mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
    >
      <div
        className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10
      px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full"
      >
        {navData.map((nav, i) => (
          <Link
            key={nav.name}
            href={nav.path}
            className={`${
              nav.path === pathname ? "text-accent" : null
            } relative flex items-center group hover:text-accent transition-all duration-300`}
          >
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {nav.name}
                </div>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              {nav.icon}
              <p className="text-sm xl:hidden">{nav.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
