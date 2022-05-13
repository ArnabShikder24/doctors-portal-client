import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './Pages/About/About';
import Appoitnment from './Pages/Appoitnment/Appoitnment';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appoitnment></Appoitnment>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;
