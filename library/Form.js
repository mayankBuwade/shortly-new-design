import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export default Form;
