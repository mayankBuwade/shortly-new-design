/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "../library/Button";
import Container from "../library/Container";
import Image from "next/image";
import theme from "../colors/theme";
import Link from "../library/Link";
import menu from "../public/menu.png";
import Wrapper from "./Wrapper";

const Navbar = () => {
  return (
    <Container
      css={css`
        margin: 0;
        padding: 0;
        width: 90vw;
        justify-content: space-between;
      `}
    >
      <Container>
        <h1>Shortly</h1>
        <Container
          css={css`
            @media only screen and (max-width: 720px) {
              display: none;
            }
          `}
        >
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.darkViolet}
            href=""
          >
            Features
          </Link>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.darkViolet}
            href=""
          >
            Pricing
          </Link>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.darkViolet}
            href=""
          >
            Resources
          </Link>
        </Container>
      </Container>
      <Container
        css={css`
          @media only screen and (max-width: 720px) {
            display: none;
          }
        `}
      >
        <Link
          color={theme.colors.gray}
          hoverColor={theme.colors.darkViolet}
          href=""
        >
          Login
        </Link>
        <Button
          color={theme.colors.cyan}
          hbg={theme.colors.lightCyan}
          css={css`
            border-radius: 50px;
          `}
        >
          Sign Up
        </Button>
      </Container>
      <Wrapper bg={theme.colors.darkViolet}>
        <Button
          css={css`
            display: flex;
            height: 2rem;
            display: flex;
            margin: 0;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            border: none;
          `}
        >
          <Image alt="menu" width={"25px"} height={"25px"} src={menu} />
        </Button>
        <div>
          <a>Features</a>
          <a>Pricing</a>
          <a>Resources</a>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.darkViolet}
            href=""
            css={css`
              border-radius: 50px;
              display: none;
              &:hover{
                color: ${theme.colors.cyan};
              }
            `}
          >
            Login
          </Link>
          <Button
            color={theme.colors.cyan}
            hbg={theme.colors.lightCyan}
            css={css`
              border-radius: 50px;
              position: relative;
              width: 10rem;
              left: 30%;
            `}
          >
            Sign Up
          </Button>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
