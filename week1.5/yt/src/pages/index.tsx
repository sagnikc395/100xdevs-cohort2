import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";

export default function Home() {
  return (
    <div className={inter.className}>
      <main className="bg-slate-700 h-screen text-slate-200" >
        <AppBar />
        <VideoGrid />
      </main>
    </div>
  );
}
