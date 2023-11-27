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
            <p>
              We have many different types of recipes. We have recipes from
              different countries and we have recipes for people who need
              accommodations.
            </p>
          </div>
          <div className="questionTwo">
            <h1>Do you offer personalized menu plan?</h1>
            <p>
              We do not offer personalized menu plan. However, you can search
              for the recipe that you are looking for and you will be able to
              find it.
            </p>
          </div>
          <div className="questionThree">
            <h1>
              Can I customize the serving size of the recipe to fit my needs?
            </h1>
            <p>
              You can definitely customize the serving size of the recipe to fit
              your need.
            </p>
          </div>
          <div className="questionFour">
            <h1>
              Are nutritional information and calorie counts provided for each
              recipe?
            </h1>
            <p>
              Nutritional information and calorie counts is not provided for
              recipes.
            </p>
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
  margin-top: 1rem;

  .faqTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
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

  .questionOne,
  .questionTwo,
  .questionThree,
  .questionFour {
    p {
      display: none;
    }

    &:hover {
      p {
        display: block;
        font-size: 2rem;
      }
      h1 {
        display: none;
      }
    }
  }

  @media (max-width: 950px) {
    .questionOne {
      width: 20rem;
      height: 24rem;
    }

    .questionTwo {
      width: 20rem;
      height: 24rem;
    }

    .questionThree {
      width: 20rem;
      height: 24rem;
    }

    .questionFour {
      width: 20rem;
      height: 24rem;
    }
  }
`;

export default FAQ;
