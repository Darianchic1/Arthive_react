import Logo from "../Logo";
import TgSVG from "../../assets/telegram";
import VkSVG from "../../assets/vk";
import YtSVG from "../../assets/youtube";
import DsSVG from "../../assets/discord";

function Footer() {
  return (
    <div
      className="flex flex-row justify-between items-center mx-auto bg-white py-3 px-10  rounded-4xl w-[80%]">
      <Logo />
      <div className="flex flex-row gap-2 items-center">
        <VkSVG />
        <DsSVG />
        <TgSVG />
        <YtSVG />
      </div>
    </div>
  );
}

export { Footer as default };