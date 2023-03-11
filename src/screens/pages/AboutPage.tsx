import { css } from "@emotion/css";
import React from "react";
import { Divider } from "_commons/widgets/Divider";

const AboutPage = React.memo(() => {
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
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
        />
      </div>
      <div
        className={css`
          flex-grow: 670;
          background-color: white;
          padding-left: 40px;

          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: flex-start;

          padding: 50px;
        `}
      >
        <Title></Title>
        <IntroductionCard></IntroductionCard>
        <DownloadCV></DownloadCV>
        <Divider />
        <HorizontalCardList></HorizontalCardList>
      </div>
    </div>
  );
});

const Title = () => {
  return (
    <>
      <h6
        className={css`
          position: relative;
          z-index: 1;
          margin-bottom: 8px;
          display: inline-block;
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 3px;
          padding-bottom: 3px;
          font-size: 11px;
          font-weight: 600;
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
            --tw-skew-x: -20deg;
            --tw-rotate: 0;
            --tw-skew-x: 0;
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
        `}
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

const IntroductionCard = () => {
  return <></>;
};

const DownloadCV = () => {
  return <></>;
};

const HorizontalCardList = () => {
  return <></>;
};

export default AboutPage;
