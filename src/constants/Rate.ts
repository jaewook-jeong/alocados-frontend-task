import { CryptoType } from 'types/crypto';
const RATE: { [K in CryptoType]: { [V in CryptoType]: number } } = {
  "Solana": {
    "Solana": 1,
    "Ethereum": 0.01,
    "BnB": 0.5,
  },
  "Ethereum": {
    "Solana": 100,
    "Ethereum": 1,
    "BnB": 50,
  },
  "BnB": {
    "Solana": 2,
    "Ethereum": 0.02,
    "BnB": 1,
  },
};

export default RATE;