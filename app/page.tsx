import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full font-sans"
      style={{ backgroundColor: "#D7C4B7" }}
    >
      <main className="w-full">
        <Image
          src="/lv.svg"
          alt="LV"
          width={1920}
          height={400}
          className="block w-full h-auto"
          unoptimized
        />
      </main>
    </div>
  );
}
