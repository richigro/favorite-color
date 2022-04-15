import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Dashboard from "components/pages/Dashboard";

import { useFavoriteColor } from "context/colorsContext";
import { useColors } from "hooks/useColors";

const MainLayout = styled.div<{ color: string }>`
  background: ${({ color }) => (color ? color : "white")};
`;

const App = () => {
  const { data: colors } = useColors();
  const [favoriteColor] = useFavoriteColor();

  const favoriteColorObject =
    colors?.find(
      (color: { value: string; label: string }) => color.label === favoriteColor
    ) || {};

  return (
    <MainLayout color={favoriteColorObject.value}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
