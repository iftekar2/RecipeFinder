import React from "react";
import styled from "styled-components";

function FAQ() {
  return (
    <FAQSection>
      <div className="faqComponent">
        <div className="faqTitle">
          <p>FAQ</p>
        </div>
        <div className="faq">
          <div className="questionOne">
            <h1>What type of Cuisine do you specialize in?</h1>
          </div>
          <div className="questionTwo">
            <h1>Do you offer personalized menu plan?</h1>
          </div>
          <div className="questionThree">
            <h1>
              Can I customize the serving size of the recipe to fit my needs?
            </h1>
          </div>
          <div className="questionFour">
            <h1>
              Are nutritional information and calorie counts provided for each
              recipe?
            </h1>
          </div>
        </div>
      </div>
    </FAQSection>
  );
}

const FAQSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .faqTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }

  .faq {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  .questionOne {
    background: #ff8b8b;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 30rem;
    height: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .questionTwo {
    background: #a6cfe2;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 30rem;
    height: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .questionThree {
    background: #ffdaa3;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 30rem;
    height: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .questionFour {
    background: #fedae1;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 30rem;
    height: 24rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export default FAQ;
