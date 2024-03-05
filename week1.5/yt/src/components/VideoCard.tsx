export function VideoCardComponent() {
  return (
    <div>
      <img src="./photo2.png" className="rounded-xl"></img>
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <img
            className="rounded-2xl w-20 h-20 p-2"
            src="./profilepic.png"
          ></img>
        </div>
        <div className="col-span-11 pt-5">
          <div className="pl-5 text-slate-100">Nietzsche</div>
          <div className="pl-5 text-base text-slate-100">HorsesonYT</div>
        </div>
        <div className="col-span-11  text-slate-100 text-base">
          8 Mn | 5 Days Ago
        </div>
      </div>
    </div>
  );
}
