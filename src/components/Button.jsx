import React from "react";

const Button = ({name,type}) => {
  return (
    <>
      <button type={type} className="btn text-xs bg-[#a537fd] text-white py-3 px-8 rounded-full  md:text-base hover:bg-[#7902d9] hover:translate-y-0.5 transition-all ease-in duration-300">
        {name}
      </button>
    </>
  );
};

export default Button;
