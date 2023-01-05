import styled from "@emotion/styled";

export const Space = styled.div<{width?:string, height?:string}>`
    width:${({width}) => width?`${width}`:'0'};
    height:${({height}) => height?`${height}`:'0'};
`;
