import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReadMore from './ReadMore';

const UnlockPotential = () => {
  const [jobarray, setjobarray] = useState([]);

  const PostJobs = async () => {
    const response = await axios.get("http://localhost:4000/get-job");
    setjobarray(response.data);
  };

  useEffect(() => {
    PostJobs();
  }, []);

  const isApplicationOpen = (lastDate) => {
    const currentDate = new Date();
    const lastDateObj = new Date(lastDate);
    return currentDate <= lastDateObj;
  };

  return (
    <>
      <div className='h-max w-full sm:pt-20 pt-5'>
        <h1 className='text-[rgb(15,23,42)] font-bold sm:text-5xl text-[27px] lg:w-[70%] w-[90%] text-center m-auto'>
          Unlock Your Potential with Matrix Global Solutions
        </h1>
        <p className='text-[rgb(119,119,119)] text-center sm:mt-7 mt-5 sm:text-lg sm:w-full w-[80%] m-auto'>
          Discover Thrilling Opportunities Worldwide
        </p>

        <div className='h-max lg:w-[80%] sm:w-[85%] w-[90%] border m-auto mt-8 mb-10 flex flex-col gap-5'>
          {jobarray && jobarray.map((job, index) => {
            const open = isApplicationOpen(job.lastDate);
            return (
              <div key={index} className='h-max w-full bg-white shadow-md shadow-slate-500 py-2 px-3 relative group border-2 rounded-md'>
                <h1 className='text-2xl font-bold font-serif'>{job.jobTitle}</h1>
                {
                  <ReadMore job={job} />
                }
                {/* <p className='text-[rgb(90,85,85)] mt-2 break-words'>{job.jobDescription}</p> */}
                <div className='h-max w-full mt-3 flex sm:flex-row flex-col sm:gap-0 gap-2 sm:justify-between sm:items-center'>
                  <p className='font-bold text-[rgb(153,153,153)]'>
                    City: <span className='font-normal text-[rgb(153,153,153)]'>{job.city}</span>
                  </p>
                  <p className='font-bold text-[rgb(255,49,49)]'>
                    Last Date to Apply: <span className='font-normal text-black'>{open ? 'Apply' : 'Closed'}</span>
                  </p>
                </div>
                <div className='h-max w-full flex justify-end'>

                  <button
                    className={`${open ? 'bg-[rgb(254,49,49)] hover:bg-[rgba(254,49,49,0.85)]' : "bg-[rgb(128,128,128)]"} text-white py-2 mt-5 px-10 w-max flex justify-end`}
                    disabled={!open}
                    style={{ cursor: open ? 'pointer' : 'not-allowed' }}
                  >
                    {open ? (
                      <a className='w-full' href="https://docs.google.com/forms/d/e/1FAIpQLSe1924L9RAR3hA_kJUXEpEKjGnHRcKTpdLKRKKW66psQc19Yw/alreadyresponded" target="_blank" rel="noopener noreferrer">
                        APPLY
                      </a>
                    ) : (
                      'CLOSED'
                    )}
                  </button>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UnlockPotential;