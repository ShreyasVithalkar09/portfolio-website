import React, { useEffect } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
// import Resume from "../Resume.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div className=" pt-16">
      <div
        id="about"
        className=" w-4/5 md:w-3/5 mx-auto flex flex-col justify-start min-h-[70vh] items-center md:items-start mb-16"
      >
        <Heading heading="Who am I" />
        <div
          data-aos="fade-up"
          className="about-content mt-8 flex flex-col items-center text-left md:items-start"
        >
          <p className="text-sm sm:text-base lg:text-base mb-4 text-gray-800">
            Hello! I'm Shreyas Vithalkar, a passionate and enthusiastic
            front-end developer. I build eye-catchy and beautiful web
            applications while maintaining their functionality.
          </p>
          <p className="text-sm sm:text-base lg:text-base mb-4 text-gray-800">
            Currently, I'm a Final Year Engineering Student. I'm pursuing my
            bachelor's in Computer Science and Engineering. With front-end
            development, I also work on <strong>UI/UX Design</strong>. I work on
            technologies like <strong>Javascript, React JS, Python</strong> and
            also interested to take my career to Full-stack Development.
          </p>
          <p className="text-sm sm:text-base lg:text-base mb-4 text-gray-800">
            When I’m not typing on the keyboard, I do{" "}
            <strong>Sketching, Bike-Riding and Photography</strong>.
          </p>
          {/* <div className="mt-8 w-fit"> 
              <a href={Resume}><Button type="submit" name="Get Resume" /></a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
