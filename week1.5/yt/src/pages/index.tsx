import { Inter } from "next/font/google";
import { VideoCardComponent } from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div className={inter.className}>
    <h2>yt-clone</h2>
    <VideoCardComponent />
  </div>;
}
