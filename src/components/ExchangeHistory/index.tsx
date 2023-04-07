import Icons from '@assets/svg';
import * as Styled from './ExchangeHistory.styled';

const ExchangeHistory = () => {
  return (
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
  );
};

export default ExchangeHistory;
