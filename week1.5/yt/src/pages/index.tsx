import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { VideoGrid } from "@/components/VideoGrid";

export default function Home() {
  return (
    <div className={inter.className}>
      <main className="bg-slate-700 h-screen">
        <h2 className="text-slate-100 font-xl">yt-clone</h2>
        <VideoGrid />
      </main>
    </div>
  );
}
