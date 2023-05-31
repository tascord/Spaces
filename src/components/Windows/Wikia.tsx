import Window from "../Window";

export default function () {
    return (
        <Window header="Your Wikia">
            <div className="flex w-full px-2 border border-neutral-500 rounded-lg my-2 shadow-sm py-1">
                <input placeholder="Search" className="flex-1 focus-visible:outline-none" />
                <button className="rounded-full w-6 h-6">Q</button>
            </div>
            <div className="flex space-x-6">
                <nav className="w-[10rem]">
                    <h2 className="text-lg font-semibold">Explore Tags</h2>
                    <hr />
                    <ul>
                        <li>Home</li>
                        <li>Explore</li>
                        <li>Following</li>
                    </ul>
                    <button className="border border-neutral-500 rounded-lg shadow-sm px-4 mt-2">
                        + Add New Tag
                    </button>
                </nav>
                <div className="min-w-[40rem] min-h-[20rem]">
                    <h2 className="text-lg font-semibold">Continue Off</h2>
                    <p className="text-neutral-400 -mt-2">You were last reading</p>
                    <ul className="mt-4">
                        <li>History of Lorem, ipsum.</li>
                        <li>History of Lorem, ipsum.</li>
                        <li>History of Lorem, ipsum.</li>
                    </ul>
                </div>
            </div>
        </Window>
    )
}