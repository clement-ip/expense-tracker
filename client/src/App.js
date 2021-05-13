import './App.css';
import Header from './components/Header.js';
import Balance from './components/Balance.js'
import BalanceStats from './components/BalanceStats';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header/>
        <div className="container">
          <Balance/>
          <BalanceStats/>
          <TransactionList/>
          <AddTransaction/>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
