"use client";

import Image from "next/image";

const Error = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <Image 
      src="/assets/404.png"
      alt="error"
      width={600}
      height={600}
      />
    </div>
  );
};

export default Error;
