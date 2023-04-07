import { useState } from 'react';
import Icons from '@assets/svg';
import Input from '@comp/Input';
import * as Styled from './ExchangeTable.styled';
import Dropdown from '@comp/Dropdown';
import ExchangeHistory from '@comp/ExchangeHistory';

const ExchangeTable = () => {
  const [value, setValue] = useState('1');

  return (
    <Styled.Wrapper>
      <Styled.Table>
        <Styled.Row>
          <Input label="전환 수량" value={value} onChange={(value) => setValue(value)} />
          <Dropdown />
        </Styled.Row>
        <Icons.Swap />
        <Styled.Row>
          <Styled.TargetAmount>100</Styled.TargetAmount>
          <Dropdown />
        </Styled.Row>
      </Styled.Table>
      <Styled.ExchangeButton>환전</Styled.ExchangeButton>
      <ExchangeHistory />
    </Styled.Wrapper>
  );
};

export default ExchangeTable;
