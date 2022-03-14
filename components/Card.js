/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import theme from "../colors/theme";
import Div from "../library/Div";

const Card = ({ logo }) => {
  return (
    <Div>
      <div
        css={css`
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${theme.colors.darkViolet};
          position: relative;
          bottom: 3.5rem;
          @media only screen and (max-width: 720px) {
            bottom: 0;
          }
        `}
      >
        <Image alt="logo" src={logo} width={"45px"} height={"45px"} />
      </div>
      <h1
        css={css`
          font-size: 1.5em;
        `}
      >
        Brand Recognition
      </h1>
      <p
        css={css`
          font-size: 1.5em;
          color: ${theme.colors.gray};
        `}
      >
        Boost your brand recognition with each click. Generic links don&apos;t
        mean a thing. Branded links helps instil confidence in your content.
      </p>
    </Div>
  );
};

export default Card;
