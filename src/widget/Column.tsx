import styled from "styled-components";



export const Column = styled.div<{useRandomBackgroundColor?:boolean, fullWidth?:boolean, fullHeight?:boolean}>`
    display:flex;
    flex-direction:column;
    height: max-content; //main 방향은 최소화 (flutter와 다른게 있다면, 자식이 부모의 크기를 넘지 않는다.)
    width: fit-content; //cross 방향은 최소화
    justify-content: flex-start;
    align-items: center;
    ${({useRandomBackgroundColor}) => useRandomBackgroundColor?'#' + Math.floor(Math.random()*16777215).toString(16):''};
    ${({fullWidth}) => fullWidth?'width:100%':''};
    ${({fullHeight}) => fullHeight?'height:100%':''};
`;
