import { useState } from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Service from './Component/Service'
import Process from './Component/Process'
import Industires from './Component/Industires'
import Testimonials from './Component/Testimonials'
import Contactus from './Component/Contactus'

function App() {


  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Service />
      <Process />
      <Industires/>
      <Testimonials/>
      <Contactus/>

    </div>
  )
}

export default App
