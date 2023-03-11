import { css } from "@emotion/css";
import { genSequence } from "gensequence";
import React from "react";
import MyColors from "_commons/MyColors";
import { Divider } from "_commons/widgets/Divider";
import { ElevatedButton } from "_commons/widgets/ElevatedButton";
import { SizedBox } from "_commons/widgets/SizedBox";
import {
  BsCamera,
  BsEmojiSmile,
  BsHandThumbsUp,
  BsHeadphones,
} from "react-icons/bs";
import BigSubjectAboveImage from "screens/widgets/BigSubjectAboveImage";

const AboutPage = React.memo(() => {
  return (
    <div className={"grid grid-cols-12 w-full h-full"}>
      <div className={"relative col-span-4 bg-white"}>
        <img
          className={css`
            height: 100%;
            object-fit: cover;
          `}
          alt="profile"
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
        />
        <BigSubjectAboveImage>ABOUT ME</BigSubjectAboveImage>
      </div>
      <div
        className={
          "flex overflow-y-scroll flex-col col-span-8 items-start bg-white p-[50px] scrollbar-hide"
        }
      >
        <Title></Title>
        <IntroductionCard></IntroductionCard>
        <NumberCardWrap></NumberCardWrap>
      </div>
    </div>
  );
});

const Title = () => {
  return (
    <>
      <h6
        className={[
          css`
            position: relative;
            z-index: 1;
            margin-bottom: 8px;
            display: inline-block;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 3px;
            padding-bottom: 3px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 3px;
            --tw-text-opacity: 1;
            color: rgb(0 0 0 / var(--tw-text-opacity));

            ::after {
              content: "";
              position: absolute;
              top: 0px;
              bottom: 0px;
              left: 0px;
              right: 0px;
              z-index: -1;
              --tw-rotate: 0;
              --tw-skew-x: -20deg;
              --tw-skew-y: 0;
              --tw-scale-x: 1;
              --tw-scale-y: 1;
              --tw-translate-x: 0;
              --tw-translate-y: 0;
              transform: translate(var(--tw-translate-x), var(--tw-translate-y))
                rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
                skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
                scaleY(var(--tw-scale-y));
              --tw-bg-opacity: 1;
              background-color: rgb(238 148 147 / var(--tw-bg-opacity));
            }
          `,
          "font-bold",
        ].join(" ")}
      >
        WHO I AM
      </h6>
      <h2
        className={css`
          position: relative;
          z-index: 1;
          margin: 0px;
          display: inline-block;
          border-bottom-width: 1px;
          --tw-border-opacity: 1;
          border-color: rgb(229 231 235 / var(--tw-border-opacity));
          padding-bottom: 10px;
          font-size: 45px;
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1.1;
          --tw-text-opacity: 1;
          color: rgb(0 0 0 / var(--tw-text-opacity));
          margin-bottom: 40px;

          ::after {
            content: var(--tw-content);
            position: absolute;
            bottom: -4px;
            left: 0px;
            right: 0px;
            z-index: -1;
            height: 8px;
            width: 50px;
            --tw-skew-x: -36deg;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y))
              rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
              skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
              scaleY(var(--tw-scale-y));
            --tw-bg-opacity: 1;
            background-color: rgb(238 148 147 / var(--tw-bg-opacity));
          }
        `}
      >
        ABOUT
      </h2>
    </>
  );
};

class Skill {
  name: string;
  description: string;
  icon: JSX.Element;

  constructor(name: string, description: string, icon: JSX.Element) {
    this.name = name;
    this.description = description;
    this.icon = icon;
  }
}

const IntroductionCard = () => {
  const skillList: Skill[] = [
    new Skill(
      "Development",
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
  do eiusmod tempor incididunt.`,
      <i></i>
    ),
    new Skill(
      "Graphic",
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
  do eiusmod tempor incididunt.`,
      <i></i>
    ),
    new Skill(
      "Web design",
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
  do eiusmod tempor incididunt.`,
      <i></i>
    ),
    new Skill(
      "Mobile apps",
      `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
  do eiusmod tempor incididunt.`,
      <i></i>
    ),
  ];

  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 lg:col-span-4">
        <img
          src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          title=""
          alt=""
        />
      </div>
      <div className="col-span-12 lg:col-span-8">
        <div className="pb-[40px]">
          <h3 className="text-xl font-bold">I'm Alexis Larten</h3>
          <SizedBox height="10px"></SizedBox>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-8">
          {genSequence(skillList)
            .map((e) => {
              return (
                <div className="col-span-12 md:col-span-6">
                  <div className="feature-box">
                    {e.icon}
                    <div className="feature-content">
                      <h5 className="text-lg font-semibold">{e.name}</h5>
                      <p>{e.description}</p>
                    </div>
                  </div>
                </div>
              );
            })
            .toArray()}
        </div>
        <ElevatedButton
          className={"tracking-[2px] mt-[40px]"}
          backgroundColor={MyColors.pink}
          hoverBackgroundColor={MyColors.black}
          color={MyColors.white}
        >
          Download CV
        </ElevatedButton>
      </div>
    </div>
  );
};

class NumberCard {
  name: string;
  count: string;
  icon: JSX.Element;

  constructor(name: string, count: string, icon: JSX.Element) {
    this.name = name;
    this.count = count;
    this.icon = icon;
  }
}

const NumberCardWrap = () => {
  const numberCardList: NumberCard[] = [
    new NumberCard(
      `Happy Clients`,
      `365`,
      (
        <BsEmojiSmile
          size={"30px"}
          color={MyColors.pink}
          className={"mt-1 mr-5"}
        ></BsEmojiSmile>
      )
    ),
    new NumberCard(
      `Happy Clients`,
      `365`,
      (
        <BsHeadphones
          size={"30px"}
          color={MyColors.pink}
          className={"mt-1 mr-5"}
        ></BsHeadphones>
      )
    ),
    new NumberCard(
      `Happy Clients`,
      `365`,
      (
        <BsCamera
          size={"30px"}
          color={MyColors.pink}
          className={"mt-1 mr-5"}
        ></BsCamera>
      )
    ),
    new NumberCard(
      `Happy Clients`,
      `365`,
      (
        <BsHandThumbsUp
          size={"30px"}
          color={MyColors.pink}
          className={"mt-1 mr-5"}
        ></BsHandThumbsUp>
      )
    ),
  ];
  return (
    <div className="counter-row mt-[50px] pt-[50px] border-t border-gray-200 w-full">
      <div className="grid grid-cols-12 gap-5">
        {genSequence(numberCardList)
          .map((e) => {
            return (
              <div className="col-span-12 md:col-span-3 sm:col-span-6">
                <div className="flex flex-row">
                  <div className="icon">{e.icon}</div>
                  <div className="counter-data">
                    <div className="text-lg font-bold">{e.count}</div>
                    <h6 className="text-sm">{e.name}</h6>
                  </div>
                </div>
              </div>
            );
          })
          .toArray()}
      </div>
    </div>
  );
};

export default AboutPage;
