import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCatalogue from './components/productCatalouge';
import OrderForm from './components/orderForm';
import OrderTracking from './components/orderTracking';
import AdminDashboardPage from './pages/AdminDashboardPage';
import UserDashboardPage from './pages/UserDashboardPage';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/user-dashboard" element={<UserDashboardPage />} />
        <Route path="/order-form" element={<OrderForm />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/" element={<ProductCatalogue />} />
      </Routes>
    </Router>
  );
}

export default App;
