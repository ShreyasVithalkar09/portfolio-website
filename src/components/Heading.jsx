import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

const Heading = (props) => {
  useEffect(() => {
    AOS.init(({duration:2000}))
  })
  return (
    <div  data-aos="fade-right" className="flex">
        <h1 className="text-3xl md:text-5xl text-black font-bold border-b-4 border-b-[#a537fd]">{props.heading}</h1>
    </div>
  )
}

export default Heading;