import styled from 'styled-components';

export default styled.p`
  background-image: linear-gradient(
    90.99deg,
    ${(props) => props.theme.colors.akilaPurple} 0.83%,
    ${(props) => props.theme.colors.akilaBlue} 99.4%
  );
  width: 5.3rem;
  height: 0.3rem;
  border-radius: 1rem;
`;
