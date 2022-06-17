import React, { useEffect } from "react";

import Tags from "./Tags";
// import ProjectImg from "../assets/project-img.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = (props) => {
    useEffect(() => {
        AOS.init({duration:2000})
    })
  return (
    <div data-aos="fade-up"  className="card w-full  bg-white flex flex-col text-black lg:flex-row md:justify-between p-4 rounded-lg mb-6 ">
      <div className="poster w-full lg:w-2/5 rounded-lg mb-8 lg:mb-0">
          <img  className="rounded-lg" src={props.poster} alt="" />
      </div>
      <div className="card-content  w-full lg:w-3/6">
        <h3 className="mb-3 text-2xl font-semibold">{props.title}</h3>
        <p className="mb-3 text-sm sm:text-base">
          {props.content}
        </p>
        <div className="tags flex flex-wrap justify-start space-x-2 " >
        {
            props.stack && props.stack.map((tag,i) => {
                return(
                    <Tags key={i} tag={tag} />
                )
            })
        }
        
        </div>
        <a href={props.link} target="_blank" rel="noreferrer">
        <button className="border-2 px-5 py-2 rounded-full mt-4 hover:bg-[#f5e8ff] hover:text-[#a537fd] hover:border-[#a537fd] transition-all duration-300 ease-in" >View</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
