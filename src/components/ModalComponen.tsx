import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// export default Modal;
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-60"
        onClick={onClose}
      >
        {/* this Prevent close on child click */}
        <div onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    );
  };
  
  export default Modal;
