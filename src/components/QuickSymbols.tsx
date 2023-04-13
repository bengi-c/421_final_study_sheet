// Quick symbols are visually disntinct icons showing different content types at a glance.

import { FaCalculator, FaInfoCircle, FaQuestionCircle } from "react-icons/fa";
import React from "react";
import styled from "styled-components";

const getColor = (i: number) => {
  // get a random but visually distinct color
  const colors = [
    "#00ff00",
    "#008cff",
    "#8000ff",
    "#ff0000",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#ff8000",
    "#ff0080",
    "#0080ff",
    "#00ff80",
    "#80ff00",
  ];
  if (i >= colors.length) {
    console.warn("Too many colors requested. Using repeated colour.");
  }
  return colors[i % colors.length];
};

export const HowTo = () => {
  return <FaQuestionCircle color={getColor(0)}></FaQuestionCircle>;
};

export const Info = () => {
  return <FaInfoCircle color={getColor(1)}></FaInfoCircle>;
};

export const Example = () => {
  return <FaCalculator color={getColor(2)}></FaCalculator>;
};

// take color from props
const GradientHeader = styled("h3")<{ inputColor?: string }>`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    ${(props) => props.inputColor || "rgba(255,0,0,1)"} 250%
  );
`;

export const InfoH3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <GradientHeader inputColor={getColor(1)}>
      <Info /> {children}
    </GradientHeader>
  );
};

export const HowToH3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <GradientHeader inputColor={getColor(0)}>
      <HowTo /> {children}
    </GradientHeader>
  );
};

export const ExampleH3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <GradientHeader inputColor={getColor(2)}>
      <Example /> {children}
    </GradientHeader>
  );
};
