import styled from "styled-components";

export const Row = styled.div<{useRandomBackgroundColor?:boolean, fullWidth?:boolean, fullHeight?:boolean, justifyContent?:string, alignItems?:string, padding?:string}>`
    display:flex;
    flex:1;
    flex-direction:row;
    width: max-content; //main 방향은 최대화 (flutter와 다른게 있다면, 자식이 부모의 크기를 넘지 않는다.)
    height: fit-content; //cross 방향은 최소화
    justify-content:${({justifyContent}) => justifyContent?`${justifyContent}`:'flex-start'};
    align-items:${({alignItems}) => alignItems?`${alignItems}`:'center'};
    ${({useRandomBackgroundColor}) => useRandomBackgroundColor?'background-color:#' + Math.floor(Math.random()*16777215).toString(16):''};
    ${({fullWidth}) => fullWidth?'width:100%':''};
    ${({fullHeight}) => fullHeight?'height:100%':''};
    ${({padding}) => padding?`padding:${padding}`:''};
`;