'use client'
import React from 'react'
import Image from "next/image";
import movieImage from '../../public/images/earths-untouched/large.jpg'
import { FaRegBookmark } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";

export default function ImageCard() {
  return (
    <div className="group max-w-[470px] max-h-[230px] min-w-[240px] min-h-[140px] aspect-video relative">
        <Image src={movieImage} alt="movie image" fill className="object-cover rounded-md transition-all duration-300 ease-linear group-hover:brightness-75 " placeholder="blur"/>
        <div className="z-50 absolute right-6 top-4 bg-slate-700 p-2 aspect-square rounded-full hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in">
          <FaRegBookmark/>
        </div>

        <button className='bg-opacity-50 bg-white absolute opacity-0 transition-all duration-300 ease-in  group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ps-2 pe-4 py-2 flex items-center gap-4 cursor-pointer'>
            <FaCirclePlay className='text-3xl'/> 
            <span className='text-white font-bold'>Play</span>
        </button>

        <div className="absolute w-full bottom-0">
          <ul className="flex items-center marker:text-red-300 list-disc gap-5 pt-6 ps-6">
            <li className="list-none">2019</li>
            <li>
              <div className="flex items-center gap-2">
                <MdMovie/>
                <span>Movie</span>
              </div>
            </li>
            <li>PG</li>
          </ul>
          <h2 className="pb-6 ps-6 text-lg font-bold">Movie Name</h2>
        </div>
      </div>
  )
}
