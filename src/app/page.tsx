import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-red-300">
      <h1 className="text-xl md:text-2xl font-bold text-gray-700 mb-4 text-center">
        28/10/2024
      </h1>

      <div className="grid grid-cols-2 gap-2 mb-6 w-full max-w-sm md:max-w-md">
        <Image
          src="/2.jpeg"
          alt="Foto 2"
          className="rounded-lg"
          width={300}
          height={300}
        />
        <Image
          src="/3.jpeg"
          alt="Foto 3"
          className="rounded-lg"
          width={300}
          height={300}
        />
        <Image
          src="/4.jpeg"
          alt="Foto 4"
          className="rounded-lg"
          width={300}
          height={300}
        />
        <Image
          src="/5.jpeg"
          alt="Foto 5"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>

      <p className="text-gray-600 text-center mb-4 font-bold">
        Pel nostre primer cumple, el primer de tots. T&apos;estimo molt Mariona.
      </p>

      <Link href="/ticket">
        <Image src="/sobre1.gif" alt="Sobre animado" width={200} height={150} />
      </Link>
    </div>
  );
}
