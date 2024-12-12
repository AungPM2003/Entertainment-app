"use client";
import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/navigation";
import Button from "../_components/Button";
import { useForm } from "react-hook-form";
export default function SignupPage(){
    const {
        register,
        formState:{errors},
        handleSubmit
    } = useForm();

    async function onSignup(data:object){
        try{
            const response = await axios.post('/api/users/signup',data)
        }catch(error){
            console.log(error)
        }
        
    };

    return(
        <div className="flex flex-col min-h-screen items-center justify-center">
            <div>
                <span className="text-primary-red">X</span>
            </div>

            <div className="bg-primary-semiDarkBlue w-[30%] p-8 rounded-lg flex flex-col gap-10">
                <h2>Sign Up</h2>
                <form action="/login"  className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSignup)}>
                    <div className={`flex ${errors.email ? "border-primary-red": "border-primary-greyishBlue"} border-b-2 `}>
                        <input className="bg-transparent px-4 pb-4 grow focus:outline-none" type="email"  placeholder="Email Address" {...register("email",{
                        required:{
                            value:true,
                            message:"Can't be empty"
                        }
                        })}/>
                        {errors.email && <p className="text-primary-red">{errors.email?.message}</p>}
                    </div>
                    <div className={`flex ${errors.password ? "border-primary-red": "border-primary-greyishBlue"} border-b-2 `}>
                        <input className="bg-transparent px-4 pb-4 grow focus:outline-none" type="password"  placeholder="Password" {...register("password",{
                        required:{
                            value:true,
                            message:"Can't be empty"
                        }
                        })}/>
                        {errors.password && <p className="text-primary-red">{errors.password?.message}</p>}
                    </div>
                    <div className={`flex ${errors.repeatPassword ? "border-primary-red": "border-primary-greyishBlue"} border-b-2 `}>
                        <input className="bg-transparent px-4 pb-4 grow focus:outline-none" type="password"  placeholder="Repeat Password" {...register("repeatPassword",{
                        required:{
                            value:true,
                            message:"Can't be empty"
                        }
                        })}/>
                        {errors.repeatPassword && <p className="text-primary-red">{errors.repeatPassword?.message}</p>}
                    </div>
                    
                    
                    <Button text="Create an account"/>
                    <p className="text-center">Already have an account? <Link href={"/"}><span className="text-primary-red">Login</span></Link></p>
                </form>                  
              
            </div>
        </div>
    )
}

