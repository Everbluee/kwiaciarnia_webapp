import './App.css';
import Nav from './nav';
import Home from './home';
import Foot from './footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import Employees from './Employees';
import Clients from './Clients';
import Login from './Login';
import Orders from './Orders';
import ProductDetails from './ProductDetails';
import EmployeeDetails from './EmployeeDetails';
import ClientDetails from './ClientDetails';
import OrderDetails from './OrderDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="products/*" element={<ProductList/>}/>
            <Route path="products/:id" element={<ProductDetails/>}/>
            <Route path="employees/*" element={<Employees/>}/>
            <Route path="employees/:id" element={<EmployeeDetails/>}/>
            <Route path="clients/*" element={<Clients/>}/>
            <Route path="clients/:id" element={<ClientDetails/>}/>
            <Route path="orders/*" element={<Orders/>}/>
            <Route path="orders/:id" element={<OrderDetails/>}/>
            <Route path="login" element={<Login/>}/>
          </Routes>
        </div>
        {Foot}
      </div>
    </Router>
  );
}

export default App;
