import React from 'react'
import { FaFirefoxBrowser } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="h-[60px] bg-white my-4 rounded-lg flex justify-center items-center gap-2 text-xl font-medium">
                <FaFirefoxBrowser />
                <h1>CONTACT APP KPS</h1>
        </div>
    )
}

export default Navbar
