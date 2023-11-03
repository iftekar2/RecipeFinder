import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutSection>
      <div className="aboutPage">
        <Title>
          <h1>About</h1>
        </Title>
        <AboutComponetns>
          <LeftDiv></LeftDiv>
          <CenterDiv></CenterDiv>
          <RightDiv></RightDiv>
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

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutComponetns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;
`;

const LeftDiv = styled.div`
  height: 25rem;
  width: 25rem;
  border: 1px solid black;
`;
const CenterDiv = styled.div`
  height: 32vw;
  width: 32vw;
  border: 1px solid black;
`;
const RightDiv = styled.div`
  height: 25rem;
  width: 25rem;
  border: 1px solid black;
`;

export default About;
