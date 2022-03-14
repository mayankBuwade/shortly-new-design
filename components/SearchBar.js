/** @jsxImportSource @emotion/react */
import Button from "../library/Button";
import Container from "../library/Container";
import { css } from "@emotion/react";
import Form from "../library/Form";
import Input from "../library/INput";
import theme from "../colors/theme";
const SearchBar = () => {
  return (
    <Container
      css={css`
        background-image: url("/bg-shorten-desktop.svg");
        background-color: ${theme.colors.darkViolet};
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        bottom: 5rem;
        padding: 1rem;
        border-radius: 15px;
        width: 84vw;
        height: 18vh;
        @media only screen and (max-width: 720px) {
          background-image: url("/bg-shorten-mobile.svg");
          background-size: cover;
          background-repeat: round;
        }
      `}
    >
      <Form
        css={css`
          width: 80vw;
          @media only screen and (max-width: 720px) {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
          }
        `}
      >
        <Input color={theme.colors.red} placeholder="Shorten a link here" />
        <Button
          color={theme.colors.cyan}
          bg={theme.colors.cyan}
          hbg={theme.colors.lightCyan}
          css={css`
            width: 12rem;
            height: 4rem;
            font-size: 1em;
            font-weight: 700;
            border-radius: 15px;
            @media only screen and (max-width: 720px) {
              width: 65vw;
            }
          `}
        >
          Shorten It!
        </Button>
      </Form>
    </Container>
  );
};

export default SearchBar;
