import styled from "@emotion/styled";

export const ElevatedButton = styled.button<{
  padding?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  color?: string;
  borderRadius?: string;
}>`
  transition: background-color 0.6s;
  &:hover {
  ${({ hoverBackgroundColor }) =>
    hoverBackgroundColor ? `background-color:${hoverBackgroundColor}` : ""};
  }

  margin: 0px;
  ${({ padding }) =>
    padding ? `padding:${padding}` : "padding:10px 20px 10px 20px"};
  ${({ backgroundColor }) =>
    backgroundColor ? `background-color:${backgroundColor}` : ""};
  ${({ color }) => (color ? `color:${color}` : "")};
  ${({ borderRadius }) =>
    borderRadius ? `border-radius: ${borderRadius}` : "border-radius: 0.325rem"};
`;
