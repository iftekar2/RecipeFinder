import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Home from "./Pages/Home";
import Nav from "./Nav";
import Menu from "./Pages/Menu";

function App() {
  const navigate = useNavigate();

  const redirectToMainPage = () => {
    navigate("/");
  };

  return (
    <AppSection>
      <Nav />
      <Routes>
        <Route path="*" element={<Home onClick={redirectToMainPage} />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </AppSection>
  );
}

const AppSection = styled.div`
  background-color: #fff7f4;
`;

export default App;
