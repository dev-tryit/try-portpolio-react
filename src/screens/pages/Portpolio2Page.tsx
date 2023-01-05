import { css } from "@emotion/css";
import React from "react";
import styled from "styled-components";

const Portpolio2Page = React.memo(function () {
  return (
    <div
      className={css`
        width: 100vw;
        height: 100vh;
        background-color: rgb(17, 24, 39);
      `}
    >
    </div>
  );
});

const Menu = React.memo(styled.div.attrs(() => ({
  children: "menu",
}))`
  position: absolute;
  top: 0;
  width: 100vw;
  background-color: red;
`);

const FixedMenu = React.memo(styled.div.attrs(() => {
  return {
    children: "fixedMenu",
    onClick: () => {
      console.log("FixedMenu click");
    },
  };
})`
  position: fixed;
  top: 0;
  right: 0;
  width: 150px;
  background-color: purple;
`);

const StackedScreen = React.memo(
  styled.div.attrs(() => ({
    children: (
      <>
        <Screen>page3</Screen>
        <Screen>page2</Screen>
        <Screen open>page1</Screen>
      </>
    ),
  }))``
);

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
