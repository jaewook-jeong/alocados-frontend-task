import { text14, text14Bold, text22Bold } from "constants/typhograp";
import styled from "styled-components";

const Wrapper = styled.div`

`;

const Title = styled.h1`
  margin: 0;
  margin-top: 120px;
  margin-bottom: 24px;
  font-family: 'Pretendard';
  ${text22Bold};
`;

const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  padding: 8px 16px;
  background: var(--light-shade-100);
  border-radius: 12px;
`;

const HeaderTime = styled.div`
  font-family: 'Poppins';
  ${text14Bold};
  color: var(--light-shade-900);
`;

const HeaderAmount = styled.div`
  font-family: 'Poppins';
  ${text14};
  color: var(--light-shade-900);
`;

export {
  Wrapper,
  Title,
  TableHeader,
  HeaderAmount,
  HeaderTime,
}