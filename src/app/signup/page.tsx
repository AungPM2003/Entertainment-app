"use client";
import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/navigation";
import Button from "../_components/Button";
import { FormProvider, useForm } from "react-hook-form";
import AuthInput from "../_components/AuthInput";
export default function SignupPage(){
    const methods = useForm()

    async function onSignup(data:object){
        console.log(data)
        try{
            const response = await axios.post('/api/users/signup',data)
        }catch(error){
            console.log(error.message)
        }
        
    };

    return(
        <div className="border-primary-red border-2 flex flex-col min-h-screen items-center justify-center">
            <div className="mx-auto">
                <span className="text-primary-red">X</span>
            </div>

            <div className="bg-primary-semiDarkBlue p-8 rounded-lg flex flex-col gap-10 border-primary-red border-2 md:w-[30%]">
                <h2>Sign Up</h2>
                
                <FormProvider {...methods}>
                    <form className="flex flex-col gap-y-6" onSubmit={methods.handleSubmit(onSignup)}>
                        <AuthInput type={"email"} placeholder={"Email"} name={"email"} />                  
                        <AuthInput type={"password"} placeholder={"Password"}  name={"password"}/>
                        <AuthInput type={"password"} placeholder={"Repeat Password"} name={"repeatPassword"}/>
                        <Button text="Create an account"/>
                        <p className="text-center">Already have an account? <Link href={"/"}><span className="text-primary-red">Login</span></Link></p>
                    </form>                  
                </FormProvider>
              
            </div>
        </div>
    )
}