import { text12SemiBold, text18SemiBold } from "constants/typhograp";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  padding-top: 4px;
  padding-left: 14px;
  background-color: var(--light-shade-000);
`;

const Label = styled.label`
  font-family: 'Pretendard';
  ${text12SemiBold};
  color: var(--light-shade-600);
`;

const Input = styled.input`
  border: none;
  outline: 0;
  width: 100%;
  font-family: 'Poppins';
  ${text18SemiBold};
  color: var(--light-shade-800);
  background-color: var(--light-shade-000);
`;

export {
  Wrapper,
  Label,
  Input,
}