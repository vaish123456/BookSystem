import React from 'react';
import Home from "./home/Home";
{/*import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FreeBook from "./components/FreeBook";
import Cards from "./components/Cards";
import Slider from "react-slick";*/}
//import Course from "./components/Course";
import {Route,Routes} from "react-router-dom";
import Courses from "./courses/Courses";
import {Signup} from "./components/Signup.jsx";

function App() {
  return (
    <>
   {/*<Home/>
   <Course/>*/}<div className="dark:bg-slate-900 dark:text-white">
    <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/course" element={<Courses/>}/>
   <Route path="/signup" element={<Signup/>}/>
   
   
   
   </Routes>
   </div>
    {/*<Navbar/>
    <Banner/>
    <FreeBook/>
    <Cards/>
    <Slider/>
  <Footer/>*/}
    
    
    </>
  )
}

export default App