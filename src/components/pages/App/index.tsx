import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Dashboard from "components/pages/Dashboard";

import { useFavoriteColor } from "context/colorsContext";
import { useColors } from "hooks/useColors";

const MainLayout = styled.div<{ color: string | undefined }>`
  background: ${({ color }) => (color ? color : "#DFDFDE")};
  width: 100%;
  height: 100%;
`;

const App = () => {
  const { data: colors } = useColors();
  const [favoriteColor] = useFavoriteColor();

  const favoriteColorObject = colors?.find(
    (color) => color.label === favoriteColor
  );

  return (
    <MainLayout color={favoriteColorObject?.value}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
