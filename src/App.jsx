
import { Routes , Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import "./App.css"
import Destination from './pages/Destination';
import Crew from './pages/Crew';

function App() {
  return (
    <div className="App">
 <Navbar/>
  <Routes >
      <Route path="/" element ={<Home/>} />
      <Route path="/Destination" element ={<Destination />}>
      <Route path ="Mars"  element= {<Destination/>}/>
      <Route path ="Europa"  element= {<Destination/>}/>
      <Route path ="Titan"  element= {<Destination/>}/>
      </Route> 
      <Route path = "/Crew" element={<Crew/>}/>
  </Routes>
  
    </div>
  );
}

export default App;
