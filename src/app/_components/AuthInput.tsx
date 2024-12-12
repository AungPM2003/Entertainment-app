import React from 'react'

export default function AuthInput({type,placeholder,name,register}) {
  return (
    <input className="bg-transparent px-4 pb-4 border-b-2 border-primary-greyishBlue" type={type}  placeholder={placeholder} {...register(name,{
      required:{
        value:true,
        message:"Can't be empty"
      }
    })}/>
  )
}
