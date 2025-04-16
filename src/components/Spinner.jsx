"use client";
import { CircleNotch } from "@phosphor-icons/react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div role="status" className="flex flex-col items-center space-y-2">
        <CircleNotch
          size={48}
          color="#ffffff"
          weight="bold"
          className="animate-spin"
        />
        <span className="text-white text-lg font-semibold">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
