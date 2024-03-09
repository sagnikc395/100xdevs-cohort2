import { SearchBar } from "./SearchBar";

export function AppBar() {
  return (
    <div className="flex justify-between pt-1 p-3 text-xl">
      <div className="text-md inline-flex items-center pb-2">Youtube</div>
      <div>
        <SearchBar />
      </div>
      <div>SignIn</div>
    </div>
  );
}
