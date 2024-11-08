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
    <div className='flex justify-start items-center w-full h-screen flex-col  gap-3'>
      <h2 className='text-5xl font-bold'>Demo UI</h2>
      <Button
        className='border bg-black text-white text-2xl rounded-md p-4'
        onClick={handleToggleModal}
      >
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
