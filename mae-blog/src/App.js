import './App.css';
import React from 'react';
import Navbar from './Components/Navbar'
import {
  BrowserRouter,
  Routes, 
  Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import NewPost from './Components/Pages/NewPost';
import Profile from './Components/Pages/Profile';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/New-Post' element={<NewPost/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
