import { css } from "@emotion/css";
import React from "react";
import MyColors from "_commons/MyColors";
import { ElevatedButton } from "_commons/widgets/ElevatedButton";
import { SizedBox } from "_commons/widgets/SizedBox";

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
            font-size: 18px;
          `}
        >
          {" "}
          HELLO, THERE
        </div>
        <SizedBox height="30px" />
        <div
          className={css`
            font-size: 60px;
          `}
        >
          I'M ALEXIS LARTEN
        </div>
        <SizedBox height="30px" />
        <div
          className={css`
            font-size: 18px;
          `}
        >
          App/Web Developer
        </div>
        <SizedBox height="30px" />
        <ElevatedButton backgroundColor={MyColors.pink} hoverBackgroundColor={MyColors.black} color={MyColors.white}>
          Download CV
        </ElevatedButton>
      </div>
    </div>
  );
});

export default HomePage;
