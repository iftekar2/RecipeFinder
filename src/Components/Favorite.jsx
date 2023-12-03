import styled from "styled-components";
import { useEffect, useState } from "react";
import Categories from "./Categories";

function Favorite() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const getPopular = async () => {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`
        );
        const data = await api.json();
        setPopular(data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getPopular();
  }, []);

  return (
    <FavoriteSection>
      <div className="About">
        <FavoriteTitle>
          <p>Favorite</p>
        </FavoriteTitle>

        <div className="favoriteComponents">
          <div className="countries">
            <Categories />
          </div>
          <SearchBar>
            <input type="text" placeholder="Find Food" />
            <button>
              <img src="https://cdn.dribbble.com/userupload/9778421/file/original-8a054951f3064fd64f9fc5820e5ac92e.png?resize=1504x1128" />
            </button>
          </SearchBar>

          <Recipes>
            {popular.map((recipe) => (
              <div key={recipe.id} className="randomRecipe">
                <img src={recipe.image} alt={recipe.title} />
                <div className="recipeNameOverlay">
                  <h1>{recipe.title}</h1>
                </div>
              </div>
            ))}
          </Recipes>

          <RecipesButton>
            <button>Recipes</button>
          </RecipesButton>
        </div>
      </div>
    </FavoriteSection>
  );
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

  p {
    font-size: 2rem;
  }
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;

  input {
    height: 3rem;
    width: 22rem;
    padding: 0;
    font-size: 1.5rem;
    padding-left: 20px;
    border-radius: 50px;
    border: 2px solid black;
    margin-left: -15px;
  }

  button {
    padding: 0;
    height: 3rem;
    width: 5rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;

    img {
      height: 3rem;
      width: 6rem;
      border: 2px solid black;
      border-radius: 50px;
    }
  }

  @media (max-width: 950px) {
    input {
      height: 3rem;
      width: 15rem;
      padding: 0;
      font-size: 1.5rem;
      padding-left: 20px;
      border-radius: 50px;
      border: 2px solid black;
    }

    button {
      padding: 0;
      height: 3rem;
      width: 4rem;
      border: none;
      border-radius: 50px;
      cursor: pointer;

      img {
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

  .randomRecipe {
    position: relative;
    height: 30rem;
    width: 22rem;
    border: 2px solid black;

    img {
      height: 30rem;
      width: 22rem;
      object-fit: cover;
      transition: opacity 0.3s ease-in-out;
    }

    .recipeNameOverlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      width: 18rem;

      h1 {
        color: black;
      }
    }

    &:hover {
      .recipeNameOverlay {
        opacity: 1;
      }

      img {
        opacity: 0;
      }
    }
  }
`;

const RecipesButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  button {
    margin-top: 2rem;
    background: #effbe4;
    height: 3rem;
    width: 12rem;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 1.5rem;
    cursor: pointer;
  }

  margin-bottom: 2rem;
`;

export default Favorite;
