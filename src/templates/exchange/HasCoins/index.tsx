import * as Styled from './HasCoins.styled';
import useExchangeStore from 'store/useExchangeStore';
import { CRYPTO_DETAIL } from 'constants/crypto';

const HasCoins = () => {
  const wallet = useExchangeStore((state) => state.wallet);
  return (
    <Styled.LeftInfo>
      <Styled.LeftInfoTitle>요약</Styled.LeftInfoTitle>
      <Styled.Bar />
      <Styled.LeftInfoBody>
        {wallet.map(({ id, amount }) => {
          const { Icon, name, currencySymbol } = CRYPTO_DETAIL[id];
          return (
            <div key={`wallet_${id}`}>
              <Styled.CryptocurrencySummary>
                <Styled.CryptocurrencyIcon>
                  <Icon />
                </Styled.CryptocurrencyIcon>
                <div>{name}</div>
              </Styled.CryptocurrencySummary>
              <Styled.CryptocurrencyPrice>{`${amount.toLocaleString()} ${currencySymbol}`}</Styled.CryptocurrencyPrice>
            </div>
          );
        })}
      </Styled.LeftInfoBody>
    </Styled.LeftInfo>
  );
};

export default HasCoins;
