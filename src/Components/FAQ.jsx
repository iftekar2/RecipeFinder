import React from "react";
import styled from "styled-components";

function FAQ() {
  return (
    <FAQSection>
      <div className="faqComponent">
        <div className="faq">
          <div className="questionOne"></div>
          <div className="questionTwo"></div>
          <div className="questionThree"></div>
          <div className="questionFour"></div>
        </div>
      </div>
    </FAQSection>
  );
}

const FAQSection = styled.div``;

export default FAQ;
