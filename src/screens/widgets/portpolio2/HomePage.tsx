import { css, keyframes } from "@emotion/css";
import React from "react";
import MyColors from "_commons/MyColors";
import { ElevatedButton } from "_commons/widgets/ElevatedButton";
import { SizedBox } from "_commons/widgets/SizedBox";

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
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b36e2263-a330-456e-9553-144f12949fa9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230302T132256Z&X-Amz-Expires=86400&X-Amz-Signature=d72ab9daacdb4ef3dac41eb7eb1c77f237f64bdcf3f6624d7ae63cc8739a6a77&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"
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
          I'M ALEXIS LARTEN
        </div>
        <SizedBox height="30px" />
        <div
          className={css`
            position: relative;
            font-size: 20px;
            white-space: nowrap;
            color: transparent;
            ::before {
              content: "APP/WEB DEVELOPER";
              color: black;

              //현재 div에 대해 100%의 크기를 갖도록 하는것이 목적
              position: absolute;
              width: 100%;
              height: 100%;
              left:0px;

              overflow: hidden;
              //5초동안 31단계를 통해 typing을 보여줘. 계속. (31단계가, 뚝뚝 끊기는 느낌을 줌.)
              animation: ${typingEffectByWidth} 3s steps(10) infinite;
            }
            ::after {
              content: "";
              color: black;

              //현재 div에 대해 100%의 크기를 갖도록 하는것이 목적
              position: absolute;
              width: 100%;
              height: 100%;
              left:0px;
              margin-left: 15px;

              overflow: hidden;
              border-right: 1.5px solid black;
              //5초동안 31단계를 통해 typing을 보여줘. 계속. (31단계가, 뚝뚝 끊기는 느낌을 줌.)
              animation: ${typingEffectByWidth} 3s steps(10) infinite,  ${typingFlicker} 2s infinite;
            }
          `}
        >
          APP/WEB DEVELOPER
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
