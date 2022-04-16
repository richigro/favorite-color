import styled from "styled-components";

import ColorButton from "components/atoms/ColorButton";
import Spinner from "components/atoms/Spinner";

import { useFavoriteColor } from "context/colorsContext";
import { useColors } from "hooks/useColors";

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 100vh;
  min-width: 10rem;
  margin: 0 10rem 0 10rem;
  background: white;
`;
const StyledDiv = styled.div`
  margin-top: 2rem;
`;
const ColorContainer = styled.div`
  margin-top: 1rem;
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  align-items: center;
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
  const { data: colors, isLoading, isError, error } = useColors();
  const [favoriteColor, setFavoriteColor] = useFavoriteColor();

  return (
    <DashboardWrapper>
      <h1>
        {favoriteColor
          ? `My favorite color is ${favoriteColor}`
          : "Pick your favorite color to get started."}
      </h1>
      <StyledDiv>
        Click one of the buttons below to select your favorite color:{" "}
      </StyledDiv>
      <ColorContainer>
        {isLoading && !isError && <Spinner aria-label="loading" />}
        {isError && (
          <div>
            <p>Error: Please make sure the server is running.</p>
            {error && (
              <pre style={{ color: "red" }}>{(error as Error).message}.</pre>
            )}
          </div>
        )}
        {!isLoading &&
          !isError &&
          colors?.map((color) => {
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
    </DashboardWrapper>
  );
};

export default Dashboard;
