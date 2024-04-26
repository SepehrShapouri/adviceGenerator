import React, { useEffect, useState } from "react";
import divider from "../assets/images/pattern-divider-desktop.svg";
import dice from "../assets/images/icon-dice.svg";
function AdviceGenerator() {
  const [advice, setAdvice] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchAdvice();
  }, []);
  function fetchAdvice() {
    setIsLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then(({ slip }) => {
        setAdvice(slip), setIsLoading(false);
      });
  }
  return (
    <div className="max-w-[350px] sm:max-w-[500px] text-center bg-darkGrayishBlue p-4 flex items-center justify-center relative rounded-2xl">
      <div className="flex flex-col gap-2 mt-[1rem]">
        {isLoading && (
          <h1 className="text-neonGreen">Generating New Advice...</h1>
        )}
        {!isLoading && (
          <>
            <p className="text-neonGreen text-sm ">
              ADVICE&nbsp;&nbsp;&nbsp;# {advice?.id}
            </p>
            <q className="text-lightCyan text-[28px] text-center">
              {advice?.advice}
            </q>
          </>
        )}
        <img src={divider} alt="" className="px-[23px] my-4 mb-[40px]" />
      </div>
      <span
        className="absolute hover:shadow-[0_0_20px_rgba(82,255,168,1)] transition 0.4s ease-linear w-[50px] flex items-center justify-center h-[50px] rounded-full bg-neonGreen cursor-pointer bottom-[-10%]"
        onClick={fetchAdvice}
      >
        <img src={dice} />
      </span>
    </div>
  );
}

export default AdviceGenerator;
