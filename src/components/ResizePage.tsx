import React from "react";

type ResizePageProps = {};

const ResizePage: React.FC<ResizePageProps> = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="w-1/4 bg-blue-400 text-center items-center justify-center h-full flex hover:w-1/2 hover:bg-blue-500 transition-all duration-500 ease-in-out rounded-l-lg">
        <p className=" text-black text-4xl font-extrabold p-10 rounded-full hover:scale-150 hover:bg-white transition-all duration-300 ease-in-out">
          1
        </p>
      </div>
      <div className="w-1/4 bg-green-400 text-center items-center justify-center h-full flex hover:w-1/2 hover:bg-green-500 transition-all duration-500 ease-in-out ">
        <p className=" text-black text-4xl font-extrabold p-10 rounded-full hover:scale-150 hover:bg-white transition-all duration-300 ease-in-out">
          2
        </p>
      </div>
      <div className="w-1/4 bg-yellow-200 text-center items-center justify-center h-full flex hover:w-1/2 hover:bg-yellow-400 transition-all duration-500 ease-in-out">
        <p className=" text-black text-4xl font-extrabold p-10 rounded-full hover:scale-150 hover:bg-white transition-all duration-300 ease-in-out">
          3
        </p>
      </div>
      <div className="w-1/4 bg-red-400 text-center items-center justify-center h-full flex hover:w-1/2 hover:bg-red-500 transition-all duration-500 ease-in-out rounded-r-lg">
        <p className=" text-black text-4xl font-extrabold p-10 rounded-full hover:scale-150 hover:bg-white transition-all duration-300 ease-in-out">
          4
        </p>
      </div>
    </div>
  );
};
export default ResizePage;
