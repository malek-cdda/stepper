import React, { useState } from "react";
import { FaStepForward } from "react-icons/fa";
import Stepper from "./Stepper";
export default function StepperComponent({
  data,
  icon,
  showStep,
  description,
  showLabel,
  activeColor = "blue",
  noneActiveColor = "gray",
}: any) {
  // fakedbd json i create

  // inital i create the current step and number of steps state
  const [currentStep, setCurrentStep] = useState(0);
  // then i create the function to go to next step and previous step
  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === data.length - 1 ? prev : prev + 1));
  const goToPreviousStep = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));
  return (
    <div className="w-full">
      <h1 className="text-2xl text-center my-5">Stepper component</h1>

      <div className="w-full">
        <Stepper
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          numberOfSteps={data?.length}
          data={data}
          activeColor={activeColor}
          noneActiveColor={noneActiveColor}
          icon={icon}
          showStep={showStep}
          showLabel={showLabel}
        />
      </div>
      <div className="text-center pt-20 font-normal text-[14px]">
        {description && <p>{data[currentStep]?.description}</p>}
      </div>
      <section className="flex gap-10 py-5 justify-center">
        {currentStep !== 0 && (
          <button
            onClick={goToPreviousStep}
            className="bg-blue-600 text-white p-2 rounded-md">
            Previous step
          </button>
        )}
        {currentStep + 1 !== data.length ? (
          <button
            onClick={goToNextStep}
            className="bg-blue-600 text-white p-2 rounded-md">
            Next step
          </button>
        ) : (
          <button className="bg-blue-600 text-white p-2 rounded-md">
            Submit
          </button>
        )}
      </section>
    </div>
  );
}
