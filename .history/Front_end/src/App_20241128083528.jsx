// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductCatalogue from './components/ProductCatalogue';
import OrderForm from './components/OrderForm';
import OrderTracking from './components/OrderTracking';
import AdminDashboardPage from './pages/AdminDashboardPage';
import UserDashboardPage from './pages/UserDashboardPage';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/admin-dashboard" component={AdminDashboardPage} />
        <Route path="/user-dashboard" component={UserDashboardPage} />
        <Route path="/order-form" component={OrderForm} />
        <Route path="/order-tracking" component={OrderTracking} />
        <Route path="/" component={ProductCatalogue} />
      </Switch>
    </Router>
  );
}

export default App;
