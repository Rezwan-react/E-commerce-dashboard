import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import ProductsPage from './pages/ProductsPage'
import OrdersPage from './pages/OrdersPage'
import PaymentsPage from './pages/PaymentsPage'
import TransactionsPage from './pages/TransactionsPage'
import ClientsPage from './pages/ClientsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/productDetails' element={<ProductDetailsPage />} />
            <Route path='/orders' element={<OrdersPage />} />
            <Route path='/payments' element={<PaymentsPage />} />
            <Route path='/transactions' element={<TransactionsPage />} />
            <Route path='/clients' element={<ClientsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
