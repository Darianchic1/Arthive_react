import Logo from "../Logo";
import Search from "../search/Search";
import WriteSVG from "../../assets/write";
import ExitSVG from "../../assets/exit";
import Avatar from "../../assets/avatar.png"

function Headerlg() {
  return (
    <div
      className="flex flex-row gap-16 items-center mb-10 bg-white py-5 px-10  rounded-b-4xl absolute top-0 left-0 w-[100%]">
      <Logo />
      <Search />
      <div className="flex flex-row gap-2 items-center">
        <WriteSVG />
        <img src={Avatar} className="h-6 cursor-pointer"/>
        <ExitSVG />
      </div>
    </div>
  );
}

export { Headerlg as default };
