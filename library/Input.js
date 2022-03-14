import styled from "@emotion/styled";

const Input = styled.input`
  width: 65vw;
  height: 7vh;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 10px;
  font-size: 1em;
  ::placeholder {
    color: ${(props) => props.color};
    padding-left: 1rem;
    font-weight: 100;
  }
`;

export default Input;
