import React from "react";
import { CompactCard, FalseCard, LeftRight, TrueCard } from "./Layout";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

interface KeyValueProps {
  value: React.ReactNode;
  cardType?: "fact" | "falsehood" | "default";
}

export const KeyValue: React.FC<React.PropsWithChildren<KeyValueProps>> = ({
  value,
  children,
  cardType = "default",
}) => {
  const CardComponent =
    cardType === "fact"
      ? TrueCard
      : cardType === "falsehood"
      ? FalseCard
      : CompactCard;
  return (
    <CardComponent>
      <LeftRight>
        <span style={{ fontSize: "85%" }}>{children}</span>
        <code>{value}</code>
      </LeftRight>
    </CardComponent>
  );
};

export const Facts = () => {
  return <FaCheckCircle style={{ color: "green" }} />;
};

export const Sach = Facts;

export const Falsehood = () => {
  return <IoMdCloseCircle style={{ color: "red" }} />;
};

export const NoKey: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  // @ts-ignore
  return (
    <KeyValue cardType={"falsehood"} value={<Falsehood />}>
      {" "}
      {children}{" "}
    </KeyValue>
  );
};

export const YesKey: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  // @ts-ignore
  return (
    <KeyValue cardType={"fact"} value={<Facts />}>
      {" "}
      {children}{" "}
    </KeyValue>
  );
};
