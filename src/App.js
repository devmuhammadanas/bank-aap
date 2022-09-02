import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";




import DashboardPage from './pages/dashboardPage/DashboardPage';
import AccountPage from './pages/acconutPage/AccountPage';
import TransactionPage from './pages/transactionPage/TransactionPage';
import { NotState } from './Components/cards/Card';



function App() {

  return (
      <div className='main_box'>

      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<DashboardPage />} />
          <Route path='transaction/' exact element={<TransactionPage />} />
          <Route path='account' exact element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;

