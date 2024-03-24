import ResizePage from "@/components/ResizePage";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen bg-white flex items-center justify-center">
        <div className="h-5/6 w-11/12 rounded-lg bg-black p-2 ">
          <ResizePage />
        </div>
      </div>
    </main>
  );
}
