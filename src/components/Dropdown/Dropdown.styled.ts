import { text14 } from "constants/typhograp";
import styled from "styled-components";

const Wrapper = styled.div`
  flex-basis: 147px;
  flex-shrink: 0;
  position: relative;
  font-family: 'Poppins';
  color: var(--light-shade-900);
  ${text14};
`;

const DropdownButton = styled.button`
  flex-basis: 147px;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: var(--light-shade-000);
  border: none;
  padding: 16px 10px;
  display: flex;
  flex-direction: row;
  column-gap: 4px;
  width: 100%;
  cursor: pointer;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 63px;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: var(--light-shade-000);
  border-radius: 12px;
`;

const DropdownChildren = styled.div<{$disabled: boolean}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 4px;
  padding: 16px 10px;
  cursor: ${(props) => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${(props) => props.$disabled && '0.3'};
`;

export {
  Wrapper,
  DropdownButton,
  DropdownList,
  DropdownChildren,
}