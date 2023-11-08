import styled from "styled-components";

function HomeComponents() {
  return (
    <StyledHomeComponents>
      <div className="HomePage">
        <HomeImages>
          <img src="https://cdn-icons-png.flaticon.com/512/10467/10467813.png" />
          <img src="https://cdn-icons-png.flaticon.com/128/706/706195.png" />
          <img src="https://cdn-icons-png.flaticon.com/128/7091/7091098.png" />
          <img src="https://cdn-icons-png.flaticon.com/128/10702/10702454.png" />
        </HomeImages>
        <HomePageTitle>
          <p>Let’s</p>
          <h1>make</h1>
          <p>something</p>
          <h1>happy.</h1>
        </HomePageTitle>
      </div>
    </StyledHomeComponents>
  );
}

const StyledHomeComponents = styled.div`
  height: 45rem;
  max-width: 1560px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6vw;

  @media (max-width: 1512px) {
    img {
      height: 6rem;
      width: 6rem;
    }
  }

  @media (max-width: 950px) {
    img {
      height: 4rem;
      width: 4rem;
    }
  }
`;

const HomePageTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 1520px) {
    h1 {
      color: #f25a24;
      font-size: 3.5rem;
      margin: 0rem;
    }

    p {
      font-size: 3.5rem;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0rem;
    }
  }

  @media (max-width: 950px) {
    h1 {
      color: #f25a24;
      font-size: 1.8rem;
      margin: 0rem;
    }

    p {
      font-size: 1.8rem;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0rem;
    }
  }
`;

export default HomeComponents;
