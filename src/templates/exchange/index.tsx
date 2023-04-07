import BodyLayout from '@comp/BodyLayout';
import * as Styled from './Exchange.styled';
import HasCoins from './HasCoins';
import ExchangeTable from './ExchangeTable';

const Exchange = () => {
  return (
    <BodyLayout $maxWidth={960}>
      <Styled.Wrapper>
        <Styled.Title>환전하기</Styled.Title>
        <Styled.InfoWrapper>
          <HasCoins />
          <ExchangeTable />
        </Styled.InfoWrapper>
      </Styled.Wrapper>
    </BodyLayout>
  );
};

export default Exchange;
