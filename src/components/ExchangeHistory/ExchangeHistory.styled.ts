import { text14, text18SemiBold } from "constants/typhograp";
import styled from "styled-components";

const LatestHistory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 32px;
  padding: 8px 16px;
  background-color: var(--light-shade-100);
  border-radius: 12px;
`;

const Time = styled.div`
  font-family: 'Poppins';
  ${text14};
  color: var(--light-shade-900);
`;

const AmountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 32px;
`;

const CrypAmount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
  font-family: 'Poppins';
  ${text18SemiBold};
  color: var(--light-shade-700);
`;

export {
  LatestHistory,
  Time,
  AmountWrapper,
  CrypAmount,
};
