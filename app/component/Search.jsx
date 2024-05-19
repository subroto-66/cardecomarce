
import { FaSearch } from "react-icons/fa";
import { Input } from "rizzui";

export default function Search() {
  return (
    <div className="w-full relative">
      <Input
        inputClassName="h-11 relative"
        placeholder="Search Brands , Category & Games"
      />
      <FaSearch className="absolute right-4 bottom-4" />
    </div>
  );
}
