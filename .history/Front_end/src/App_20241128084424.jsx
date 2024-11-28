// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCatalogue from './components/productCatalouge';
import OrderForm from './components/orderForm';
import OrderTracking from './components/orderTracking';
import AdminDashboardPage from './pages/AdminDashboardpage';
import UserDashboardPage from './pages/UserDashboardpage';
import Login from './pages/login';
import Logout from './pages/Logout';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/admin-dashboard" component={AdminDashboardPage} />
        <Route path="/user-dashboard" component={UserDashboardPage} />
        <Route path="/order-form" component={OrderForm} />
        <Route path="/order-tracking" component={OrderTracking} />
        <Route path="/" component={ProductCatalogue} />
      </Routes>
    </Router>
  );
}

export default App;
