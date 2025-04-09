"use client";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
const Modal = ({
  open = false,
  title = "Form",
  description = "",
  size = "md",
  placement = "top-center",
  autoClose = false,
  dismissable = true,
  backdropClass,
  defaultClass,
  outsideClose = false,
  dialogClass,
  children,
  ...props
}) => {
  const backdropClasses = "fixed inset-0 z-50 bg-gray-100 bg-opacity-50";
  const dialogClasses =
    "fixed top-0 start-0 end-0 md:inset-0 h-full z-50 w-full flex p-8 flex overflow-y-auto scrollbar-none";
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl",
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const hide = (e) => {
    e.preventDefault();
    props.onClose();
  };

  const handleKeys = (e) => {
    if (e.key === "Escape" && dismissable) {
      hide(e);
    }
  };
  const onAutoClose = (e) => {
    const target = e.target;
    if (autoClose && target?.tagName === "BUTTON") hide(e); // close on any button click
  };
  const onOutsideClose = (e) => {
    if (outsideClose && e.target === e.currentTarget) {
      hide(e);
    }
  };

  const placementClasses = {
    "top-left": "justify-start items-start",
    "top-center": "justify-center items-start",
    "top-right": "justify-end items-start",
    "center-left": "justify-start items-center",
    center: "justify-center items-center",
    "center-right": "justify-end items-center",
    "bottom-left": "justify-start items-end",
    "bottom-center": "justify-center items-end",
    "bottom-right": "justify-end items-end",
  };

  if (!open) return null;

  const childrenArray = React.Children.toArray(children);
  const header =
    childrenArray.find((child) => child.type === Modal.Header) || null;
  const body = childrenArray.find((child) => child.type === Modal.Body) || null;
  const footer =
    childrenArray.find((child) => child.type === Modal.Footer) || null;
    console.log(childrenArray);
    
  return (
    <>
      <div className={twMerge(backdropClasses, backdropClass)} />
      <div
        onKeyDown={handleKeys}
        onClick={onOutsideClose}
        className={twMerge(
          dialogClass,
          placementClasses[placement],
          dialogClasses
        )}
        tabIndex="-1"
        aria-modal="true"
        role="dialog"
      >
        <div className={`flex relative ${sizes[size]} w-full max-h-full`}>
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            {(header || title) && (
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                {header ? (
                  header
                ) : (
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                )}
                {dismissable && (
                  <button
                    type="button"
                    onClick={hide}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="crud-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                )}
              </div>
            )}
            {body && <div className="p-4 md:p-5 space-y-4">{children}</div>}
            {footer}
          </div>
        </div>
      </div>
    </>
  );
};

Modal.Header = ({ children }) => children;

Modal.Body = ({ children }) => children;

Modal.Footer = function ModalFooter({ children }) {
  return (
    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
      {children}
    </div>
  );
};

export default Modal;
