import styled from '@emotion/styled';

const Link = styled.a`
  font-size: 1em;
  text-decoration: none;
  margin: .5rem;
  color: ${(props) => props.color};
  &:hover {
    color: ${props => props.hoverColor};
  }
`;

export default Link;