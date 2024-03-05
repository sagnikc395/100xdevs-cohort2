import { StaticImageData } from "next/image";
import Image from "next/image";

type VideoCardProps = {
  thumbnail: StaticImageData;
  profilepic: StaticImageData;
  title: string;
  author: string;
  views: string;
  timestamp: string;
};

export function VideoCardComponent(props: VideoCardProps) {
  return (
    <div>
      <Image src={props.thumbnail} className="rounded-xl" alt=""/>
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Image className="rounded-2xl w-20 h-20 p-2" src={props.profilepic} alt={""} />
        </div>
        <div className="col-span-11 pt-5">
          <div className="pl-5 text-slate-100">{props.title}</div>
          <div className="pl-5 text-base text-slate-100">{props.author}</div>
        </div>
        <div className="col-span-11  text-slate-100 text-base">
          {props.views} | {props.timestamp}
        </div>
      </div>
    </div>
  );
}
