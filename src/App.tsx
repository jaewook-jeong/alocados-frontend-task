import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ROUTES from './constants/ROUTES';
import Exchange from '@pages/exchange';
import TransactionHistory from '@pages/transaction-history';
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.EXCHANGE} element={<Exchange />} />
        <Route path={ROUTES.TRANSACTION_HISTORY} element={<TransactionHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
