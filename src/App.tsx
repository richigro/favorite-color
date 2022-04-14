import React from "react";
import styled from "styled-components";
import "./App.css";
const SELECTABLE_COLORS: { label: string; value: string }[] = [
  { label: "Red", value: "#F55353" },
  { label: "Blue", value: "#035397" },
  { label: "Green", value: "#6BCB77" },
  { label: "Orange", value: "#FF8C32" },
  { label: "Pink", value: "#F900BF" },
];

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ColorContainer = styled.div`
  margin-top: 1rem;
  border-radius: 4px;
  border: 2px solid black;
  width: 50%;
  padding: 2rem;
  display: flex;
`;

const ColorButton = styled.button<{ color?: string }>`
  background: ${({ color }) => (color ? color : "white")};
  width: 6rem;
  height: 6rem;
  border-radius: 4px;
  margin-right: 2rem;
  border: none;
  color: white;
`;

const StyledSpan = styled.span`
  background: black;
  padding: 0.5rem;
  opacity: 0.9rem;
`;

const App = () => {
  const [favoriteColor, setFavoriteColor] = React.useState("red");
  return (
    <MainLayout>
      <h1>My favorite color is {favoriteColor}</h1>
      <div>Click one of the buttons below to select your favorite color: </div>
      <ColorContainer>
        {SELECTABLE_COLORS.map((color) => {
          return (
            <ColorButton
              key={color.label}
              color={color.value}
              onClick={() => {
                console.log("your favorite color is now: ", color.label);
              }}
            >
              <StyledSpan>{color.label}</StyledSpan>
            </ColorButton>
          );
        })}
      </ColorContainer>
    </MainLayout>
  );
};

export default App;
