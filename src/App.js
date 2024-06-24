import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/navbar";
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'

function App() {
  return (
    <>
      <Navbar/>
      <div className="App">
           <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/resume' element={<Resume/>} />
          </Routes>
      </div>
    </>
  );
}

export default App;
