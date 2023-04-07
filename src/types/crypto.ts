import { FunctionComponent } from "react";

export type CryptoType = 'Solana' | 'Ethereum' | 'BnB';

export type Crypto = {
  id: CryptoType;
  name: CryptoType;
  currencySymbol: string;
  Icon: FunctionComponent;
};

export type Amount = {
  amount: number;
};

export type Wallet = ({
  id: CryptoType;
} & Amount)[];

export type ExchangeHistory = {
  id: string;
  fromId: CryptoType;
  toId: CryptoType;
  rate: number;
  amount: number;
  time: string;
};

