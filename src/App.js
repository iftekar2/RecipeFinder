import React from "react";
import Home from "./Pages/Home";
import styled from "styled-components";
import NavBar from "./Components/Nav";

function App() {
  return (
    <AppPage>
      <NavBar />
      <Home />
    </AppPage>
  );
}

const AppPage = styled.div`
  background-color: #fff7f4;
`;

export default App;
