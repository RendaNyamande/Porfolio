import React from "react";
import Image from "next/image";

const Success = () => {
  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
      <div className="p-4">
        <h2 className="py-2 text-center">You've made the right choice <span className="text-[#458588]">:)</span></h2>
        <div class="grid h-screen place-items-center">
          <Image
            className="rounded-xl hover:scale-105 ease-in duration-300"
            src="/assets/success2.gif"
            width={560}
            height={560}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Success;
