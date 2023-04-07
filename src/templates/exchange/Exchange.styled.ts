import { text22Bold } from "constants/typhograp";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const Title = styled.div`
  ${text22Bold};
  font-family: 'Pretendard';
  color: var(--light-shade-900);
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 17px;
  height: 386px;
`;

export {
  Wrapper,
  Title,
  InfoWrapper,
};