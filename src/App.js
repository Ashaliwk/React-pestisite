import './App.css';
import Navbar from './components/Navbar';
import Mainsec from './components/Mainsec';
import Categories from './components/Categories';
import Buy from './components/Buy';
import Order from './components/Order';
import Detail from './components/Detail';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
// import { Player } from '@lordicon/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Mainsec />} />
          <Route exact path='/Categories' element={<Categories />} />
          <Route exact path='/Buy' element={<Buy />} />
          <Route exact path='/Order' element={<Order />} />
          <Route exact path='/Detail' element={<Detail />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Signup' element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
