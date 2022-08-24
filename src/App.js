import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import About from './components/about/About';
import Work from './components/work/Work';
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import Contact from './components/contact/Contact';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Routes>
    <Route  path="/" element={<Home/>} />
    <Route  path="/about" element={<About/>} />
    <Route  path="/work" element={<Work/>} />
    <Route  path="/contact" element={<Contact/>} />
   </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
