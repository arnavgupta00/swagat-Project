import Notes from "@/components/notes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-between p-16 w-screen">
      <h1 className="text-6xl font-bold">Notes</h1>
      <Notes />
    </main>
  );
}
