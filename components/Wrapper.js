import styled from "@emotion/styled";

const Wrapper = styled.div`
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    color: #fff;
    display: block;
    text-align: center;
    margin: 1rem;
    
  }

  div {
    display: none;
    position: absolute;
    right: 15px;
    background-color: ${(props) => props.bg};
    min-width: 160px;
    width: 90vw;
    margin-bottom: 1rem;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    padding-bottom: 2rem;
  }

  &:hover {
    div {
      display: block;
    }
  }

  @media only screen and (min-width: 720px) {
    display: none;
  }
`;

export default Wrapper;
