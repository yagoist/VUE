import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import './styles/App.css';
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";
import Profile from "./pages/Profile";
// import ArrayOfPosts from "./pages/ArrayOfPosts";


function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/singlepost' element={<Posts />} />
        {/* <Route path='/allposts' element={<ArrayOfPosts/>}/> */}
        <Route path='/profile' element={<Profile />} />
        
      </Routes>
      
    </div>
  )
}

export default App;
