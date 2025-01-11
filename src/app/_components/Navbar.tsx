'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { MdMovie,MdWindow, MdOutlineTv} from "react-icons/md";
import { IoFilm } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import Link from 'next/link';
import ProfileIcon from './ProfileIcon';

const navIcons = [
    {
        icon:<MdWindow />,
        link:"/home"
    },{
        icon:<MdOutlineTv/>,
        link:"/movies"
    },{
        icon:<IoFilm/>,
        link:"/tvSeries"
    },{
        icon:<FaBookmark/>,
        link:"/bookmarks"
    }
]
export default function Navbar() {
    const pathname = usePathname()
    if (pathname !== "/login" && pathname !== "/signup"){
        return (
            <div className='lg:min-h-screen lg:flex lg:py-5 md:p-3 justify-center'>
                <div className='bg-primary-semiDarkBlue flex lg:flex-col content-between md:rounded-lg'>
                    <div className='lg:m-auto lg:p-5 my-auto ps-2'>
                        <MdMovie className='text-3xl text-primary-red'/>
                    </div>
                    <ul className='grow m-auto p-5 flex lg:flex-col lg:justify-start justify-center lg:gap-y-8 gap-x-8'>
                        {navIcons.map((navIcon) => (
                            <li key={navIcon.link} className={`text-xl  hover:text-primary-red ${pathname === navIcon.link ? "text-white": "text-gray-500"}`}>
                                <Link href={navIcon.link}>{navIcon.icon}</Link>
                            </li>
                        ))}
                    </ul>
                    <ProfileIcon />
                </div>
            </div>
        )
    }
}
