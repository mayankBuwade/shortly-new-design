/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "../library/Container";
import Card from "./Card";
import logo1 from "../public/icon-brand-recognition.svg";
import logo2 from "../public/icon-detailed-records.svg";
import logo3 from "../public/icon-fully-customizable.svg";


const Cards = () => {
  return (
    <Container
      css={css`
        display: flex;
        width: 90vw;
        justify-content: center;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 10vh;
        margin-top: 2vh;
        @media only screen and (max-width: 720px) {
          flex-direction: column;
          align-items: center;
        }
      `}
    >
      <Card logo={logo1}/>
      <Card logo={logo2}/>
      <Card logo={logo3}/>
    </Container>
  );
};

export default Cards;
