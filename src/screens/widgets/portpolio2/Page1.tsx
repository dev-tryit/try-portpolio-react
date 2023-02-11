import { css } from "@emotion/css";
import React from "react";

const Page1 = React.memo(() => {
  return (
    <div
      className={css`
        width: 100%;
        height: 100%;
        background-color: pink;
      `}
    >
      Page1
    </div>
  );
});

export default Page1;
