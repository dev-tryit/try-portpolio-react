import React from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { useTypedDispatch, useTypedSelector } from "_commons/utils/ReduxUtil";
import { ScreenReducer } from "services/ScreenReducer"; //이게 맨아래있지 않으면 에러남..

const Portpolio2Page = React.memo(() => {
  return (
    <div
      className={css`
        width: 100vw;
        height: 100vh;
        background-color: rgb(17, 24, 39);
        overflow: hidden;
      `}
    >
      <Menu />
      <StackedScreen />
      <FixedMenu />
    </div>
  );
});

const Menu = React.memo(() => {
  const isMenuOn = useTypedSelector((state) => state.screen.isMenuOn);
  const menuList: string[] = ["HOME", "ABOUT US", "RESUME"];

  return (
    <nav
      className={css`
        position: absolute;
        top: 0;
        width: 100vw;
        height: 50vh;
        padding: 30px;

        transition: transform 1.2s, opacity 1.2s;
        opacity: ${isMenuOn ? 1 : 0};
        transform: ${isMenuOn
          ? `translate3d(0,0,0)`
          : `translate3d(0,150px,0)`};

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      `}
      onClick={() => {}}
    >
      {menuList.map((menu) => (
        <div
          className={css`
            cursor: pointer; //TODO: 해당 커서가 활성화가 안됨...
            color: white;
            text-align: center;
            font-size: 18px;
            font-weight: 500;
            text-transform: uppercase;

            margin-left: 14px;
            margin-right: 14px;
          `}
          onClick={() => {}}
        >
          {menu}
        </div>
      ))}
    </nav>
  );
});

const FixedMenu = React.memo(() => {
  const dispatch = useTypedDispatch();
  return (
    <div
      className={css`
        cursor: pointer;

        position: fixed;
        top: 0;
        right: 0;
        width: 150px;
        background-color: purple;
      `}
      onClick={() => {
        dispatch(ScreenReducer.actions.toggleMenu());
      }}
    >
      fixedMenu
    </div>
  );
});

const StackedScreen = React.memo(() => {
  const isMenuOn = useTypedSelector((state) => state.screen.isMenuOn);
  const screenList: string[] = ["page", "page", "page"];
  const selectedScreenIndex: number = 0;

  return (
    <div
      className={css`
        width: 100vw;
        height: 100vh;
        perspective: 1000px; //소실점에 위치 지정
        perspective-origin: 50% -50%; //보고 있는 눈에 위치를 변경.
      `}
    >
      {screenList.map((screen, i) => {
        const isCurrentPage = i === selectedScreenIndex;

        return (
          <div
            className={css`
              cursor: pointer;
              z-index: ${isCurrentPage
                ? `${screenList.length}`
                : `${screenList.length - 1 - i}`};
              position: absolute;
              width: 100%;
              height: 100%;
              overflow: hidden;
              background-color: pink;

              transition: transform 0.45s, opacity 0.45s;
              opacity: ${1 - 0.1 * i};
              transform: ${isMenuOn
                ? `translate3d(0,75%,${-200 - i * 50}px)`
                : undefined};
            `}
            onClick={() => {
              alert(`페이지 ${i}가 클릭되었습니다.`);
            }}
          >
            {screen}
            {i}
          </div>
        );
      })}
    </div>
  );
});
export default Portpolio2Page;
