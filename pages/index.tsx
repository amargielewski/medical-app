import type { NextPage } from "next";
import Image from "next/image";
import { PhoneIcon } from "../Icons/PhoneIcon";
import PhoneScreenTop from "../assets/PhoneScreenTop.png";
import PhoneScreenTop1 from "../assets/2.png";
import { LeftArrow } from "../Icons/LeftArrow";
import { RightArrow } from "../Icons/RightArrow";
import { useState } from "react";
import { PhoneMessageIcon } from "../Icons/PhoneMessageIcon";
import { PillsIcon } from "../Icons/PillsIcon";

const obj = [
  {
    photo: PhoneScreenTop,
    articleTitle: "Pobierz aplikację",
    colorClass: "cgreen",
    animation: "swap-reverse",
    icon: <PhoneIcon />,
    buttonBG: "#0A40A1",
    colorText: "#fff",
  },
  {
    photo: PhoneScreenTop1,
    articleTitle: "Pobierz z lekarzem",
    colorClass: "cblue",
    animation: "swap",
    icon: <PhoneMessageIcon />,
    buttonBG: "#26C299",
    colorText: "#fff",
  },
  {
    photo: PhoneScreenTop1,
    articleTitle: "Otrzymaj receptę",
    colorClass: "cpink",
    animation: "swap-reverse",
    icon: <PillsIcon />,
    buttonBG: "#0A40A1",
    colorText: "#333330",
  },
];

const Home: NextPage = () => {
  const [index, setIndex] = useState(0);

  const handleClickNext = () => {
    setIndex((prev) => (prev < 2 ? prev + 1 : 0));
  };

  const handleClickPrev = () => {
    setIndex((prev) => (prev <= 0 ? 2 : prev - 1));
  };

  return (
    <div className={`app ${obj[index].animation} ${obj[index].colorClass}`}>
      <div
        onClick={handleClickPrev}
        className="left-arrow text-[14px] sm:text-[32px]"
      >
        <LeftArrow />
      </div>
      <div className="box1">
        <div className="content">
          <div className={`text-[82px] sm:text-[135px]`}>{obj[index].icon}</div>
          <h2
            style={{ color: obj[index].colorText }}
            className={`font-['Poppins'] font-[700]   leading-[30px] mb-[24px] sm:mb-[34px] text-[24px] sm:text-[48px] sm:leading-[58px]  `}
          >
            {obj[index].articleTitle}
          </h2>
          <p
            style={{ color: obj[index].colorText }}
            className={`font-['Nunito_Sans'] text-[16px] font-[400]  leading-[24px]  mb-[24px] sm:text-[24px]] sm:font-[600] sm:mb-[32px] sm:leading-[32px] `}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit s ed risus.
          </p>
          <button
            style={{ background: obj[index].buttonBG }}
            className={`text-[#fff] font-[600] leading-[24px]  font-['Nunito_Sans'] py-[8px] px-[16px] rounded-[2px] w-max  `}
          >
            Pobierz aplikację
          </button>
        </div>
      </div>
      <div className="box2">
        <div className="image">
          <Image src={obj[index].photo} alt={""} />
        </div>
      </div>
      <div
        onClick={handleClickNext}
        className="right-arrow text-[14px] sm:text-[32px]"
      >
        <RightArrow />
      </div>
    </div>
  );
};

export default Home;
