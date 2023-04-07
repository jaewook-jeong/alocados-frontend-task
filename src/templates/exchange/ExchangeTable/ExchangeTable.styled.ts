import { text15SemiBold, text18SemiBold } from "constants/typhograp";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  margin-bottom: 47px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  width: 100%;
  height: 56px;
`;

const ExchangeButton = styled.button`
  height: 56px;
  padding: 10px 16px;
  background-color: var(--light-primary-100);
  margin-bottom: 35px;
  border-radius: 12px;
  border: none;
  color: #fff;
  font-family: 'Pretendard';
  ${text15SemiBold};
  cursor: pointer;
`;

const TargetAmount = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 14px;
  font-family: 'Poppins';
  ${text18SemiBold};
  color: var(--light-shade-700);
`;

export {
  Wrapper,
  Table,
  Row,
  ExchangeButton,
  TargetAmount,
};
