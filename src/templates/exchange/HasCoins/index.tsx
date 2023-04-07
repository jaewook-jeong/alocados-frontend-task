import Icons from '@assets/svg';
import * as Styled from './HasCoins.styled';

const HasCoins = () => {
  return (
    <Styled.LeftInfo>
      <Styled.LeftInfoTitle>요약</Styled.LeftInfoTitle>
      <Styled.Bar />
      <Styled.LeftInfoBody>
        <div>
          <Styled.CryptocurrencySummary>
            <Styled.CryptocurrencyIcon>
              <Icons.Solana />
            </Styled.CryptocurrencyIcon>
            <div>Solana</div>
          </Styled.CryptocurrencySummary>
          <Styled.CryptocurrencyPrice>1,211,023,512.34 SOL</Styled.CryptocurrencyPrice>
        </div>
      </Styled.LeftInfoBody>
    </Styled.LeftInfo>
  );
};

export default HasCoins;
