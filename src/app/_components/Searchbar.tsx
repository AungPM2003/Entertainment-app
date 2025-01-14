import React from 'react'
import { CiSearch } from "react-icons/ci";
export default function Searchbar() {
  return (
    <div className= 'flex pt-5 pb-2 px-5 gap-6 justify-center'>
        <CiSearch className='text-3xl'/>
        <input type='text' className='bg-transparent grow caret-primary-red outline-none focus:border-b border-primary-greyishBlue pb-2' placeholder='Search for movies or TV series'/>
        <hr/>
    </div>
  )
}
