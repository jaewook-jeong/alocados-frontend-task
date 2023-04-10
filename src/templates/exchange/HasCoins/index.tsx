import * as Styled from './HasCoins.styled';
import useExchangeStore from 'store/useExchangeStore';
import { CRYPTO_DETAIL } from 'constants/crypto';
import { useMemo } from 'react';
import { CryptoType } from 'types/crypto';

const HasCoins = () => {
  const wallet = useExchangeStore((state) => state.wallet);
  const arrayWallet = useMemo(
    () => Object.entries(wallet).map(([key, value]) => ({ id: key, amount: value.amount })),
    [wallet],
  );
  return (
    <Styled.LeftInfo>
      <Styled.LeftInfoTitle>요약</Styled.LeftInfoTitle>
      <Styled.Bar />
      <Styled.LeftInfoBody>
        {arrayWallet.map(({ id, amount }) => {
          const { Icon, name, currencySymbol } = CRYPTO_DETAIL[id as CryptoType];

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
