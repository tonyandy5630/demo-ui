"use client";
import "@/styles/main.css";
import React from "react";

/**
 * Modal
 * Display a modal with overlay
 * @param {open} open - control the state of the modal
 */
interface ModalProps
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose?: () => void;
}

export default function Modal({
  children,
  open,
  onClose,
  className,
  ...props
}: ModalProps) {
  const handleOverlayClick = () => {
    onClose && onClose();
  };
  return (
    <>
      {open && (
        <div className='modal__overlay' onClick={handleOverlayClick}>
          <div
            className={`modal ${className}`}
            onClick={(e) => e.stopPropagation()}
            {...props}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}