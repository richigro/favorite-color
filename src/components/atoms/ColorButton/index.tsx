import styled from "styled-components";

const ColorButton = styled.button<{ color?: string; isSelected: boolean }>`
  background: ${({ color }) => (color ? color : "white")};
  min-width: 6rem;
  height: 6rem;
  border-radius: 4px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  display: relative;
  border: none;
  color: white;
  outline: ${({ isSelected }) => (isSelected ? "3px solid blue" : "none")};
  :hover,
  :focus {
    opacity: 0.8;
  }
`;

export default ColorButton;
