import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [obj, setobj] = useState({})
    console.log(obj);
    const [pass, setpass] = useState(false)

    const navigate = useNavigate()

    const SetInputs =(e)=> {
        setobj({...obj, [e.target.name]: e.target.value})
    }
  
    const SignUp = async () => {
       
        if (obj.name !== "" && obj.email !== "") {
            const response = await axios.post("http://localhost:4000/signup", obj)
            if (response.data.success) {
                toast.success(response.data.message)
                setTimeout(() => {
                    navigate('/signin/admin/for-dashboard')
                }, 500);
            }
            else {
                toast.error(response.data.message)
            }
        }
        else {
            toast.error("Please enter the fields!")
        }

    }
    const OffEye = () => {
        setpass(true)
    }

    const OpenEye = () => {
        setpass(false)
    }

    console.log(pass);
    return (
        <>
            <div><Toaster /></div>

            <div className='h-[100vh] w-full bg-[rgb(36,48,63)] flex flex-col justify-center items-center gap-3'>

                <div className='signup-child sm:w-max w-[90%] sm:px-16 py-7 bg-[rgb(226,232,240)] flex flex-col items-center gap-3'>
                    <h1 className='text-3xl font-semibold'>Sign up. It's free.</h1>
                    <div className='flex flex-col'>
                        <label className='font-semibold' htmlFor="name">Username:</label>
                        <input onChange={SetInputs} name='name' value={obj?.name} className='h-10 sm:w-[350px] w-[280px] border mt-1 focus:outline-none pl-2 rounded-sm' placeholder='Enter name...' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-semibold' htmlFor="name">Email:</label>
                        <input onChange={SetInputs} name='email' value={obj?.email} className='h-10 sm:w-[350px] w-[280px] border mt-1 focus:outline-none pl-2 rounded-sm' placeholder='Enter email...' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-semibold' htmlFor="name">Password:</label>
                        <div className='h-max w-max relative'>
                            <input onChange={SetInputs} name='password' value={obj?.password} className='h-10 sm:w-[350px] w-[280px] border mt-1 focus:outline-none pl-2 rounded-sm' placeholder='Enter password...' type={pass ? "text" : "password"} />
                            <IoEyeOffOutline onClick={OffEye} className={`${pass ? "hidden" : "block"} absolute top-4 right-3 text-black`} />
                            <IoEyeOutline onClick={OpenEye} className={`${!pass ? "hidden" : "block"} absolute top-4 right-3  text-black`} />
                        </div>
                    </div>
                    <button onClick={SignUp} className='text-white bg-[rgb(60,80,224)] hover:bg-[rgb(36,48,63)] px-20 py-2 mt-2 font-medium'>SignUp</button>
                    <p>Already have an account? <Link to={"/signin/admin/for-dashboard"}><span className=' text-[rgb(35,25,0)] hover:underline font-semibold cursor-pointer'>Log in</span></Link> </p>
                </div>
            </div></>
    )
}

export default SignUp