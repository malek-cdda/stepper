import React from "react";
import { FaStepForward } from "react-icons/fa";
const Stepper = ({
  currentStep,
  numberOfSteps,
  data,
  activeColor,
  noneActiveColor,
}: any) => {
  const activeColorFnc = (index: any) =>
    currentStep >= index ? activeColor : noneActiveColor;
  // final step check if its true then the line not show in final step
  const isFinalStep = (index: any) => index === numberOfSteps - 1;
  console.log(data.length - 1 === 5, data.length);
  return (
    <div className="flex justify-center  w-full">
      <div className="w-1/2 flex    shadow-md px-3 py-2 rounded-md">
        {Array.from({ length: numberOfSteps }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-stretch  justify-between w-full">
            <div className="flex items-center  ">
              <div
                className={`p-3   rounded-full flex justify-center items-center  `}
                style={{
                  background: activeColorFnc(index),
                  ...data[index]?.style,
                }}>
                {data[index]?.icon ? data[index]?.icon : <Icon />}
              </div>
              {isFinalStep(index) ? null : (
                <div
                  className={`w-full h-1`}
                  style={{
                    ...data[index]?.style,
                    background: activeColorFnc(index),
                  }}></div>
              )}
            </div>
            <p className="">
              {data[index]?.label} {currentStep}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;

const Icon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 1024 1024"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"></path>
    </svg>
  );
};
