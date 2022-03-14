import styled from '@emotion/styled';

const Button = styled.button`
  min-width: 100px;
  min-height: 40px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 1rem;
  background: ${(props) => props.color};
  color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 1em;

  &:hover {
    background-color: ${(props) => props.hbg};
    font-weight: bold;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: .5rem;
    min-height: 20px;
    font-size: .7rem;
    margin: 5px;
  }
`;

export default Button;