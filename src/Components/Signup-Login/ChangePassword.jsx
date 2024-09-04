import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import {useNavigate } from 'react-router-dom'

const ChangePassword = () => {
    const [obj, setobj] = useState({})
    console.log(obj, "objjjj");
    const [pass, setpass] = useState(false)
    const [newpass, setnewpass] = useState(false)
    const [token, settoken] = useState(localStorage.getItem("token") || "")
    const [message, setmessage] = useState("")

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

    const Off = () => {
        setnewpass(true)
    }

    const Open = () => {
        setnewpass(false)
    }

    const ChangePassword = async () => {

        if (obj.prevPass !== "" && obj.newPass !== "") {
            const response = await axios.post("http://localhost:4000/change-password", obj, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setmessage(response.data.message)
            console.log(response, "resssss");
            if (response.data.success) {
                toast.success(response.data.message)
                setobj({})
                setTimeout( ()=>{
                    navigate("/signin/admin/for-dashboard")
                },2000)
            }
            else {
                toast.error(response.data.message)
            }
        }
        else {
            toast.error("Please enter the fields!")
        }
    }

    useEffect(() => {
        setmessage("")
    }, [message])
    return (
        <>
        <div><Toaster /></div>
            <div className='h-[100vh] w-full bg-[rgb(36,48,63)] flex flex-col justify-center items-center gap-3'>

                <div className='login-child bg-[rgb(226,232,240)] sm:w-max w-[90%] sm:px-16 py-10 flex flex-col items-center gap-3 rounded-xl'>
                    <h1 className='text-3xl font-semibold'>Change Password</h1>
                    <div className='flex flex-col mt-2'>
                        <label className='font-semibold' htmlFor="name">Old password:</label>
                        <div className='h-max w-max relative'>
                            <input onChange={SetInputs} value={obj?.prevPass} name='prevPass' className='h-10 sm:w-[350px] w-[280px] border mt-1 focus:outline-none pl-2' placeholder='Old password...' type={pass ? "text" : "password"} />
                            <IoEyeOffOutline onClick={OffEye} className={`${pass ? "hidden" : "block"} absolute top-4 right-3 text-black`} />
                            <IoEyeOutline onClick={OpenEye} className={`${!pass ? "hidden" : "block"} absolute top-4 right-3  text-black`} />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-semibold' htmlFor="name">New password:</label>
                        <div className='h-max w-max relative'>
                            <input onChange={SetInputs} name='newPass' value={obj?.newPass} className='h-10 sm:w-[350px] w-[280px] border mt-1 focus:outline-none pl-2' placeholder='New password...' type={newpass ? "text" : "password"} />
                            <IoEyeOffOutline onClick={Off} className={`${newpass ? "hidden" : "block"} absolute top-4 right-3 text-black`} />
                            <IoEyeOutline onClick={Open} className={`${!newpass ? "hidden" : "block"} absolute top-4 right-3  text-black`} />
                        </div>
                    </div>
                    <div className='h-max w-max m-0 flex flex-col items-center'>
                        <button onClick={ChangePassword} className='bg-[rgb(60,80,224)] hover:bg-[rgb(36,48,63)] text-white font-medium px-14 py-2 mt-5 rounded-full'>Change password</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ChangePassword