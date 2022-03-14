/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Container from "../library/Container";
import theme from "../colors/theme";

const Details = () => {
  return (
    <Container
      css={css`
        flex-direction: column;
        max-width: 55vw;
        @media only screen and (max-width: 720px) {
            max-width: 100%;
            justify-items: center;
            justify-content: center;
          }
      `}
    >
      <h1
        css={css`
          font-size: 3em;
          text-align: center;
          font-weight: bold;
          @media only screen and (max-width: 720px) {
            font-size: 2em;
          }
        `}
      >
        Advance Statistics
      </h1>
      <p
        css={css`
          font-size: 2em;
          text-align: center;
          color: ${theme.colors.gray};
          @media only screen and (max-width: 720px) {
            font-size: 1em;
          }
          
        `}
      >
        Track how your links are performing across the web with our advance
        statistics dashboard.
      </p>
    </Container>
  );
};

export default Details;
