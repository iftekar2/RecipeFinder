import styled from "styled-components";
import { useState, useEffect } from "react";

function MenuComponent() {
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
    <MenuComponentSection>
      <div className="menuComponent">
        <MenuTitle>
          <h1>Menus</h1>
        </MenuTitle>

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
      </div>
    </MenuComponentSection>
  );
}

const MenuComponentSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const MenuTitle = styled.div`
  h1 {
    font-size: 1.8rem;
  }
`;

const Recipes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default MenuComponent;
