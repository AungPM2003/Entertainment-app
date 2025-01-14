'use client'
import React from 'react'
import Image from "next/image";
import movieImage from '../../public/images/earths-untouched/large.jpg'
import { FaRegBookmark } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";

export default function ImageCard() {
  return (
    <div className=" md:max-w-[470px] md:max-h-[230px] max-w-[240px] min-h-[140px] group aspect-video relative">
        <Image src={movieImage} alt="movie image" fill className="w-full object-cover rounded-md transition-all duration-300 ease-linear group-hover:brightness-75" placeholder="blur"/>
        <div className="z-50 absolute md:right-6 md:top-4 right-3 top-2 bg-slate-700 p-2 aspect-square rounded-full hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in">
          <FaRegBookmark/>
        </div>
        <button className='bg-opacity-50 bg-white absolute opacity-0 transition-all duration-300 ease-in  group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full md:ps-2 md:pe-4 md:py-2 py-1 px-2  flex items-center gap-4 cursor-pointer'>
            <FaCirclePlay className='md:text-3xl'/> 
            <span className='text-white font-bold text-sm md:text-lg'>Play</span>
        </button>

        <div className="absolute w-full bottom-0 ">
          <ul className="flex items-center text-xs  marker:text-red-300 list-disc gap-5 ps-3 md:pt-6 md:ps-6">
            <li className="list-none">2019</li>
            <li>
              <div className="flex items-center gap-2">
                <MdMovie/>
                <span>Movie</span>
              </div>
            </li>
            <li>PG</li>
          </ul>
          <h2 className="font-bold text-base ps-3 md:pb-6 md:ps-6">Movie Name</h2>
        </div>
      </div>
  )
}
