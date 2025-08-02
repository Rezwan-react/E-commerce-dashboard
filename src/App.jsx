import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './components/layout/Layout'
import DashboardPage from './pages/DashboardPage'
import ProductsPage from './pages/ProductsPage'
import OrdersPage from './pages/OrdersPage'
import PaymentsPage from './pages/PaymentsPage'
import TransactionsPage from './pages/TransactionsPage'
import ClientsPage from './pages/ClientsPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import OrderDetailspage from './pages/OrderDetailspage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<DashboardPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/productDetails' element={<ProductDetailsPage />} />
            <Route path='/orders' element={<OrdersPage />} />
            <Route path='/orderDetails' element={<OrderDetailspage />} />
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
