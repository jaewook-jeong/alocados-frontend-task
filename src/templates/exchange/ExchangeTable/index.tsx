import { useMemo, useState } from 'react';
import Icons from '@assets/svg';
import Input from '@comp/Input';
import * as Styled from './ExchangeTable.styled';
import Dropdown from '@comp/Dropdown';
import ExchangeHistory from '@comp/ExchangeHistory';
import useExchangeStore, { useExchangeActions } from 'store/useExchangeStore';
import { CRYPTO_DETAIL } from 'constants/crypto';
import { CryptoType } from 'types/crypto';
import RATE from 'constants/Rate';
import { decimalRegExp } from 'constants/regexp';

const ExchangeTable = () => {
  const [amount, setAmount] = useState<string>('1');
  const [fromId, setFromId] = useState<CryptoType>();
  const [toId, setToId] = useState<CryptoType>();
  const latestHistory = useExchangeStore((state) => state.history[state.history.length - 1]);
  const wallet = useExchangeStore((state) => state.wallet);
  const toChangeableCoinList = useExchangeStore((state) =>
    Object.entries(state.wallet).map(([key, value]) => ({
      id: key as CryptoType,
      name: key,
      Icon: CRYPTO_DETAIL[key as CryptoType].Icon,
      disabled: value.amount === 0,
    })),
  );
  const { exchange } = useExchangeActions();
  const toBeExchangedCoinList = useMemo(
    () => Object.values(CRYPTO_DETAIL).map((coin) => ({ ...coin, disabled: coin.id === fromId })),
    [fromId],
  );
  const error = !amount || amount === '0' || (fromId && parseFloat(amount) > wallet[fromId].amount);
  const disabled = error || !fromId || !toId;
  return (
    <Styled.Wrapper>
      <Styled.Table>
        <Styled.Row>
          <Input
            label="전환 수량"
            value={amount}
            onChange={(value) => {
              if (isNaN(value as any)) {
                return;
              }
              if (decimalRegExp.test(value)) {
                setAmount(value);
              }
            }}
            error={error}
          />
          <Dropdown<CryptoType>
            onChange={(id) => setFromId(id)}
            selectedId={fromId}
            placeholder="선택"
            keyName="from"
            list={toChangeableCoinList}
          />
        </Styled.Row>
        <Icons.Swap />
        <Styled.Row>
          <Styled.TargetAmount>
            {!disabled && parseFloat((parseFloat(amount) * RATE[fromId][toId]).toFixed(10))}
          </Styled.TargetAmount>
          <Dropdown
            onChange={(id) => setToId(id)}
            selectedId={toId}
            placeholder="선택"
            keyName="to"
            list={toBeExchangedCoinList}
          />
        </Styled.Row>
      </Styled.Table>
      <Styled.ExchangeButton
        $disabled={disabled}
        onClick={(e) => {
          if (disabled) {
            e.stopPropagation();
          } else {
            exchange({
              fromId,
              toId,
              amount: parseFloat(amount),
            });
            setFromId(undefined);
            setToId(undefined);
            setAmount('1');
          }
        }}
      >
        환전
      </Styled.ExchangeButton>
      <ExchangeHistory data={latestHistory} />
    </Styled.Wrapper>
  );
};

export default ExchangeTable;
