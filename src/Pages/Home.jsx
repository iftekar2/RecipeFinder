import styled from "styled-components";
import Nav from "../Components/Nav";
import HomeComponents from "../Components/HomeComponents";
import About from "../Components/About";
import Favorite from "../Components/Favorite";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="HomePage">
      <HomePage>
        <Nav />
        <HomeComponents />
        <About />
        <Favorite />
        <FAQ />
        <Footer />
      </HomePage>
    </div>
  );
}

const HomePage = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

export default Home;
