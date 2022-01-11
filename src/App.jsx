
import { Routes , Route ,Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import "./App.css"
import Destination from './pages/Destination';

function App() {
  return (
    <div className="App">
 <Navbar/>
  <Routes >
    <Route path="/" element ={<Home/>} />
    <Route path="/Destination" element ={<Destination />}>
      <Route path = "Mars" />
    </Route> 
  </Routes>
  <Outlet/>
    </div>
  );
}

export default App;
