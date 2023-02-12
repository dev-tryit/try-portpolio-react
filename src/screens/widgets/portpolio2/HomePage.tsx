import { css } from "@emotion/css";
import React from "react";

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
          display:flex;
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
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b36e2263-a330-456e-9553-144f12949fa9/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230212T105239Z&X-Amz-Expires=86400&X-Amz-Signature=197c91f876826ce229c82a583247ea437c0a66577bd979e67c79b2cb808969dc&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"
        />
      </div>
      <div
        className={css`
          flex-grow: 670;
          background-color: white;
        `}
      ></div>
    </div>
  );
});

export default HomePage;
