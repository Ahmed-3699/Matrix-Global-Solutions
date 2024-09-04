import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [obj, setobj] = useState({})
    const [pass, setpass] = useState(false)

    const navigate = useNavigate()

    const SetInputs = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value })
    }

    const OffEye = () => {
        setpass(true)
    }

    const OpenEye = () => {
        setpass(false)
    }

    const LogIn = async () => {

        if (obj.email !== "" && obj.password !== "") {
            const response = await axios.post("http://localhost:4000/login", obj)
            console.log(response, "resssss");

            if (response.data.success) {
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.response))
                toast.success(response.data.message)
                // setmsg(response.data.message)
                setTimeout(() => {
                    navigate('/admin/dashboard/001')
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

    return (
        <>
            <div><Toaster /></div>

            <div className='h-[100vh] w-full bg-[rgb(36,48,63)] flex flex-col justify-center items-center gap-3'>

                <div className='login-child sm:w-max w-[90%] bg-slate-200 rounded-md sm:px-16 py-10 flex flex-col items-center gap-3'>
                    <h1 className='text-3xl font-semibold'>Sign in</h1>
                    <div className='flex flex-col'>
                        <label className='font-semibold' htmlFor="name">Email:</label>
                        <input onChange={SetInputs} value={obj?.email} name='email' className='h-10 sm:w-[350px] w-[280px] border mt-1 focus:outline-none pl-2' placeholder='Enter email...' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-semibold' htmlFor="name">Password:</label>
                        <div className='h-max w-max relative'>
                            <input onChange={SetInputs} name='password' value={obj?.password} className='h-10 sm:w-[350px] w-[280px] border mt-1 focus:outline-none pl-2' placeholder='Enter password...' type={pass ? "text" : "password"} />
                            <IoEyeOffOutline onClick={OffEye} className={`${pass ? "hidden" : "block"} absolute top-4 right-3 text-black`} />
                            <IoEyeOutline onClick={OpenEye} className={`${!pass ? "hidden" : "block"} absolute top-4 right-3  text-black`} />
                        </div>
                        <Link to={"/changepassword"}>
                            <p className='text-[14px] mt-2 cursor-pointer text-[rgb(35,25,0)] font-medium'>Change Password?</p>
                        </Link>
                    </div>
                    <div className='h-max w-max m-0 flex flex-col items-center'>
                        <button onClick={LogIn} className='logbtn hover:bg-[rgb(36,48,63)] bg-[rgb(60,80,224)] rounded-full text-white sm:px-[155px] px-[110px] py-2 mt-2 font-medium'>Login</button>
                        <div className='h-max w-max flex justify-end items-center mt-3 border-2'>
                            <Link to={"/forgetpassword"}>
                                <p className='text-[13px] cursor-pointer text-[rgb(35,25,0)] hover:text-[rgba(35,25,0,0.77)] font-semibold underline'>Forget password?</p>
                            </Link>
                        </div>


                    </div>
                </div>
            </div></>
    )
}

export default SignIn