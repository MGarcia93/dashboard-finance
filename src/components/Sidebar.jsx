import { GrHomeRounded } from "react-icons/gr";
import { TbBriefcase } from "react-icons/tb";
import { MdOutlineInsertChart } from "react-icons/md";
import { TbScan } from "react-icons/tb";
export default function Sidebar() {
  return (
    <div className="w-10 text-gray h-full flex flex-col justify-center gap-5">
      <GrHomeRounded />
      <TbBriefcase />
      <MdOutlineInsertChart />
      <TbScan />
    </div>
  );
}
