import styled from "styled-components";
import { useQuery } from "react-query";

import { getColors } from "services/colorsApi";
import { useColors } from "context/colorsContext";

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0 10rem 0 10rem;
  border: 4px solid red;
`;
const ColorContainer = styled.div`
  margin-top: 1rem;
  border-radius: 4px;
  border: 2px solid black;
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

const ColorButton = styled.button<{ color?: string; isSelected: boolean }>`
  background: ${({ color }) => (color ? color : "white")};
  width: 6rem;
  height: 6rem;
  border-radius: 4px;
  margin-right: 1.5rem;
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

const StyledSpan = styled.span`
  background: black;
  padding: 0.5rem;
  opacity: 0.9;
  border-radius: 4px;
`;

const Dashboard = () => {
  const [favoriteColor, setFavoriteColor] = useColors();
  const {
    data: colors,
    isLoading,
    isError,
  } = useQuery(["colors"], () => getColors().then((res) => res.data));

  // console.log("the colors: ", colors);
  console.log("current favorite color: ", favoriteColor);

  return (
    <MainLayout>
      <h1>
        {favoriteColor
          ? `My favorite color is ${favoriteColor}`
          : "Pick your favorite color to get started."}
      </h1>
      <div>Click one of the buttons below to select your favorite color: </div>
      <ColorContainer>
        {!isLoading &&
          !isError &&
          colors.map((color: { label: string; value: string }) => {
            return (
              <ColorButton
                key={color.label}
                color={color.value}
                isSelected={favoriteColor === color.label}
                onClick={() => {
                  setFavoriteColor(color.label);
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

export default Dashboard;
