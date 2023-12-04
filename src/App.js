import styled from "styled-components";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <AppSection>
      <Nav />
      <Home />
    </AppSection>
  );
}

const AppSection = styled.div`
  background-color: #fff7f4;
`;

export default App;
