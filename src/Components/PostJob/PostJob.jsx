import axios from 'axios';
import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const PostJob = () => {
    const [obj, setobj] = useState({})

    const handleApply = async () => {
        if (obj.jobTitle !== "" && obj.lastDate !== "") {
            const response = await axios.post("http://localhost:4000/job-post", obj);
            console.log(response.data);
        }
        else {
            toast.error("Please enter all required fields!");
        }
    };

    const setValues = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value })
    }

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

                    <Link to={"/admin/dashboard/001"}>
                        <button
                            className='bg-[rgb(60,80,224)] text-white py-2 mt-5 px-10 w-max hover:bg-[rgb(36,48,63)]'
                            onClick={handleApply}
                            style={{ cursor: 'pointer' }}
                        >
                            Apply
                        </button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default PostJob