import React, { useEffect } from 'react';
import HeroImg from "../profile.png";
import Button from "../components/Button";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Link } from "react-scroll";

const Home = () => {
  useEffect(() => {
    AOS.init({duration:2000})
  })
  return (
    <div className=''>
    <div  id="home" className=" flex justify-center flex-col-reverse items-center md:flex-row w-4/5 md:w-3/5  mx-auto py-40 md:justify-start">
        <div data-aos="fade-right" className="left w-full flex justify-center  flex-col  items-center text-center md:text-left md:items-start   md:w-1/2">
            <h3 className="text-lg sm:text-xl ">Hi there 👋!</h3>
            <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
            I'm <span className="text-[#a537fd]">Shreyas Vithalkar</span>
            </h1>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-8">Front-end Developer</h2>
            <div className="">
            <Link activeClass="active" spy={true} offset={-70} to="portfolio">
              <Button name="My Work"/>
              </Link>
            </div>
        </div>
        <div  data-aos="fade-left" className="right flex justify-center md:justify-end items-center mb-8 md:w-1/2">
            <div className="image-hero flex justify-center">
                <img className="w-3/5  sm:w-full rounded-full" src={HeroImg} alt="hero" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home;