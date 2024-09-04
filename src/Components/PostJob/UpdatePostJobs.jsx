import axios from 'axios';
import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdatePostJobs = () => {
    const [obj, setobj] = useState({})
    const [check, setcheck] = useState(false)
    const [index, setindex] = useState(0)

    const navigate = useNavigate()
    const { id } = useParams()

    const setValues = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value })
    }
    const getjob = async () => {
        const response = await axios.get("http://localhost:4000/get-job")
        var obj = response.data.find((e, i) => e._id == id)
        setobj(obj)
    }
    const edit = async (id) => {
        var response = await axios.patch(`http://localhost:4000/update-post-job/${id}`, obj)
        setobj({})
        setcheck(false)
        setindex(0)
        toast.success('Successfully edited!')
        setTimeout(() => {
            navigate("/admin/dashboard/001")
        }, 500);
    }
    useEffect(() => {
        getjob()
    }, [])

    return (
        <>
            <div><Toaster /></div>
            <div className='h-[100vh] w-full bg-[rgb(36,48,63)] flex justify-center items-center'>
                <div className='h-max w-max bg-[rgb(26,34,44)] flex flex-col px-10 py-5 rounded-2xl'>
                    <label className='text-white'>Job Title:</label>
                    <input className='h-10 w-[350px] mt-2' type="text" name='jobTitle' value={obj?.jobTitle} onChange={setValues} />

                    <label className='text-white mt-3'>Job Description:</label>
                    <textarea className='w-[350px] mt-2' name='jobDescription' value={obj?.jobDescription} onChange={setValues} />

                    <label className='text-white mt-3'>City:</label>
                    <input className='h-10 w-[350px] mt-2' type="text" name='city' value={obj?.city} onChange={setValues} />

                    <label className='text-white mt-3'>Last Date to Apply:</label>
                    <input className='h-10 w-[350px] mt-2' type="date" name='lastDate' value={obj?.lastDate} onChange={setValues} />

                    <button
                        className='bg-[rgb(60,80,224)] text-white py-2 mt-5 px-10 w-max hover:bg-[rgb(36,48,63)]'
                        onClick={() => edit(id)}
                        style={{ cursor: 'pointer' }}
                    >
                        Update Job
                    </button>
                </div>
            </div>
        </>
    )
}

export default UpdatePostJobs