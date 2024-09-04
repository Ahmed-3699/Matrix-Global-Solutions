import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const ForgetPassword = () => {
    
    const [obj, setobj] = useState({})
    console.log(obj, "objjjj");

    const SetInputs = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value })
    }


    const ForgetPassword = async () => {

        if (obj.email !== "") {
            const response = await axios.post("http://localhost:4000/forget-password", obj)
            console.log(response, "resssss");
            toast.success(response.data)
            setobj({})
        }
        else {
            toast.error("Please enter the fields!")
        }
    }
    return (
        <>
            <div><Toaster /></div>

            <div className='h-[100vh] w-full bg-[rgb(36,48,63)] flex flex-col justify-center items-center gap-3'>

                <div className='login-child bg-slate-200 sm:w-max w-[90%] sm:px-16 rounded-xl py-10 flex flex-col items-center gap-3'>
                <h1 className='text-3xl font-semibold'>Forget Password</h1>
                    <div className='flex flex-col mt-3'>
                        <label className='font-semibold' htmlFor="name">Email:</label>
                        <div className='h-max w-max relative'>
                            <input onChange={SetInputs} value={obj.email || ''} name='email' className='h-10 sm:w-[350px] w-[280px] border mt-1 focus:outline-none pl-2' placeholder='Enter email  ...' type={"email"} />
                        </div>
                    </div>
                    <div className='h-max w-max m-0 flex flex-col items-center'>
                        <button onClick={ForgetPassword} className='bg-[rgb(60,80,224)] hover:bg-[rgb(36,48,63)] text-white font-medium px-14 py-2 mt-2 rounded-full'>Forget password</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ForgetPassword