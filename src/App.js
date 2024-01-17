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

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="products/*" element={<ProductList/>}/>
            <Route path="employees/*" element={<Employees/>}/>
            <Route path="clients/*" element={<Clients/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="orders/*" element={<Orders/>}/>
          </Routes>
        </div>
        {Foot}
      </div>
    </Router>
  );
}

export default App;
