import RATE from 'constants/Rate';
import dayjs from 'dayjs';
import { ExchangeHistory, Wallet } from 'types/crypto';
import generateRandomString from 'utils/generateRandomString';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type ExchangeStore = {
  history: ExchangeHistory[];
  wallet: Wallet;
  actions: {
    exchange: (data: Pick<ExchangeHistory, 'fromId' | 'toId' | 'amount'>) => void;
  };
};

const useExchangeStore = create(
  devtools<ExchangeStore>((setState, getState) => ({
    history: [
      {
        id: 'hello_world',
        time: '2023-03-07, PM 10:22',
        fromId: 'Ethereum',
        toId: 'Solana',
        amount: 5,
        rate: 100,
      },
    ],
    wallet: {
      Ethereum: {
        amount: 1995,
      },
      Solana: {
        amount: 500,
      },
      BnB: {
        amount: 0,
      },
    },
    actions: {
      exchange: (data) => {
        if (data.fromId === data.toId) {
          throw new Error('같은 코인끼리 환전할 수 없습니다.');
        }
        const { fromId, amount, toId } = data;

        const id = generateRandomString(5);
        const rate = RATE[fromId][toId];
        const time = dayjs().format('YYYY-MM-DD, A HH:mm');

        const { history, wallet } = getState();
        const nextWallet = {
          [fromId]: { amount: wallet[fromId].amount - amount },
          [toId]: { amount: wallet[toId].amount + amount * rate },
        };

        setState({
          history: [...history, { ...data, id, rate, time }],
          wallet: { ...wallet, ...nextWallet },
        });
      },
    },
  })),
);

export default useExchangeStore;

export const useExchangeActions = () => useExchangeStore((state) => state.actions);
