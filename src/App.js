import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import About from './components/about/About';
import Work from './components/work/Work';
import { BrowserRouter, Route,Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="/about" element={<About/>} />
    <Route  path="/work" element={<Work/>} />
   </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
