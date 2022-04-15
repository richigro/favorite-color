import styled from "styled-components";

import ColorButton from "components/atoms/ColorButton";

import { useFavoriteColor } from "context/colorsContext";
import { useColors } from "hooks/useColors";

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid red;
  padding: 1rem;
  height: 100vh;
  min-width: 10rem;
  margin: 0 10rem 0 10rem;
  background: white;
`;
const ColorContainer = styled.div`
  margin-top: 1rem;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 2rem;
`;

const StyledSpan = styled.span`
  background: black;
  padding: 0.5rem;
  opacity: 0.9;
  border-radius: 4px;
`;

const Dashboard = () => {
  const { data: colors, isLoading, isError } = useColors();
  const [favoriteColor, setFavoriteColor] = useFavoriteColor();

  return (
    <MainLayout>
      <h1>
        {favoriteColor
          ? `My favorite color is ${favoriteColor}`
          : "Pick your favorite color to get started."}
      </h1>
      <div>Click one of the buttons below to select your favorite color: </div>
      <ColorContainer>
        {isLoading && !isError && <div>Loading colors...</div>}
        {isError && <div>Error Please make sure the server is running.</div>}
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
