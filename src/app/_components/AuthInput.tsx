import React from 'react'
import { useForm, useFormContext } from 'react-hook-form'

export default function AuthInput({type,placeholder,name}) { 
  const {register,formState:{errors}} = useFormContext()
  return (
    <div className={`flex ${errors[name] ? "border-primary-red": "border-primary-greyishBlue"} border-b-2 `}>
      <input className="bg-transparent px-4 pb-4 max-w-[70%] focus:outline-none" type={type}  placeholder={placeholder} {...register(name,{
            required:{
                value:true,
                message:"Can't be empty"
            }
      })}/>
      {errors[name] && <p className="text-primary-red text-sm grow  text-right">{errors[name]?.message}</p>}
    </div>
  )
}
