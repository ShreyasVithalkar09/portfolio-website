import React, { useEffect } from 'react';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import AOS from 'aos'
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({duration:2000})
  })
    const contactLinks = [
        {
          name: "LinkedIn",
          icon: "logo-linkedin",
          link: "https://www.linkedin.com/in/shreyas-vithalkar-4502b31a5/",
        },
        {
          name: "Email",
          icon: "mail-outline",
          link: "mailto:shreyas.vithalkar08@gmail.com",
        },
        {
          name: "Github",
          icon: "logo-github",
          link: "https://github.com/ShreyasVithalkar09",
        },
        {
          name: "Instagram",
          icon: "logo-instagram",
          link: "https://instagram.com/shreyas_uiux?igshid=YmMyMTA2M2Y=",
        },
      ];
  return (
      <div id="contact" className=" h-screen ">
     
    <div   className="w-4/5 md:w-3/5 mx-auto  min-h-[70vh] p-12 flex flex-col justify-start items-center md:items-start">
        <Heading heading="Get in touch"/>

        <div data-aos="fade-up" className="contact-links grid grid-cols-1  gap-4 my-8">
        {contactLinks.map((link) => {
          return (
            <div className="text-2xl sm:text-3xl py-4 font-semibold flex  items-center" key={link.name} >
              <a href={link.link}  className="hover:text-[#a537fd] transition-all duration-200 ease-linear">
                <span className=" ">
                  <ion-icon name={`${link.icon}`}></ion-icon>
                </span>{" "}
                {link.name}
              </a>
            </div>
          );
        })}
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default Contact;