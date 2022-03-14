/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../colors/theme";
import Cards from "../components/Cards";
import Details from "../components/Details";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Venue from "../components/Venue";
import Container from "../library/Container";

const Home = () => {
  return (
    <Container
      css={css`
        flex-direction: column;
      `}
    >
      <Container
        css={css`
          flex-direction: column;
        `}
      >
        <Navbar />
        <Venue />
      </Container>
      <Container
        css={css`
          flex-direction: column;
          background-color: ${theme.colors.lightGray};
        `}
      >
        <SearchBar />
        <Details />
        <Cards />
        <GetStarted />
        <Footer />
      </Container>
    </Container>
  );
};

export default Home;
