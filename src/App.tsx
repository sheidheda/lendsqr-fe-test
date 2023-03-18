import React from 'react';
import Login from './pages/login/Index'
import Dashboard from './pages/dashboard/Index';
import Users from './pages/users/Index';
import UserDetails from './pages/user/Index';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={ <Login />}></Route>
        <Route path="/" element={ <Login />}></Route>
        <Route path="/dashboard" element={ <Dashboard />}></Route>
        <Route path="/users" element={ <Users />}></Route>
        <Route path="/user/:id" element={ <UserDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

