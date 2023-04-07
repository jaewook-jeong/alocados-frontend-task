import { Crypto, CryptoType } from "types/crypto";
import Icons from '@assets/svg';

export const CRYPTO_DETAIL: { [K in CryptoType]: Crypto } = {
  "Solana": {
    id: "Solana",
    name: "Solana",
    currencySymbol: "SOL",
    Icon: Icons.Solana,
  },
  "Ethereum": {
    id: "Ethereum",
    name: "Ethereum",
    currencySymbol: "ETH",
    Icon: Icons.Ethereum,
  },
  "BnB": {
    id: "BnB",
    name: "BnB",
    currencySymbol: "BNB",
    Icon: Icons.Bnb,
  }
};