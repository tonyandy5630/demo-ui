import React from "react";
interface ModalContentProps extends React.PropsWithChildren {}
export default function ModalContent({ children }: ModalContentProps) {
  return <h4 className='modal__content'>{children}</h4>;
}
