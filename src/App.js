import '../src/styles/App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Menu from './components/pages/Menu'
import Reservation from './components/pages/Reservation'
import OnlineOrder from './components/pages/OnlineOrder'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/menu' element={<Menu />} />
        <Route exact path='/reservation' element={<Reservation />} />
        <Route exact path='/order-online' element={<OnlineOrder />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Signup />} />
      </Routes>
      <footer></footer>
    </Router>
  );
}

export default App;
