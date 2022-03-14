import styled from "@emotion/styled";

const Div = styled.div`
  width: 28rem;
  height: auto;
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 2vh;
  padding-bottom: 2vh;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 3rem;
  margin-bottom: 3rem;
  background-color: white;

  @media only screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 375px;
    padding: 1rem;
    margin: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    height: fit-content;
  }
`;

export default Div;
