import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import AiTools from '../components/AiTools';
import Testimonial from '../components/Testimonial';


const Home = () => {
  return (
    <>
       <NavBar />
       <Hero /> 
       <AiTools /> 
       <Testimonial />
    </>
  )
}

export default Home;