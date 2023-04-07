import styled from 'styled-components';

const BodyLayout = styled.section<{ $maxWidth: number }>`
  width: 100%;
  max-width: ${(props) => `${props.$maxWidth}px`};
  margin: 0 auto;
`;

export default BodyLayout;
