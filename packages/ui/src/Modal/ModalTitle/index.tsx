import React from "react";

interface ModalTitleProps extends React.PropsWithChildren {}
export default function ModalTitle({ children }: ModalTitleProps) {
  return <div className='modal__title'>{children}</div>;
}
