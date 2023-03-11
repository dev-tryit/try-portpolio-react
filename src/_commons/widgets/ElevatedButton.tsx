import styled from "@emotion/styled";

export const ElevatedButton = styled.button<{
  padding?: string;
  margin?: string;
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

  ${({ margin }) =>
    margin ? `margin:${margin}` : ""};
  ${({ padding }) =>
    padding ? `padding:${padding}` : "padding:10px 20px 10px 20px"};
  ${({ backgroundColor }) =>
    backgroundColor ? `background-color:${backgroundColor}` : ""};
  ${({ color }) => (color ? `color:${color}` : "")};
  ${({ borderRadius }) =>
    borderRadius ? `border-radius: ${borderRadius}` : "border-radius: 0.325rem"};
`;
