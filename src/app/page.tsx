"use client";
import Stepper from "@/components/stepper/Stepper";
import React, { useState } from "react";
import { FaStepForward } from "react-icons/fa";
export default function Home() {
  // fakedbd json i create
  const data = [
    {
      name: "home",
      icon: <FaStepForward />,
      description: "first i need to declare step design",
      label: "label-1",
      style: {
        color: "green",
      },
    },
    {
      name: "home",
      icon: <FaStepForward />,
      description: "then i need to declare current step",
      label: "label-2",
      style: {
        color: "red",
      },
    },
    {
      name: "home",
      icon: <FaStepForward />,
      description: "then i need to declare current step and number of steps",
      label: "label-3",
      style: {
        color: "red",
      },
    },
    {
      name: "home",
      icon: <FaStepForward />,
      description: "i remove previous button when it in inital step",
      label: "label-1",
      style: {
        color: "green",
      },
    },
    {
      name: "home",
      icon: <FaStepForward />,
      description: "i remove next button when it in final step",
      label: "label-2",
      style: {
        color: "red",
      },
    },
    {
      name: "home",
      icon: <FaStepForward />,
      description: "finaly i done it ,, i think its complete",
      label: "label-3",
      style: {
        color: "red",
      },
    },
  ];
  // inital i create the current step and number of steps state
  const [currentStep, setCurrentStep] = useState(0);
  // then i create the function to go to next step and previous step
  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === data.length - 1 ? prev : prev + 1));
  const goToPreviousStep = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));
  // then i declare active circle color and none active circle color
  let activeColor = "blue";
  let noneActiveColor = "gray";
  return (
    <div className="w-full">
      <h1 className="text-2xl text-center my-5">Stepper component</h1>

      <div className="w-full">
        <Stepper
          currentStep={currentStep}
          numberOfSteps={data?.length}
          data={data}
          activeColor={activeColor}
          noneActiveColor={noneActiveColor}
        />
      </div>
      <div className="text-center py-5 font-normal text-[14px]">
        <p>{data[currentStep]?.description}</p>
      </div>
      <section className="flex gap-10 justify-center">
        {currentStep !== 0 && (
          <button
            onClick={goToPreviousStep}
            className="bg-blue-600 text-white p-2 rounded-md">
            Previous step
          </button>
        )}
        {currentStep + 1 !== data.length && (
          <button
            onClick={goToNextStep}
            className="bg-blue-600 text-white p-2 rounded-md">
            Next step
          </button>
        )}
      </section>
    </div>
  );
}
