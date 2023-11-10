import React from "react";
import styled from "styled-components";

function Favorite() {
  return(
    <FavoriteSection>
      <div className="About">
        <FavoriteTitle>
          <p>Favorite</p>
        </FavoriteTitle>
        <div className="favoriteComponents">
          <div className="countries">
            <Countries>
                <Italian>
                  <img src="https://cdn-icons-png.flaticon.com/512/4624/4624250.png" />
                </Italian>
                <American>
                  <img src="https://cdn-icons-png.flaticon.com/512/2505/2505032.png" />
                </American>
                <Indian>
                <img src="https://cdn-icons-png.flaticon.com/512/4727/4727322.png" />
                </Indian>
                <Chinese>
                <img src="https://cdn-icons-png.flaticon.com/512/1623/1623786.png" />
                </Chinese>
                <Japanese>
                <img src="https://cdn-icons-png.flaticon.com/512/12391/12391176.png" />
                </Japanese>
            </Countries>
          </div>

          <SearchBar>
            <input type="text" placeholder="Find Food" />
            <button><img src="https://cdn.dribbble.com/userupload/9778421/file/original-8a054951f3064fd64f9fc5820e5ac92e.png?resize=1504x1128"/></button>
          </SearchBar>

          <Recipes>
            <div className="firstRecipe"></div>
            <div className="secondRecipe"></div>
            <div className="thirdRecipe" ></div>
            <div className="forthRecipe"></div>
            <div className="fifthRecipe"></div>
            <div className="sixthRecipe"></div>
          </Recipes>
        </div>
      </div>
    </FavoriteSection>
  )
  ;
}

const FavoriteSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem; 
`;

const FavoriteTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    font-size: 1.5rem; 
  }
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

  img{
    height: 6rem; 
    width: 6rem;  
  }

  @media (max-width: 950px) {
    width: 8rem; 
    height: 4rem; 

    img{
      height: 4rem; 
      width: 4rem;  
    }
  }
`; 
const American = styled.div`
  background: #61BFAD; 
  width: 10rem; 
  height: 6rem;  
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%; 
  cursor: pointer; 

  img{
    height: 6rem; 
    width: 6rem;  
  }

  @media (max-width: 950px) {
    width: 8rem; 
    height: 4rem; 

    img{
      height: 4rem; 
      width: 4rem;  
    }
  }
`; 
const Indian = styled.div`
  background: #0BBCD6; 
  width: 10rem; 
  height: 6rem;  
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%; 
  cursor: pointer; 

  img{
    height: 6rem; 
    width: 6rem;  
  }

  @media (max-width: 950px) {
    width: 8rem; 
    height: 4rem; 

    img{
      height: 4rem; 
      width: 4rem;  
    }
  }
`; 
const Chinese = styled.div`
  background: #178E96; 
  width: 10rem; 
  height: 6rem; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%; 
  cursor: pointer; 

  img{
    height: 6rem; 
    width: 6rem;  
  }

  @media (max-width: 950px) {
    width: 8rem; 
    height: 4rem; 

    img{
      height: 4rem; 
      width: 4rem;  
    }
  }
`; 
const Japanese = styled.div`
  background: #EF3E4A; 
  width: 10rem; 
  height: 6rem; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%; 
  cursor: pointer; 

  img{
    height: 6rem; 
    width: 6rem;  
  }

  @media (max-width: 950px) {
    width: 8rem; 
    height: 4rem; 

    img{
      height: 4rem; 
      width: 4rem;  
    }
  }
`; 

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem; 
  margin-top: 2rem; 

  input{
    height: 3rem; 
    width: 22rem; 
    padding: 0; 
    font-size: 1.5rem; 
    padding-left: 20px; 
    border-radius: 50px; 
    border: 2px solid black; 
  }

  button{
    padding: 0; 
    height: 3rem; 
    width: 5rem;
    border: none; 
    border-radius: 50px;
    cursor: pointer; 

    img{
      height: 3rem; 
      width: 6rem;
      border: 2px solid black; 
      border-radius: 50px;
    }
  }

  @media (max-width: 950px) {
    input{
      height: 3rem; 
      width: 15rem; 
      padding: 0; 
      font-size: 1.5rem; 
      padding-left: 20px; 
      border-radius: 50px; 
      border: 2px solid black;
    }

    button{
      padding: 0; 
      height: 3rem; 
      width: 4rem;
      border: none; 
      border-radius: 50px;
      cursor: pointer; 
  
      img{
        height: 3rem; 
        width: 5rem;
        border: 2px solid black; 
        border-radius: 50px;
      }
    }
  }
`; 

const Recipes = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  align-items: center;
  gap: 1rem; 
  margin-top: 2rem;

  div{
    height: 30rem; 
    width: 25rem; 
    border: 2px solid black; 
  }

  @media (max-width: 950px){
    div{
      height: 28rem; 
      width: 22rem; 
      border: 2px solid black; 
    }
  }
`; 

export default Favorite;
