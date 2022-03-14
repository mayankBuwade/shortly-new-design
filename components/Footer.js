/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import theme from "../colors/theme";
import Container from "../library/Container";
import Link from "../library/Link";
import Nav from "../library/Nav";
import ig from "../public/icon-instagram.svg";
import fb from "../public/icon-facebook.svg";
import pt from "../public/icon-pinterest.svg";
import tw from "../public/icon-twitter.svg";

const Footer = () => {
  return (
    <Container
      css={css`
        background-color: ${theme.colors.veryDarkBlue};
        width: 100%;
      `}
    >
      <Container
        css={css`
          align-items: baseline;
          justify-content: space-around;
          width: 90vw;
          @media only screen and (max-width: 720px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1.5em;
          }
        `}
      >
        <h1
          css={css`
            color: #fff;
          `}
        >
          Shortly
        </h1>
        <Nav>
          <h3>Features</h3>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.cyan}
            href=""
            css={css`
              margin-left: 0;
              margin-right: 0;
            `}
          >
            Link Shortening
          </Link>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.cyan}
            href=""
            css={css`
              margin-left: 0;
              margin-right: 0;
            `}
          >
            Branded Links
          </Link>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.cyan}
            href=""
            css={css`
              margin-left: 0;
              margin-right: 0;
            `}
          >
            Analytics
          </Link>
        </Nav>
        <Nav>
          <h3>Resources</h3>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.cyan}
            href=""
            css={css`
              margin-left: 0;
              margin-right: 0;
            `}
          >
            Blog
          </Link>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.cyan}
            href=""
            css={css`
              margin-left: 0;
              margin-right: 0;
            `}
          >
            Developers
          </Link>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.cyan}
            href=""
            css={css`
              margin-left: 0;
              margin-right: 0;
            `}
          >
            Support
          </Link>
        </Nav>
        <Nav>
          <h3>Company</h3>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.cyan}
            href=""
            css={css`
              margin-left: 0;
              margin-right: 0;
            `}
          >
            About
          </Link>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.cyan}
            href=""
            css={css`
              margin-left: 0;
              margin-right: 0;
            `}
          >
            Our Team
          </Link>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.cyan}
            href=""
            css={css`
              margin-left: 0;
              margin-right: 0;
            `}
          >
            Careers
          </Link>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.cyan}
            href=""
            css={css`
              margin-left: 0;
              margin-right: 0;
            `}
          >
            Contact
          </Link>
        </Nav>
        <Nav
          css={css`
            flex-direction: row;
            justify-content: space-around;
            margin: 0;
            padding: 0%;
          `}
        >
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.cyan}
            href=""
            css={css`
              margin: 1rem;
            `}
          >
            <Image
              className="image"
              alt="fb"
              src={fb}
              width={"25px"}
              height={"25px"}
            />
          </Link>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.cyan}
            href=""
            css={css`
              margin: 1rem;
            `}
          >
            <Image
              src={tw}
              alt="tw"
              width={"25px"}
              height={"25px"}
              className="image"
            />
          </Link>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.cyan}
            href=""
            css={css`
              margin: 1rem;
            `}
          >
            <Image
              src={pt}
              alt="pt"
              width={"25px"}
              height={"25px"}
              className="image"
            />
          </Link>
          <Link
            color={theme.colors.gray}
            hoverColor={theme.colors.cyan}
            href=""
            css={css`
              margin: 1rem;
            `}
          >
            <Image
              src={ig}
              alt="ig"
              width={"25px"}
              height={"25px"}
              className="image"
            />
          </Link>
        </Nav>
      </Container>
    </Container>
  );
};

export default Footer;
