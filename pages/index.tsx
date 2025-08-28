import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to Hoffman Holdings</h1>
      <Link href="/SatelliteTech">
        <button className="ml-4 px-6 py-3 bg-[#c8b04e] text-black rounded-lg hover:scale-105 transition">
          Explore Satellite Tech
        </button>
      </Link>
    </main>
  );
}