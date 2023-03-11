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
          justify-content: center;
          align-items: flex-start;
        `}
      >
        <Title/>
        <IntroductionCard/>
        <DownloadCV/>
        <Divider/>
        <HorizontalCardList/>
      </div>
    </div>
  );
});

const Title = ()=>{
  return (<></>);
};

const IntroductionCard = ()=>{
  return (<></>);
};

const DownloadCV = ()=>{
  return (<></>);
};

const HorizontalCardList = ()=>{
  return (<></>);
};





export default AboutPage;
