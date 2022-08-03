import { IoMailOutline } from "react-icons/io5";
import { BiBell } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
export const Navbar = () => {
  return (
    <div className="flex  w-full mb-3  justify-between">
      <h1>Dashboard</h1>
      <div className="flex items-center mt-0 h-7 bg-secondary rounded-lg text-gray">
        <div className=" px-2">
          <FiSearch />
        </div>
        <input type="search" placeholder="search" className=" bg-transparent" />
      </div>
      <div className="flex text-gray">
        <div></div>
        <div className="flex flex-row-reverse gap-2">
          <IoMailOutline />
          <BiBell />
        </div>
      </div>
    </div>
  );
};
