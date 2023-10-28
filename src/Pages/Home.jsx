//import Nav from "../Components/Nav";
import styled from "styled-components";
import HomeComponents from "../Components/HomeComponents";
// import About from "../Components/About";
// import Favorite from "../Components/Favorite";
// import FAQ from "../Components/FAQ";
// import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="HomePage">
      <HomePage>
        <HomeComponents />
      </HomePage>
    </div>
  );
}

const HomePage = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

export default Home;
