import styled from "styled-components";



export const Padding = styled.div<{padding:string}>`
    width:fit-content;
    height:fit-content;
    ${({padding}) => padding?`padding:${padding}`:''};
`;
