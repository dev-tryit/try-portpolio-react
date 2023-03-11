import { css } from "@emotion/css";
import React from "react";
import BigSubjectAboveImage from "screens/widgets/BigSubjectAboveImage";
import LAndLongR from "screens/widgets/LAndLongR";

const ResumePage = React.memo(() => {
  return (
    <LAndLongR
      left={
        <>
          <img
            className={css`
              height: 100%;
              object-fit: cover;
            `}
            alt="profile"
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
          />
          <BigSubjectAboveImage>MY RESUME</BigSubjectAboveImage>
        </>
      }
      right={
        <>
          {/* <Title></Title>
          <IntroductionCard></IntroductionCard>
          <NumberCardWrap></NumberCardWrap> */}
        </>
      }
    ></LAndLongR>
  );
});

export default ResumePage;
