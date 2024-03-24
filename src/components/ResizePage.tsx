import React from "react";

type ResizePageProps = {};

const ResizePage: React.FC<ResizePageProps> = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full">
      <div className="h-1/4 w-full lg:w-1/4 lg:h-full bg-blue-400 text-center items-center justify-center  flex hover:h-1/2 lg:hover:w-1/2 hover:bg-blue-500 transition-all duration-500 ease-in-out rounded-t-lg lg:rounded-l-lg">
        <p className=" text-black text-4xl font-extrabold p-4 lg:p-10 rounded-full hover:scale-150 hover:bg-white transition-all duration-300 ease-in-out">
          1
        </p>
      </div>
      <div className="h-1/4 w-full lg:w-1/4 lg:h-full bg-green-400 text-center items-center justify-center  flex hover:h-1/2 lg:hover:w-1/2 hover:bg-green-500 transition-all duration-500 ease-in-out">
        <p className=" text-black text-4xl font-extrabold  p-4 lg:p-10 rounded-full hover:scale-150 hover:bg-white transition-all duration-300 ease-in-out">
          2
        </p>
      </div>
      <div className="h-1/4 w-full lg:w-1/4 lg:h-full bg-yellow-200 text-center items-center justify-center  flex hover:h-1/2 lg:hover:w-1/2 hover:bg-yellow-400 transition-all duration-500 ease-in-out">
        <p className=" text-black text-4xl font-extrabold  p-4 lg:p-10 rounded-full hover:scale-150 hover:bg-white transition-all duration-300 ease-in-out">
          3
        </p>
      </div>
      <div className="h-1/4 w-full lg:w-1/4 lg:h-full bg-red-400 text-center items-center justify-center  flex hover:h-1/2 lg:hover:w-1/2 hover:bg-red-500 transition-all duration-500 ease-in-out rounded-b-lg lg:rounded-r-lg">
        <p className=" text-black text-4xl font-extrabold  p-4 lg:p-10 rounded-full hover:scale-150 hover:bg-white transition-all duration-300 ease-in-out">
          4
        </p>
      </div>
    </div>
  );
};
export default ResizePage;
