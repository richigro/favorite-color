import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Dashboard from "components/pages/Dashboard";

const MainLayout = styled.div`
  border: 10px solid green;
`;

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
