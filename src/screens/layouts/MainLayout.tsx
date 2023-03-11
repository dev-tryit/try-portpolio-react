import React, { useState } from "react";
import { css } from "@emotion/css";
import { useTypedDispatch, useTypedSelector } from "_commons/utils/ReduxUtil";
import { PageReducer } from "services/PageReducer"; //이게 맨아래있지 않으면 에러남..
import MyColors from "_commons/MyColors";
import { SizedBox as SizedBox } from "_commons/widgets/SizedBox";
import { RiCloseFill, RiMenu5Fill } from "react-icons/ri";
import { genSequence } from "gensequence";

const MainLayout = React.memo(() => {
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
  const isMenuOn = useTypedSelector((state) => state.page.isMenuOn);
  const menuList = useTypedSelector((state) =>
    Object.keys(state.page.screenMap)
  );
  const dispatch = useTypedDispatch();

  return (
    <nav
      className={css`
        ${isMenuOn?'z-index: 1;':''}
        position: absolute;
        top: 0;
        width: 100vw;
        height: 30vh;
        padding: 20vh;

        transition: transform 0.4s, opacity 0.4s;
        opacity: ${isMenuOn ? 1 : 0};
        transform: ${isMenuOn
          ? `translate3d(0,0,0)`
          : `translate3d(0,120px,0)`};

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      `}
      onClick={() => {}}
    >
      {menuList.map((menu, i) => (
        <div
          className={css`
            ${isMenuOn ? 'cursor: pointer;': ''}//not working.. 이 때는, 해당 페이지가 뒤에 있기 때문일 수 있다.

            color: white;
            text-align: center;
            font-size: 18px;
            font-weight: 500;
            text-transform: uppercase;

            margin-left: 14px;
            margin-right: 14px;
          `}
          onClick={() => {
            dispatch(
              PageReducer.actions.selectedScreenIndex({
                selectedScreenIndex: i,
              })
            );
          }}
        >
          {menu}
        </div>
      ))}
    </nav>
  );
});

const FixedMenu = React.memo(() => {
  const dispatch = useTypedDispatch();
  const isMenuOn = useTypedSelector((state) => state.page.isMenuOn);

  return (
    <div
      className={css`
        z-index: 10001;
        position: fixed;
        top: 0;
        right: 0;

        display: flex;
        width: 300px;
        height: 60px;
      `}
    >
      <div
        className={css`
          flex-grow: 1;
          height: 100%;
          background-color: ${MyColors.pink};

          color: ${MyColors.white};
          font-size: 20px;
          font-weight: 900;

          display: flex;
          align-items: center;
        `}
      >
        <SizedBox width="15px" />
        TryIt
      </div>
      <div
        className={css`
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;

          width: 60px;
          height: 60px;
          background-color: ${MyColors.black};
          color: ${MyColors.white};
          font-size: 30px;
          font-weight: 300;
        `}
        onClick={() => {
          dispatch(PageReducer.actions.toggleMenu());
        }}
      >
        {isMenuOn ? <RiCloseFill /> : <RiMenu5Fill />}
      </div>
    </div>
  );
});

const StackedScreen = React.memo(() => {
  const dispatch = useTypedDispatch();
  const isMenuOn = useTypedSelector((state) => state.page.isMenuOn);
  const screenList = useTypedSelector((state) => {
    const p = state.page;

    const screenList = [...Object.values(p.screenMap)];
    const screenWithIndexList = Object.entries({ ...screenList }); //[[0,HomeScreen],[1,AboutScreen]]
    return genSequence([...screenWithIndexList, ...screenWithIndexList])
      .skip(p.selectedScreenIndex)
      .take(3)
      .toArray();
  });

  return (
    <div
      className={css`
        width: 100vw;
        height: 100vh;
        perspective: 1000px; //소실점에 위치 지정
        perspective-origin: 50% -50%; //보고 있는 눈에 위치를 변경.
      `}
    >
      {screenList.map(([selectedScreenIndex, screen]:[selectedScreenIndex:string,screen:any], i) => {
        return (
          <div
            className={css`
              ${isMenuOn ? 'cursor: pointer;': ''}
              z-index: ${screenList.length - 1 - i};
              position: absolute;
              width: 100%;
              height: 100%;
              overflow: hidden;

              transition: transform 0.45s, opacity 0.45s;
              opacity: ${1 - 0.1 * i};
              transform: ${isMenuOn
                ? `translate3d(0,75%,${-200 - i * 50}px)`
                : undefined};
            `}
            onClick={() => {
              dispatch(
                PageReducer.actions.selectedScreenIndex({
                  selectedScreenIndex: Number(selectedScreenIndex),
                })
              );
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

export default MainLayout;
