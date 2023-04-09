import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

// TODO: migrate out 'with-background' class to styled component

export const ModalBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalCard = styled(motion.div).attrs((props) => ({
  className: props.className + " with-background",
}))`
  class: with-background;
  padding: 0;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  width: 80%;
  max-width: 800px;
  height: 80%;
  max-height: 1800px;
  overflow: auto;
  z-index: 150;
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
    border-radius: 0;
    height: 100%;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 180;
  padding: 10px;
  border-radius: 10px 10px 0 0;
  drop-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 800px) {
    border-radius: 0;
  }

  & > h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const ModalBody = styled(motion.div)`
  padding: 0 20px 0 20px;
  height: 100%;
  overflow: hidden;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 180;
  position: sticky;
`;

const BaseXSvg = (onClick: () => void) => (
  <svg
    onClick={() => onClick()}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      stroke="rgba(200, 50, 45, 1)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="rgba(200, 50, 45, 1)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ModalCloseButtonBase = styled(BaseXSvg)`
  border: none;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  color: rgba(190, 100, 100, 1);
  &:hover {
    color: rgb(200, 10, 10);
  }
  &:active {
    color: #666666;
  }
`;

export const ModalCloseButton = ({ onClick }: { onClick: () => void }) => (
  <div
    style={{
      background: "rgba(130, 130, 130, 1)",
      borderRadius: "50%",
      width: 25,
      height: 25,
    }}
    onClick={onClick}
  >
    <ModalCloseButtonBase />
  </div>
);

interface BaseButtonProps {
  onClick: () => void;
}

export interface ModalProps {
  onClose: () => void;
  title: string;
  className?: string;
  children: React.ReactNode;
  extraHeaderButtons?: React.ReactNode;
  footerContent?: React.ReactNode;
  setHeader?: (bool: boolean | Boolean) => void;
  closeIcon?: React.JSXElementConstructor<BaseButtonProps>;
}

export const Modal: React.FC<ModalProps> = ({
  onClose: onClsBase,
  title,
  className,
  footerContent,
  children,
  extraHeaderButtons,
  setHeader,
  closeIcon: CloseIcon = ModalCloseButton,
}) => {
  const leftSideHeader = extraHeaderButtons ? (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        justifyContent: "space-between",
        alignContent: "flex-start",
        justifyItems: "flex-start",
        width: "50%",
      }}
    >
      <h1>{title}</h1>
      {extraHeaderButtons}
    </span>
  ) : (
    <h1>{title}</h1>
  );

  const isMobile = false;

  const onClose = () => {
    if (setHeader) {
      setHeader(true);
    }
    onClsBase();
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    if (isMobile && setHeader) {
      setHeader(false);
    }
  }, [isMobile, setHeader]);

  return (
    <ModalBackground
      onClick={onClose}
      initial={{ background: "rgba(0,0,0,0)" }}
      animate={{ background: "rgba(0,0,0,0.5)" }}
    >
      <ModalCard
        className={className}
        onClick={(e) => e.stopPropagation()}
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        exit={{ translateY: 100 }}
      >
        <ModalHeader>
          {leftSideHeader}
          <CloseIcon onClick={onClose} />
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {footerContent && <ModalFooter>{footerContent}</ModalFooter>}
      </ModalCard>
    </ModalBackground>
  );
};
