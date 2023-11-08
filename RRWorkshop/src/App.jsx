
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Blue from './Components/Blue'
import Red from './Components/Red'
import Home from './Components/Home'
import Orange from './Components/Orange'
import Yellow from './Components/Yellow'
import Green from './Components/Green'
import Purple from './Components/Purple'

function App() {
 
  return (

  <div id="container">

    <div id="navbar">
      <Link className='homelink' to="/">Home</Link>
      <Link className='redlink' to="/red">Red</Link>
      <Link className='orangelink' to="/orange">Orange</Link>
      <Link className='yellowlink' to="/yellow">Yellow</Link>
      <Link className='greenlink' to="/green">Green</Link>
      <Link className='bluelink' to="/blue">Blue</Link>
      <Link className='purplelink' to="/purple">Purple</Link>
    </div>
    
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/red" element={<Red />}></Route>
        <Route path="/orange" element={<Orange />}></Route>
        <Route path="/yellow" element={<Yellow />}></Route>
        <Route path="/green" element={<Green />}></Route>
        <Route path="/blue" element={<Blue />}></Route>
        <Route path="/purple" element={<Purple />}></Route>
      </Routes>
    </div>

    <div id="footer">
    <Link className='homelink' to="/">Home</Link>
      <Link className='redlink' to="/red">Red</Link>
      <Link className='orangelink' to="/orange">Orange</Link>
      <Link className='yellowlink' to="/yellow">Yellow</Link>
      <Link className='greenlink' to="/green">Green</Link>
      <Link className='bluelink' to="/blue">Blue</Link>
      <Link className='purplelink' to="/purple">Purple</Link>
    </div>

  </div>

  )
}

export default App
