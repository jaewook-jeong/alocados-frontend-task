import { ExchangeHistory, Wallet } from 'types/crypto';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type ExchangeStore = {
  history: ExchangeHistory[];
  wallet: Wallet;
  actions: {
    exchange: (data: ExchangeHistory) => void;
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
    wallet: [
      {
        id: 'Ethereum',
        amount: 1995,
      },
      {
        id: 'Solana',
        amount: 500,
      },
      {
        id: 'BnB',
        amount: 0,
      },
    ],
    actions: {
      exchange: (data) => {
        if (data.fromId === data.toId) {
          throw new Error('같은 코인끼리 환전할 수 없습니다.');
        }
        const { history } = getState();
        setState({
          history: [...history, { ...data }],
        });
      },
    },
  })),
);

export default useExchangeStore;

export const useExchangeActions = () => useExchangeStore((state) => state.actions);
