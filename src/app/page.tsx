"use client";
import Stepper from "@/components/stepper/Stepper";
import React, { useState } from "react";
import { FaStepForward } from "react-icons/fa";
export default function Home() {
  const data = [
    {
      name: "home",
      icon: <FaStepForward />,
      description: "my description",
      label: "label-1",
      style: {
        color: "green",
        width: "100px",
      },
    },
    {
      name: "home",
      icon: <FaStepForward />,
      description: "my description",
      label: "label-2",
      style: {
        color: "red",
      },
    },
    {
      name: "home",
      icon: <FaStepForward />,
      description: "my description",
      label: "label-3",
      style: {
        color: "red",
      },
    },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const NUMBER_OF_STEPS = data.length;

  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1));
  const goToPreviousStep = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));
  let activeColor = "blue";
  return (
    <div className="flex justify-center  ">
      <div className="w-full">
        <h1 className="text-2xl">Stepper component</h1>
        <br />
        <div className="  w-full">
          <Stepper
            currentStep={currentStep}
            numberOfSteps={NUMBER_OF_STEPS}
            data={data}
            activeColor={activeColor}
          />
        </div>
        <br />
        <section className="flex gap-10 justify-center">
          <button
            onClick={goToPreviousStep}
            className="bg-blue-600 text-white p-2 rounded-md">
            Previous step
          </button>
          <button
            onClick={goToNextStep}
            className="bg-blue-600 text-white p-2 rounded-md">
            Next step
          </button>
        </section>
      </div>
    </div>
  );
}
