import { useState } from 'react';
import Icons from '@assets/svg';
import Input from '@comp/Input';
import * as Styled from './ExchangeTable.styled';
import Dropdown from '@comp/Dropdown';

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
      <Styled.LatestHistory>
        <Styled.Time>2023-03-12, AM 10:50</Styled.Time>
        <Styled.AmountWrapper>
          <Styled.CrypAmount>
            <Icons.Ethereum />
            1,302.44 ETH
          </Styled.CrypAmount>
          <Icons.Right />
          <Styled.CrypAmount>
            <Icons.Solana />
            1,302.44 SOL
          </Styled.CrypAmount>
        </Styled.AmountWrapper>
      </Styled.LatestHistory>
    </Styled.Wrapper>
  );
};

export default ExchangeTable;
