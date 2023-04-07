import Icons from '@assets/svg';
import * as Styled from './ExchangeHistory.styled';
import { ExchangeHistory as ExchangeHistoryProps } from 'types/crypto';
import { CRYPTO_DETAIL } from 'constants/crypto';

const ExchangeHistory = ({ data }: { data: ExchangeHistoryProps }) => {
  const fromInfo = CRYPTO_DETAIL[data.fromId];
  const toInfo = CRYPTO_DETAIL[data.toId];

  return (
    <Styled.LatestHistory>
      <Styled.Time>{data.time}</Styled.Time>
      <Styled.AmountWrapper>
        <Styled.CrypAmount>
          <fromInfo.Icon />
          {`${data.amount} ${fromInfo.currencySymbol}`}
        </Styled.CrypAmount>
        <Icons.Right />
        <Styled.CrypAmount>
          <toInfo.Icon />
          {`${data.amount * data.rate} ${toInfo.currencySymbol}`}
        </Styled.CrypAmount>
      </Styled.AmountWrapper>
    </Styled.LatestHistory>
  );
};

export default ExchangeHistory;
