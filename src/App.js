import { Navbar } from './NavBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import Reviews from './pages/Reviews';
import { Routes, Route ,Link} from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Reviews" element={<Reviews />} />
        </Routes>
        </>
        
  
      
      
      
    
   
      
  );
}

export default App;