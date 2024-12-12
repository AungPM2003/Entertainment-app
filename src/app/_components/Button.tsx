import React from 'react'

export default function Button({text}) {
  return (
    <button className="bg-primary-red rounded-lg h-12 hover:bg-white hover:text-black" >{text}</button>
  )
}
