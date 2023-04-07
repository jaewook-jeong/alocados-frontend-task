import BodyLayout from '@comp/BodyLayout';
import Icons from '@assets/svg';
import * as Styled from './ExchangeHistory.styled';

const ExchangeHistoryList = () => {
  return (
    <BodyLayout $maxWidth={634}>
      <Styled.Title>환전 내역</Styled.Title>
      <Styled.TableHeader>
        <Styled.HeaderTime>
          환전 시간 <Icons.ArrowDown />
        </Styled.HeaderTime>
        <Styled.HeaderAmount>환전금액</Styled.HeaderAmount>
      </Styled.TableHeader>
    </BodyLayout>
  );
};
export default ExchangeHistoryList;
