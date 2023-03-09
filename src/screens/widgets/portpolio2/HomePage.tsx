import { css, keyframes } from "@emotion/css";
import React from "react";
import MyColors from "_commons/MyColors";
import { ElevatedButton } from "_commons/widgets/ElevatedButton";
import { SizedBox } from "_commons/widgets/SizedBox";
import Typewriter from 'typewriter-effect';
import { Row } from "_commons/widgets/Row";

const typingEffectByWidth = keyframes`
  0% {
    width: 100%;
  }
  50% {
    width: 45%;
  }
  100% {
    width: 100%;
  }
`;

const typingFlicker = keyframes`
  0% {
    border-right: 1.5px solid black;
  }
  50% {
    border-right: 0px;
  }
  100% {
    border-right: 1.5px solid black;
  }
`;

//https://preview.themeforest.net/item/alexio-tailwind-css-personal-portfolio/full_screen_preview/42428238?_ga=2.164459583.185243531.1672614639-1925763281.1672614639&_gac=1.158435912.1672614639.CjwKCAiA-8SdBhBGEiwAWdgtcCYxLI1eiPFynnSVXXt_SSTLIgX795ismy3VyyukBFk-VIbk__HMzBoCfsIQAvD_BwE
const HomePage = React.memo(() => {
  return (
    <div
      className={css`
        display: flex;

        width: 100%;
        height: 100%;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-basis: 0; //최소 크기, 방향에 따라, basis가 width, height인지 결정남
          justify-content: center;
          align-items: center;

          flex-grow: 330;
          background-color: pink;
        `}
      >
        <img
          className={css`
            height: 100%;
            object-fit: cover;
          `}
          alt="profile"
          src="https://github.com/dev-tryit/try-portpolio-react/blob/main/public/profile.png?raw=true"
        />
      </div>
      <div
        className={css`
          flex-grow: 670;
          background-color: white;
          padding-left: 40px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        `}
      >
        <div
          className={css`
            position: relative;
            font-size: 18px;
            ::after {
              content: ""; //after는 content가 있어야 동작한다.
              position: absolute;
              top: -10px;
              left: -10px;
              height: 40px;
              width: 40px;
              border-radius: 50%;
              background-color: rgb(238 148 147 / 0.3);
            }
          `}
        >
          HELLO, THERE
        </div>
        <SizedBox height="30px" />
        <div
          className={css`
            position: relative;
            font-size: 60px;
            ::after {
              content: "";
              position: absolute;
              top: 20px;
              right: -10px;
              height: 40px;
              width: 40px;
              border-radius: 50%;
              background-color: rgb(96 165 250 / 0.5);
            }
          `}
        >
          I'M ETHAN
        </div >
        <SizedBox height="30px" />
        <div 
          className={css`
            display: flex;
            flex-direction: row;
          `}>
          APP/WEB&nbsp;
          <Typewriter
            options={{
              strings: [' DEVELOPER'],
              cursor: '&nbsp;&nbsp;|',
              deleteSpeed:90,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <SizedBox height="30px" />
        <ElevatedButton
          backgroundColor={MyColors.pink}
          hoverBackgroundColor={MyColors.black}
          color={MyColors.white}
        >
          Download CV
        </ElevatedButton>
      </div>
    </div>
  );
});

export default HomePage;
