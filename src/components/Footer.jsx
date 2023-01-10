import React from "react";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full  bg-[#a537fd] py-6">
      <footer className="quote text-white w-4/5 mx-auto  flex flex-col justify-between h-full">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8">
          Let’s get connected and work together on next project.
        </h2>
        <p className="text-center mb-4">Made with 🧡 by Shreyas</p>
        <p className="text-center ">Copyright &#169; Shreyas {year}</p>
      </footer>
      <div className="scroll-to-top flex  justify-end w-[92%] mx-auto">
        <div
          className="scroll-btn  flex w-fit  p-2 cursor-pointer border-2 rounded-full    text-white"
          onClick={scrollToTop}
        >
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
              d="M7 11l5-5m0 0l5 5m-5-5v12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
