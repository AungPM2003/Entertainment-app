"use client"
import Link from 'next/link'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Button from '../_components/Button'
import AuthInput from '../_components/AuthInput'

export default function LoginPage() {
  const methods = useForm()
  function onLogin(data:object){
    console.log(data)
  }
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
            <div className="mx-auto">
                <span className="text-primary-red">X</span>
            </div>

            <div className="bg-primary-semiDarkBlue p-8 rounded-lg flex flex-col gap-10 md:w-[40%] lg:w-[30%] text-xs md:text-base">
                <h2>Login</h2>
                
                <FormProvider {...methods}>
                    <form className="flex flex-col gap-y-6" onSubmit={methods.handleSubmit(onLogin)}>
                        <AuthInput type={"email"} placeholder={"Email Address"} name={"email"}/>
                        <AuthInput type={"password"} placeholder={"Password"} name={"password"}/>
                        <Button text="Create an account"/>
                        <p className="text-center">Don't have an account? <Link href={"/signup"}><span className="text-primary-red">Sign Up</span></Link></p>
                    </form>                  
                </FormProvider>
              
            </div>
        </div>
  )
}
