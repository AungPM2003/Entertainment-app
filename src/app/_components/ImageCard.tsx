'use client'
import React from 'react'
import Image from "next/image";
import movieImage from '../../public/images/earths-untouched/large.jpg'
import { FaRegBookmark } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import MovieDescription from './MovieDescription';

const cssType = {
  'trending':"md:max-w-[470px] md:max-h-[230px] max-w-[240px] min-h-[140px]",
  'ordinary':"min-[420px]:max-w-[280px] sm:max-h-[174px] max-w-[164px] min-h-[110px]"
}
export default function ImageCard({type}) {
  return (
  <>
  <div>
    <div className={cssType[type] + " group aspect-video relative"}>
          <Image src={movieImage} alt="movie image" fill className="w-full object-cover rounded-md transition-all duration-300 ease-linear group-hover:brightness-75" placeholder="blur"/>
          <div className="z-50 absolute md:right-6 md:top-4 right-3 top-2 bg-slate-700 p-2 aspect-square rounded-full hover:bg-white hover:text-black cursor-pointer transition-all duration-300 ease-in">
            <FaRegBookmark/>
          </div>
          <button className='bg-opacity-50 bg-white absolute opacity-0 transition-all duration-300 ease-in  group-hover:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full md:ps-2 md:pe-4 md:py-2 py-1 px-2  flex items-center gap-4 cursor-pointer'>
              <FaCirclePlay className='md:text-3xl'/> 
              <span className='text-white font-bold text-sm md:text-lg'>Play</span>
          </button>
        <MovieDescription type={type}/>
      </div>
      
      {
        type === "ordinary" && <MovieDescription type={type}/>
      }
  </div>
   

    
  </>
  )
}
