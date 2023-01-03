import styled from "styled-components";

export const Spacer = styled.div<{flex?:number}>`
    flex-grow:${({flex}) => flex?`${flex}`:'1'};
    flex-basis:${({flex}) => flex?`${flex}`:'1'};
`;

/*
export const Spacer = styled.View<{ flex?: number }>`
    flex-grow:${({ flex }) => flex ? `${flex}` : '1'};
    flex-basis:${({ flex }) => flex ? `${flex}` : '1'};
`;
*/