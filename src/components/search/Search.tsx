import SearchSvg from "../../assets/search.svg"

function Search() {
  return (
    <input className="bg-app-base-200 rounded-4xl h-8 w-11/12 px-5 text-xs" type="text" placeholder="Найти в библиотеке">
    </input>
  );
}
<img src={SearchSvg} alt="Your SVG" className="flex flex-row gap-2"/>

export { Search as default };