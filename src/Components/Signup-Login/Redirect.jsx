import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Redirect = () => {
    const [obj, setobj] = useState({})
    console.log(obj, "objjjj");
    // const [token, settoken] = useState(localStorage.getItem("token") || "")
    const { token } = useParams()
    const navigate = useNavigate()
    console.log(token, "token");


    const SetInputs = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value })
    }

    const UpdatePassword = async () => {

        if (obj.pass !== "") {
            const response = await axios.post("http://localhost:4000/update-password", obj, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response, "resssss");

            if (response.data.success) {
                toast.success(response.data.message)
                setTimeout(() => {

                    navigate("/signin/admin/for-dashboard")

                }, 2000)
            }
            else {
                toast.error(response.data.success)
            }
        }
    }
    return (
        <>
            <div><Toaster /></div>

            <div className='h-[100vh] w-full bg-[rgb(36,48,63)] flex flex-col justify-center items-center gap-3'>

                <div className='login-child bg-[rgb(226,232,240)] rounded-lg sm:w-max w-[90%] sm:px-16 px-5 py-10 flex flex-col items-center gap-3'>
                    <h1 className='sm:text-3xl text-2xl font-semibold'>Update Password</h1>
                    <div className='flex flex-col mt-3'>
                        <label className='font-semibold' htmlFor="name">New password:</label>
                        <div className='h-max w-max relative'>
                            <input onChange={SetInputs} value={obj?.pass} name='pass' className='h-10 sm:w-[350px] w-[280px] border mt-1 focus:outline-none pl-2' placeholder='Enter new password  ...' type={"email"} />
                        </div>
                    </div>
                    <div className='h-max w-max m-0 flex flex-col items-center'>
                        <button onClick={UpdatePassword} className='bg-[rgb(60,80,224)] hover:bg-[rgb(36,48,63)] text-white px-14 py-2 mt-2 rounded-sm font-medium'>Update password</button>
                    </div>
                </div>
            </div></>
    )
}

export default Redirect