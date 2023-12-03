import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Categories() {
  return (
    <CategoriesSection>
      <div className="categories">
        <Countries>
          <NavLink to={"/cuisine/Italian"}>
            <Italian>
              <img src="https://cdn-icons-png.flaticon.com/512/4624/4624250.png" />
            </Italian>
          </NavLink>
          <NavLink to={"/cuisine/American"}>
            <American>
              <img src="https://cdn-icons-png.flaticon.com/512/2505/2505032.png" />
            </American>
          </NavLink>
          <NavLink to={"/cuisine/Indian"}>
            <Indian>
              <img src="https://cdn-icons-png.flaticon.com/512/4727/4727322.png" />
            </Indian>
          </NavLink>
          <NavLink to={"/cuisine/Chinese"}>
            <Chinese>
              <img src="https://cdn-icons-png.flaticon.com/512/1623/1623786.png" />
            </Chinese>
          </NavLink>
          <NavLink to={"/cuisine/Japanese"}>
            <Japanese>
              <img src="https://cdn-icons-png.flaticon.com/512/12391/12391176.png" />
            </Japanese>
          </NavLink>
        </Countries>
      </div>
    </CategoriesSection>
  );
}

const CategoriesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Countries = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Italian = styled.div`
  background: #053161;
  width: 10rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  cursor: pointer;

  img {
    height: 6rem;
    width: 6rem;
  }

  @media (max-width: 950px) {
    width: 8rem;
    height: 4rem;

    img {
      height: 4rem;
      width: 4rem;
    }
  }
`;
const American = styled.div`
  background: #61bfad;
  width: 10rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  cursor: pointer;

  img {
    height: 6rem;
    width: 6rem;
  }

  @media (max-width: 950px) {
    width: 8rem;
    height: 4rem;

    img {
      height: 4rem;
      width: 4rem;
    }
  }
`;
const Indian = styled.div`
  background: #0bbcd6;
  width: 10rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  cursor: pointer;

  img {
    height: 6rem;
    width: 6rem;
  }

  @media (max-width: 950px) {
    width: 8rem;
    height: 4rem;

    img {
      height: 4rem;
      width: 4rem;
    }
  }
`;
const Chinese = styled.div`
  background: #178e96;
  width: 10rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  cursor: pointer;

  img {
    height: 6rem;
    width: 6rem;
  }

  @media (max-width: 950px) {
    width: 8rem;
    height: 4rem;

    img {
      height: 4rem;
      width: 4rem;
    }
  }
`;
const Japanese = styled.div`
  background: #ef3e4a;
  width: 10rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  cursor: pointer;

  img {
    height: 6rem;
    width: 6rem;
  }

  @media (max-width: 950px) {
    width: 8rem;
    height: 4rem;

    img {
      height: 4rem;
      width: 4rem;
    }
  }
`;

export default Categories;
