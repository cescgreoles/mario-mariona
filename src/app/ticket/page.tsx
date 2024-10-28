import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('./portAventurabg.avif')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="flex flex-col items-center justify-center min-h-screen relative z-10 text-center px-4">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          PORT AVENTURA WORLD
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
          VAL PER 2 ENTRADES A PORT AVENTURA WORLD + 2 TICKETS EXPRESS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-48">
            <Image
              src="/entrada.jpg"
              alt="Entrada 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-48">
            <Image
              src="/entrada.jpg"
              alt="Entrada 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
