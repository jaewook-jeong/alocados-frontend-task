import { text14, text18, text18SemiBold, text20SemiBold } from "constants/typhograp";
import styled from "styled-components";

const LeftInfo = styled.div`
  flex-basis: 308px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 24px;
  background-color: var(--light-shade-000);
  border-radius: 12px;
`;

const LeftInfoTitle = styled.div`
  ${text20SemiBold};
  font-family: 'Poppins';
  color: var(--light-shade-700);
`;

const Bar = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--light-shade-300);
  margin: 8px 0;
`;

const LeftInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const CryptocurrencySummary = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 4px;
  height: 36px;
  color: var(--light-shade-700);
  font-family: 'Poppins';
  ${text18};
`;

const CryptocurrencyIcon = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--light-shade-opacity-5);
  border-radius: 50%;
`;

const CryptocurrencyPrice = styled.div`
  color: var(--light-shade-900);
  font-family: 'Poppins';
  ${text18SemiBold};
`;

export {
  LeftInfo,
  LeftInfoTitle,
  Bar,
  LeftInfoBody,
  CryptocurrencySummary,
  CryptocurrencyIcon,
  CryptocurrencyPrice,
};
