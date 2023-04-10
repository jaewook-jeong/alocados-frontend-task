import BodyLayout from '@comp/BodyLayout';
import Icons from '@assets/svg';
import * as Styled from './ExchangeHistory.styled';
import useExchangeStore from 'store/useExchangeStore';
import ExchangeHistory from '@comp/ExchangeHistory';
import { useMemo, useState } from 'react';

const ExchangeHistoryList = () => {
  const [isNewestSorting, setSortingMethod] = useState(true);
  const history = useExchangeStore((state) => state.history);
  const sortedHistory = useMemo(() => {
    if (isNewestSorting) {
      return history;
    }
    return [...history].reverse();
  }, [isNewestSorting, history]);

  return (
    <BodyLayout $maxWidth={634}>
      <Styled.Title>환전 내역</Styled.Title>
      <Styled.TableHeader>
        <Styled.HeaderTime
          onClick={() => setSortingMethod(!isNewestSorting)}
          $rotate={!isNewestSorting}
        >
          환전 시간 <Icons.ArrowDown />
        </Styled.HeaderTime>
        <Styled.HeaderAmount>환전금액</Styled.HeaderAmount>
      </Styled.TableHeader>
      <Styled.ListWrapper>
        {sortedHistory.map((data) => (
          <ExchangeHistory key={data.id} data={data} />
        ))}
      </Styled.ListWrapper>
    </BodyLayout>
  );
};
export default ExchangeHistoryList;
