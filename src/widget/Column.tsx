import styled from "styled-components";

const Column = styled.div<{useRandomBackgroundColor?:boolean}>`
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;
    height:100%;
    ${({useRandomBackgroundColor}) => useRandomBackgroundColor?'background-color:#' + Math.floor(Math.random()*16777215).toString(16):''};
`;

export default Column;