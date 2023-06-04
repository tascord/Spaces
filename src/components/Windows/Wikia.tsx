import { IconSearch } from "@tabler/icons-react";
import Button from "../Button";
import Window from "../Window";

export default function () {
    return (
        <Window header="Your Wikia">
            <div className="flex w-full px-2 border-2 border-black my-2 shadow-sm py-1">
                <input placeholder="Search" className="flex-1 focus-visible:outline-none" />
                <button className="rounded-full w-6 h-6">
                    <IconSearch />
                </button>
            </div>
            <div className="flex space-x-6">
                <nav className="w-[10rem] flex flex-col">
                    <h2 className="text-lg font-semibold border-2 border-black text-center bg-purple-200">Explore Tags</h2>
                    <hr />
                    <ul className="pl-4 font-semibold text-lg flex-1">
                        <li>Home</li>
                        <li>Explore</li>
                        <li>Following</li>
                    </ul>
                    <Button className="px-4 mt-2">
                        Add New Tag
                    </Button>
                </nav>
                <div className="min-w-[40rem] min-h-[20rem]">
                    <h2 className="text-lg font-semibold border-2 border-black px-4 pl-6 ml-[-1.65rem]">Continue Off</h2>
                    <ul>
                        <li>
                            <a href="#">History of Lorem, ipsum.</a>
                        </li>
                        <li>
                            <a href="#">History of Lorem, ipsum.</a>
                        </li>
                        <li>
                            <a href="#">History of Lorem, ipsum.</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Window>
    )
}