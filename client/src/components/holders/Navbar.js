import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-200 p-6 mb-6">
            <Link to='/'>
                <div className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
                    <span className="font-semibold text-xl tracking-tight">Gallery</span>
                </div>
            </Link>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to='/about'>
                        <div className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 cursor-pointer">
                            About
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
