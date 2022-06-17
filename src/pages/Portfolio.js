import React from "react";
import Card from "../components/Card";
import Heading from "../components/Heading";
import { projects } from "../data";


const Portfolio = () => {
   
  return (
    <div  id="portfolio" className="w-4/5 md:w-3/5 mx-auto flex flex-col justify-center items-center md:items-start mb-16   ">
      <Heading heading="My Work" />
      <div className="work-content mt-8">
        {projects &&
          projects.map((project,i) => {
            return (
              <Card
                title={project.title}
                content={project.content}
                stack={project.stack}
                key={i}
                poster={project.poster}
                link={project.link}
                
                
              />
            );
          })}
      </div>
    </div>
  );
};

export default Portfolio;
