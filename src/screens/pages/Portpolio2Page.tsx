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

  return (
    <div
      className={css`
        position: absolute;
        top: 0;
        width: 100vw;
        background-color: red;
      `}
      onClick={() => {}}
    >
      menu
    </div>
  );
});

const FixedMenu = React.memo(() => {
  const dispatch = useTypedDispatch();
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
        dispatch(ScreenReducer.actions.toggleMenu());
      }}
    >
      fixedMenu
    </div>
  );
});

const StackedScreen = React.memo(() => {
  const isMenuOn = useTypedSelector((state) => state.screen.isMenuOn);
  const screenList:string[] = ["page1","page2","page3"];
  const selectedScreenIndex:number = 0;

  return (
    <div className={css`
      width: 100vw;
      height: 100vh;
      perspective: 100px; //하위 태그에 translate3d가 작동하기 위해서 필요함.
    `}>
      {screenList.map((screen,i)=>{
        const isCurrentPage = i === selectedScreenIndex;

        return <div
        className={css`
          cursor: pointer;
          z-index: ${isCurrentPage?`${screenList.length}`:`${i}`};
          position: absolute;
          width: ${isCurrentPage?'100%':'0'};
          height: ${isCurrentPage?'100%':'0'};
          overflow: hidden;
          background-color: pink;
          transform: ${isMenuOn ? "translate3d(0,200px,-10px)" : undefined};
          transition: transform 0.45s, opacity 0.45s;
        `}
        onClick={()=>{
          alert(`페이지 ${i}가 클릭되었습니다.`);
        }}
      >
        {screen}
      </div>;
      })}
    </div>
  );
});

type ScreenProps = {
  open?: boolean;
};
const Screen = styled.div<ScreenProps>`
  ${({ open }) => `
    position: ${open ? "relative" : "absolute"};
    top:${open ? undefined : 0};
    width: 100%;
    height: 100%;
    background-color: ${open ? "blue" : "green"};
    opacity: ${open ? 1 : 0};
  `}
`;

export default Portpolio2Page;
