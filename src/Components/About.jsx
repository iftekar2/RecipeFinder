import React, { useState } from "react";
import styled from "styled-components";

const contentLeft = `Approaching cooking entails more than merely following recipes;
it's an art that combines creativity, a curiosity for new flavors,
an understanding of various ingredients, the precision of
techniques, and an openness to experiment with different tastes
and textures, resulting in a harmonious blend of delightful
dishes.`;

const contentCenter = `The purpose of this recipe website is to provide a comprehensive
platform, offering a wide array of culinary insights, diverse
and accessible recipes, cooking techniques, and meal
inspiration, aiming to empower individuals in creating
delightful dishes, fostering culinary exploration, and catering
to various tastes and dietary preferences.`;

const contentRight = `Recipes are vital as they serve as blueprints for crafting
delicious meals. The purpose of this website is guiding
individuals with precise instructions, ingredient measurements,
and methods to create diverse dishes, enabling both novice and
seasoned cooks to explore, learn, and innovate in the kitchen.`;

function About() {
  const [leftDiv, setLeftDiv] = useState(false);
  const [centerDiv, setCenterDiv] = useState(false);
  const [rightDiv, setRightDiv] = useState(false);

  const handleDivClick = (section) => {
    if (section === "left") {
      setLeftDiv(!leftDiv);
      setCenterDiv(false);
      setRightDiv(false);
    } else if (section === "center") {
      setLeftDiv(false);
      setCenterDiv(!centerDiv);
      setRightDiv(false);
    } else if (section === "right") {
      setLeftDiv(false);
      setCenterDiv(false);
      setRightDiv(!rightDiv);
    }
  };

  return (
    <AboutSection>
      <div className="aboutSection">
        <AboutTitle>
          <p>About</p>
        </AboutTitle>
        <AboutComponetns>
          <LeftDiv onClick={() => handleDivClick("left")}>
            <img src="https://cdn.dribbble.com/userupload/7770097/file/original-f94c966d13d74726fb7f70b4dc8653a3.png?resize=2048x1536" alt="Left" />
            {leftDiv &&<div>{contentLeft}</div>}
          </LeftDiv>
          <CenterDiv onClick={() => handleDivClick("center")}>
            <img src="https://cdn.dribbble.com/users/938871/screenshots/11065974/media/83e6966e7b2bcfff14c977daa76bfb7d.jpg?resize=1600x1200&vertical=center" alt="Center" />
            {centerDiv && <div>{contentCenter}</div>}
          </CenterDiv>
          <RightDiv onClick={() => handleDivClick("right")}>
            <img src="https://cdn.dribbble.com/users/465131/screenshots/1718215/vegetables.jpg?resize=800x600&vertical=center" alt="Right" />
            {rightDiv && <div>{contentRight}</div>}
          </RightDiv>
        </AboutComponetns>
      </div>
    </AboutSection>
  );
}

const AboutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutComponetns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const AboutTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    font-size: 1.5rem; 
  }
`;

const StyledDiv = styled.div`
  position: relative;
  cursor: pointer;

  div {
    position: absolute;
    bottom: 0;
    background: white;
    text-align: center;
    height: 100%;  
    width: 100%; 
    border-radius: 5%; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.8vh;
    border: 1px solid black;
    padding: 20px;
    box-sizing: border-box;
  }

  @media (max-width: 950px) {
    div {
      font-size: 1.7vh; /* Decrease font size for smaller screens */
    }
  }
`;


const LeftDiv = styled(StyledDiv)`
@media (max-width: 1520px) {
  height: 55vh;
  width: 28vw;
  border-radius: 5%;

  img {
    height: 55vh;
    width: 28vw;
    border-radius: 5%;
  }
}

@media (max-width: 950px) {
  height: 30vh;
  width: 60vw;
  border-radius: 5%;

  img {
    height: 30vh;
    width: 60vw;
    border-radius: 5%;
    border: 1px solid black;
  }
}
`;

const CenterDiv = styled(StyledDiv)`
@media (max-width: 1520px) {
  height: 55vh;
  width: 28vw;
  border-radius: 5%;
  border: 1px solid black;

  img {
    height: 55vh;
    width: 28vw;
    border-radius: 5%;
  }
}

@media (max-width: 950px) {
  height: 30vh;
  width: 60vw;
  border-radius: 5%;

  img {
    height: 30vh;
    width: 60vw;
    border-radius: 5%;
    border: 1px solid black;
  }
}
`;

const RightDiv = styled(StyledDiv)`
@media (max-width: 1520px) {
  height: 55vh;
  width: 28vw;
  border-radius: 5%;

  img {
    height: 55vh;
    width: 28vw;
    border-radius: 5%;
  }
}

@media (max-width: 950px) {
  height: 30vh;
  width: 60vw;
  border-radius: 5%;

  img {
    height: 30vh;
    width: 60vw;
    border-radius: 5%;
    border: 1px solid black;
  }
}
`;

export default About;
