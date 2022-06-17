import React, { useState } from "react";
import { Link } from "react-scroll";
// import Light from "../light.svg";
// import Dark from "../dark.svg";

const Navbar = () => {

  const [open, setOpen] = useState(true);
  // const [dark, setDark] = useState(false);

  // const darkMode = () => {
  //   setDark(!dark);
  //   if(dark){

  //     document.body.style.backgroundColor = "#292929";
  //     document.body.style.color = "#ffffff";
  //   }
  //   else{
  //     document.body.style.backgroundColor = "#fdf6f1";
  //     document.body.style.color = "#000000";
      
  //   }
  //   console.log(dark);
  // }
  return (
    <nav>
      <section className="navigation fixed h-auto left-5 top-[20px] md:left-[50px] logo cursor-pointer">
       <Link activeClass="active" spy={true} offset={-70} to="home"> <h1 className="font-bold text-4xl text-black">SV</h1></Link>
      </section>
      <section className="navigation fixed h-auto z-50 right-5 md:right-[50px] top-[20px]">
        <div className="nav-icon cursor-pointer bg-[#a537fd] p-3 rounded-full text-white "
        onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </section>
      <section className={`nav-content fixed w-4/5 h-full max-w-[800px] z-50 right-0 flex 
      justify-center items-center overflow-hidden bg-[#a537fd] text-white ${open ? "translate-x-full" : "translate-x-0"} transition-all duration-500 ease`}>
        <div className="close-btn absolute  right-5 md:right-[50px] top-[20px] w-10 h-10 cursor-pointer
         text-white bg-black rounded-full p-2 " onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="wrapper w-3/4 relative ">
          <ul className="text-left cursor-pointer">
            <li className="mb-8 text-2xl font-semibold hover:text-yellow-400 hover:text-3xl transition-all duration-300 ease-out">
            <Link activeClass="active" spy={true} offset={-70} to="home">
                Home
              </Link>
            </li>
            <li className="mb-8 text-2xl font-semibold hover:text-yellow-400 hover:text-3xl transition-all duration-300 ease-out">
            <Link activeClass="active" spy={true} offset={-70} to="about">
                About
              </Link>
            </li>
            <li className="mb-8 text-2xl font-semibold hover:text-yellow-400 hover:text-3xl transition-all duration-300 ease-out">
            <Link activeClass="active" spy={true} offset={-70} to="portfolio">
                Portfolio
              </Link>
            </li>
            <li className="mb-8 text-2xl font-semibold hover:text-yellow-400 hover:text-3xl transition-all duration-300 ease-out">
            <Link activeClass="active" spy={true} offset={-70} to="contact">
                Contact
              </Link>
            </li>
            {/* <li  onClick={darkMode}>
            <img className="w-10 text-white" src={dark? Light : Dark} alt="" />
            </li> */}
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
