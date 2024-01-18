import './App.css';
import Nav from './nav';
import Home from './pages/Home';
import Foot from './footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Employees from './pages/Employees';
import Clients from './pages/Clients';
import Login from './pages/Login';
import Orders from './pages/Orders';
import ProductDetails from './pages/ProductDetails';
import EmployeeDetails from './pages/EmployeeDetails';
import ClientDetails from './pages/ClientDetails';
import OrderDetails from './pages/OrderDetails';

function App() {

  return (
    <Router>
      <div className="App" 
        style={{backgroundImage: `url(${require('./img/leaves.jpg')})`, 
        backgroundAttachment: 'fixed', 
        backgroundSize: 'cover'}}>
        <Nav />
        <div className="content" >
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
