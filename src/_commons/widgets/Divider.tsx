import styled from "@emotion/styled";

export const Divider = styled.div<{height?:string,color?:string,indent?:string,endIndent?:string}>`
    width:${({indent,endIndent}) => `calc(100% - ${indent?`${indent}`:'0'} - ${endIndent?`${endIndent}`:'0'})`};
    height:${({height}) => height?`${height}`:'1px'};
    background-color:${({color}) => color?`${color}`:'#e4e4e4'};
    margin-left:${({indent}) => indent?`${indent}`:'0'};
    margin-right:${({endIndent}) => endIndent?`${endIndent}`:'0'};
`;
