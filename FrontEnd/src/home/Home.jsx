import React from 'react';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import FreeBook from "../components/FreeBook";
import Cards from "../components/Cards";
import Slider from "react-slick";


 function Home() {
  return (
    <>

<Navbar/>
    <Banner/>
    <FreeBook/>
    <Cards/>
    <Slider/>
  <Footer/>
    </>
  )
}
export default Home;

