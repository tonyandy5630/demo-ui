"use client";

import { Button } from "@repo/ui/button";
import { ModalTitle, Modal, ModalContent } from "@repo/ui/modal";
import React from "react";

export default function LandingPage() {
  const [open, setOpen] = React.useState(false);
  const handleToggleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <Button className='text-red-300' onClick={handleToggleModal}>
        Toggle Modal 2
      </Button>
      <Modal open={open} onClose={handleToggleModal}>
        <ModalTitle>Hello From Modal</ModalTitle>
        <ModalContent>
          <p>Hello From Modal</p>
        </ModalContent>
      </Modal>
    </div>
  );
}
