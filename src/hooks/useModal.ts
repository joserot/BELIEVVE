import { useState } from "react";

const useModal = (
  initialValue: boolean = false
): [boolean, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  const openModal = (): void => setIsOpen(true);

  const closeModal = (): void => setIsOpen(false);

  return [isOpen, openModal, closeModal];
};

export default useModal;
