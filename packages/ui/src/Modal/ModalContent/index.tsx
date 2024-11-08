import React from "react";
interface ModalContentProps extends React.PropsWithChildren {}
export default function ModalContent({ children }: ModalContentProps) {
  return <div className='modal__content'>{children}</div>;
}
