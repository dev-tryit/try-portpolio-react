import { css } from "@emotion/css";
import styled from "@emotion/styled";
import React from "react";

const Portpolio2Page = React.memo(() => {
  return (
    <div
      className={css`
        width: 100vw;
        height: 100vh;
        background-color: rgb(17, 24, 39);
      `}
    >
      <Menu />
      <FixedMenu />
      <StackedScreen />
    </div>
  );
});

const Menu = React.memo(() => {
  return (
    <div
      className={css`
        position: absolute;
        top: 0;
        width: 100vw;
        background-color: red;
      `}
    >
      menu
    </div>
  );
});

const FixedMenu = React.memo(() => {
  return (
    <div
      className={css`
        position: fixed;
        top: 0;
        right: 0;
        width: 150px;
        background-color: purple;
      `}
      onClick={() => {
        console.log("FixedMenu click");
      }}
    >
      fixedMenu
    </div>
  );
});

const StackedScreen = React.memo(() => {
  return (
    <div>
      <Screen>page3</Screen>
      <Screen>page2</Screen>
      <Screen open>page1</Screen>
    </div>
  );
});

type ScreenProps = {
  open?: boolean;
};
const Screen = React.memo(styled.div<ScreenProps>`
  ${({ open }) => {
    if (open) {
      return `
          position: relative;
          width: 100vw;
          height: 100vh;
          background-color: blue;
      `;
    } else {
      return `
          position: absolute;
          top:0;
          width: 100vw;
          background-color: green;
      `;
    }
  }}
`);

export default Portpolio2Page;
