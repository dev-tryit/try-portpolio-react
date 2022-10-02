import styled from "styled-components";

const Row = styled.div<{useRandomBackgroundColor?:boolean}>`
    display:flex;
    flex-direction:row;
    justify-content: flex-start;
    align-items: center;
    width:100%;
    ${({useRandomBackgroundColor}) => useRandomBackgroundColor?'background-color:#' + Math.floor(Math.random()*16777215).toString(16):''};
`;

export default Row;