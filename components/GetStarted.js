/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../colors/theme";
import Button from "../library/Button";
import Container from "../library/Container";

const GetStarted = () => {
  return (
    <Container
      css={css`
        flex-direction: column;
        background-image: url("/bg-boost-desktop.svg");
        background-color: ${theme.colors.darkViolet};
        background-size: inherit;
        background-repeat: round;
        width: 100%;
        height: 25vh;
        padding-top: 1rem;
        padding-bottom: 1rem;
        @media only screen and (max-width: 720px) {
          background-image: url("/bg-boost-mobile.svg");
        }
      `}
    >
      <h1
        css={css`
          color: #fff;
          font-size: 2.5em;
          @media only screen and (max-width: 720px) {
          font-size: 2rem;
        }
          
        `}
      >
        Boost your links today
      </h1>
      <Button color={theme.colors.cyan} hbg={theme.colors.lightCyan} css={css`
        width: 12rem;
        height: 3rem;
        border-radius: 35px;
      `}>
        Get Started
      </Button>
    </Container>
  );
};

export default GetStarted;
