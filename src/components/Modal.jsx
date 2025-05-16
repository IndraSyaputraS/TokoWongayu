"use client";
import { X } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const Modal = ({
  open = false,
  title = "",
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
  background = "wh",
  ...props
}) => {
  const backdropClasses = "fixed inset-0 z-50 bg-gray-900/50";
  const dialogClasses =
    "fixed top-0 start-0 end-0 md:inset-0 h-full z-50 w-full flex p-8 overflow-y-auto";

  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl",
  };

  const backgrounds = {
    wh: "bg-white",
    gy: "bg-gray-50",
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const hide = (e) => {
    e.preventDefault();
    props.onClose?.();
  };

  const handleKeys = (e) => {
    if (e.key === "Escape" && dismissable) {
      hide(e);
    }
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
        {/* <div
          className={`flex justify-center relative ${sizes[size]} w-auto h-full max-h-full pt-10 md:h-auto`}
        >
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-800 w-full"> */}
        <div className={`flex relative ${sizes[size]} w-full`}>
          <div className={`${backgrounds[background]} rounded-lg shadow dark:bg-gray-800 w-full flex flex-col mx-auto h-auto max-h-max`}>
            {(header || title) && (
              <div
                className={twMerge(
                  defaultClass,
                  "flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200"
                )}
              >
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
                    <X size={20} weight="light" />
                    <span className="sr-only">Close modal</span>
                  </button>
                )}
              </div>
            )}

            {body && <div className="p-4 md:p-5">{body}</div>}

            {footer}
          </div>
        </div>
      </div>
    </>
  );
};

// Komponen sub Modal
Modal.Header = ({ children }) => children;
Modal.Body = ({ children }) => children;
Modal.Footer = ({ children }) => (
  <div className="flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
    {children}
  </div>
);

export default Modal;
