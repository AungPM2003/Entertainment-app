import React from 'react'
import { MdMovie } from "react-icons/md";
const cssType = {
    'ordinary':"mt-2",
    "trending":"ps-3 md:pt-6 md:ps-6"
}
export default function MovieDescription({type}) {
  return (
     <div className={`${type === "ordinary" ? '':'absolute bottom-2'} w-full`}>
        <ul className={"flex items-center text-xs md:text-md lg:text-lg list-disc gap-5 " + cssType[type]}>
            <li className="list-none">2019</li>
            <li>
            <div className="flex items-center gap-2">
                <MdMovie/>
                <span>Movie</span>
            </div>
            </li>
            <li>PG</li>
        </ul>
        <h2 className={"font-bold text-base" + cssType[type]}>Movie Name</h2>
    </div>
  )
}
