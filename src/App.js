
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home';
import Contact from './Contact'
import About from './About'
import Service from './Service'
import Error from './Error';
import Navbar from './Navbar';


import {Routes,Route,Redirect, Link} from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/service" element={<Service/>} />
    <Route path ="*" element={<Error/>}></Route>
    
    </Routes>
    
    </>
     
  );
}

export default App;
