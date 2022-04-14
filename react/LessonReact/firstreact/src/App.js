import React from "react";
import { Routes, Route, Link, Redirect } from "react-router-dom";
import About from "./pages/About";
import './styles/App.css';
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";
import ArrayOfPosts from "./components/ArrayOfPosts";


function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/chats' element={<ArrayOfPosts/>} />
      
      </Routes>
    </div>
  )
}

export default App;
