import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-left: 5vw;
  padding-right: 5vw;
  color: #fff;
  align-items: flex-start;
  margin-top: 5rem;
  margin-bottom: 3rem;
  @media only screen and (max-width: 554px) {
    display: flex;
    font-size: .9em;
    align-items: center;
    padding-left: 2vw;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding-right: 2vw;
  }
  h3 {
    &:hover {
      color: ${(props) => props.theme.colors.cyan};
    }
  }
`;

export default Nav;
