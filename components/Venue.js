/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import Button from "../library/Button";
import Container from "../library/Container";
import IW from "../public/illustration-working.svg";
import theme from "../colors/theme";

const Venue = () => {
  return (
    <Container
      css={css`
        align-items: center;
        width: 90vw;
        padding-top: 5rem;
        padding-bottom: 10rem;
        position: relative;
        overflow: hidden;
        @media only screen and (max-width: 1250px) {
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
          }
      `}
    >
      <Container
        css={css`
          flex-direction: column;
          align-items: flex-start;
          flex-basis: 40%;
          @media only screen and (max-width: 1250px) {
            flex-basis: 50%;
            justify-content: center;
            align-items: center;
          }
        `}
      >
        <h1
          css={css`
            font-size: 5em;
            font-weight: 700;
            margin: 0;
            margin-top: 2rem;
            @media only screen and (max-width: 1250px) {
            text-align: center;
          }
          @media only screen and (max-width: 850px) {
          font-size: 2em;
          }
          `}
        >
          More than just shorter links
        </h1>
        <h3
          css={css`
            font-size: 1.5em;
            color: ${theme.colors.gray};
            font-weight: 400;
            @media only screen and (max-width: 1250px) {
            text-align: center;
          }
          `}
        >
          Build your brand&apos;s recognition and get detailed insight on how links
          are performing
        </h3>
        <Button
          color={theme.colors.cyan}
          hbg={theme.colors.lightCyan}
          css={css`
            border-radius: 50px;
            width: 15rem;
            font-size: 1.25em;
            margin: 0;
            padding: 1rem;
          `}
        >
          Get Started
        </Button>
      </Container>
      <Container
        css={css`
          align-items: flex-end;
          position: relative;
          width: 720px;
          right: -10vw;
          @media only screen and (max-width: 1250px) {
           align-items: center;
           left: 0;
           right: 0;
           position: static;
          }
          @media only screen and (max-width: 850px) {
          width: fit-content;
          }
        `}
      >
        <Image src={IW} alt="illustration-working" />
      </Container>
    </Container>
  );
};
export default Venue;
