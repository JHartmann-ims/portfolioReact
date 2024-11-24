import React from "react";

const Footer = () => {
  return (
    <div className="relative w-screen h-[130px] border-t border-neutral mt-20">
      {/* Text in Border */}
      <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-base-100 px-2">
        <p className="text-sm">made with React</p>
      </div>

      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl sm:text-4xl sm:pl-5 font-bold pl-10">
            &lt;/JHartmann&gt;
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
