import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ROUTES from './constants/ROUTES';
import Exchange from '@pages/exchange';
import ExchangeHistoryPage from '@pages/exchange-history';
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.EXCHANGE} element={<Exchange />} />
        <Route path={ROUTES.EXCHANGE_HISTORY} element={<ExchangeHistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
