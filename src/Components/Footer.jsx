import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterSection>
      <div className="footerComponent">
        <p>
          Copy Right <span>&copy;</span> 2023 : Iftekar Hossain
        </p>
      </div>
    </FooterSection>
  );
}

const FooterSection = styled.div`
  margin-top: 2rem;
  background-color: #fff7f4;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.3rem;
    text-align: center;
  }
`;

export default Footer;
