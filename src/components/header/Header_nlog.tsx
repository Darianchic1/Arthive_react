import Logo from "../Logo";
import Search from "../search/Search";
import Button from "../button/Button";

function Headern() {
  return (
    <div className="flex flex-row gap-16 items-center mb-10 bg-white py-5 px-10  rounded-b-4xl absolute top-0 left-0 w-[100%]">
        <Logo />
        <Search />
        <Button size="sm">Войти</Button>
    </div>
  )
}


export { Headern as default };