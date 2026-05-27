import { useState } from "react"
import { Menu, X } from "lucide-react";
function SideBar() {
    const [open, setToggle] = useState(false);
    return (
        <div className="flex">
            <button className={`top-5 fixed  z-50 transition-transform duration-700 linear ${open ? "ml-50 text-white" : "ml-10 text-black md:text-white"}`} onClick={() => setToggle(!open)}>
                {open ? <X size={30} /> : <Menu size={30} />}
            </button>
            {/* sidebar */}
            <div className={` transition-transform duration-300  fixed top-0 left-0 text-white bg-gray-900 h-400 ${open ? "translate-x-0 w-60 p-5" : "-translate-x-full md:translate-x-0 text-white"}`}>
                <h2>RECENT SEARCH</h2>

            </div>

        </div >
    )
}
export default SideBar;