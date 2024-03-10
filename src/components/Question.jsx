import React, { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { AiFillMinusCircle } from "react-icons/ai";

const Question = ({ info, title }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="shadow-xl bg-white w-[90%] mb-7 p-5">
        <div className="flex justify-between items-center text-4xl">
          <h1 className="font-semibold text-xl">{title}</h1>
          <button onClick={() => setShowInfo(!showInfo)} className="">
            {showInfo ? <AiFillMinusCircle /> : <IoAddCircle />}
          </button>
        </div>
        {showInfo && <p className="text-sm mt-5">{info}</p>}
      </div>
    </div>
  );
};

export default Question;
