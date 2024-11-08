import React from "react";

interface ModalTitleProps extends React.PropsWithChildren {}
export default function ModalTitle({ children }: ModalTitleProps) {
  return <h3 className='modal__title'>{children}</h3>;
}
