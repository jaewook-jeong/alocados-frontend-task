import { text14, text14Bold, text22Bold } from "constants/typhograp";
import styled from "styled-components";

const Wrapper = styled.div``;

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
  margin-bottom: 8px;
`;

const HeaderTime = styled.button<{$rotate: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: transparent;
  font-family: 'Poppins';
  ${text14Bold};
  color: var(--light-shade-900);
  cursor: pointer;
  & > svg {
    transform: ${(props) => props.$rotate ? `rotate(180deg)` : ''};
  }
`;

const HeaderAmount = styled.div`
  font-family: 'Poppins';
  ${text14};
  color: var(--light-shade-900);
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export {
  Wrapper,
  Title,
  TableHeader,
  HeaderAmount,
  HeaderTime,
  ListWrapper,
}