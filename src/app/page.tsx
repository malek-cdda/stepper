"use client";
import { FaStepForward } from "react-icons/fa";
import StepperComponent from "@/components/stepper/Index";
import React, { useState } from "react";

const Home = () => {
  const data = [
    {
      name: "home",
      icon: <FaStepForward />,
      description: "first i need to declare step design",
      label: "label",
    },
    {
      name: "home",
      icon: <FaStepForward />,
      description: "then i need to declare current step",
      label: "label",
    },
    {
      name: "home",
      icon: <FaStepForward />,
      description: "then i need to declare current step and number of steps",
      label: "label",
    },
    {
      name: "home",
      icon: <FaStepForward />,
      description: "i remove previous button when it in inital step",
      label: "label",
    },
    {
      name: "home",
      icon: <FaStepForward />,
      description: "i remove next button when it in final step",
      label: "label",
    },
    {
      name: "home",
      icon: <FaStepForward />,
      description: "finaly i done it ,, i think its complete",
      label: "label",
    },
  ];
  const [icon, setIcon] = useState(true);
  const [showStep, setShowStep] = useState(true);
  const [description, setDescription] = useState(true);
  const [showLabel, setShowLabel] = useState(true);
  return (
    <StepperComponent
      data={data}
      icon={icon}
      showStep={showStep}
      description={description}
      showLabel={showLabel}
      activeColor="blue"
    />
  );
};

export default Home;
