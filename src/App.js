import styled from "styled-components";
import Home from "./Pages/Home";

function App() {
  return (
    <AppSection>
      <Home />
    </AppSection>
  );
}

const AppSection = styled.div`
  background-color: #fff7f4;
`;

export default App;
