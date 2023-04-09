import React from "react";
import { CompactCard, LeftRight } from "./Layout";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

interface KeyValueProps {
  value: React.ReactNode;
}

export const KeyValue: React.FC<React.PropsWithChildren<KeyValueProps>> = ({
  value,
  children,
}) => {
  return (
    <CompactCard>
      <LeftRight>
        <span>{children}</span>
        <code>{value}</code>
      </LeftRight>
    </CompactCard>
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
  return <KeyValue value={<Falsehood />}> {children} </KeyValue>;
};

export const YesKey: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  // @ts-ignore
  return <KeyValue value={<Facts />}> {children} </KeyValue>;
};
