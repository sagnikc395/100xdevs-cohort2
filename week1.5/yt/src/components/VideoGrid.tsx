import thumbnail from "../../public/photo2.png";
import profilephoto from "../../public/profilepic.png";
import { VideoCardComponent } from "./VideoCard";
const VIDEOS = [
  {
    title: "How to learn coding in 30 days | 30 days plan | Code with me",
    profilepic: profilephoto,
    thumbnail: thumbnail,
    author: "sagnik",
    views: "100k",
    timestamp: "2 days to go",
  },
  {
    title: "How to learn coding2 in 30 days | 30 days plan | Code with me",
    profilepic: profilephoto,
    thumbnail: thumbnail,
    author: "sagnik",
    views: "100k",
    timestamp: "2 days to go",
  },
  {
    title: "How to learn coding3 in 30 days | 30 days plan | Code with me",
    profilepic: profilephoto,
    thumbnail: thumbnail,
    author: "sagnik",
    views: "100k",
    timestamp: "2 days to go",
  },
];

export function VideoGrid() {
  return (
    <div className="grid grid-4">
      {VIDEOS.map((video) => {
        return (
          <div>
            <VideoCardComponent
              thumbnail={video.thumbnail}
              profilepic={video.profilepic}
              title={video.title}
              author={video.author}
              views={video.views}
              timestamp={video.timestamp}
            />
          </div>
        );
      })}
    </div>
  );
}
