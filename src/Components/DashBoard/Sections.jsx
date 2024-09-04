import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import ReadMore from './ReadMore';

const Sections = ({ activeTab }) => {
  const [jobarray, setjobarray] = useState([]);
  const [message, setmessage] = useState("")
  console.log(message, "mess");
  const [clients, setclients] = useState([])


  console.log(jobarray, 'Jobs');

  const PostJobs = async () => {
    const response = await axios.get("http://localhost:4000/get-job")
    setjobarray(response.data)
  }
  useEffect(() => {
    PostJobs();
  }, [message]);
  const DelJob = async (index) => {
    var response = await axios.delete(`http://localhost:4000/del-job/${index}`)
    console.log(response, 'del');
    if (response.data.message == "Item Deleted")
      setmessage(response.data.message)
    toast.success('Successfully deleted!')
  }

  const ClientsInformation = async () => {
    var response = await axios.get("http://localhost:4000/clients-information")
    setclients(response.data)
  }
  useEffect(() => {
    ClientsInformation()
  }, [])

  return (
    <>
      <div><Toaster /></div>
      <div className='lg:h-[85.6vh] h-[100vh] lg:w-[76%] w-full absolute top-20 lg:left-[24%] left-0 px-5 pt-5 bg-[rgb(26,34,44)]'>
        {
          activeTab === 0 ? <>
            <div className='h-max w-full'>
              <h1 className='sm:text-3xl text-2xl font-bold text-white'>Clients</h1>

              <div className='scroll-style h-[380px] w-full  grid lg:grid-cols-2 grid-cols-1 gap-10 mt-5 overflow-auto'>
                {
                  clients && clients.map((e, i) => {
                    return (
                      <>
                        <div className='h-max w-full p-5 bg-[rgb(36,48,63)] rounded-lg'>
                          <h1 className='text-white'>Client Name: <span className='font-bold text-xl ml-1'>{e.firstname}</span> <span className='font-bold text-xl'>{e.lastname}</span></h1>
                          <p className='text-white mt-1 break-words'>Email:
                            <a href="mailto:ahmed123@gmail.com" target="_blank" rel="noopener noreferrer">
                              <span className='text-white hover:text-[rgb(60,80,224)] hover:underline cursor-pointer ml-2 font-bold'>{e.email}</span>
                            </a>
                          </p>
                          <p className='text-white mt-1'>Message:
                            <ReadMore e={e} />
                          </p>
                        </div>

                      </>
                    )
                  })
                }

              </div>
            </div>
          </> : <></>
        }
        {
          activeTab === 1 ? <>
            <div className='h-max w-full'>
              <h1 className='text-white sm:text-3xl text-2xl font-bold'>Candidates</h1>

              <div className='bg-[rgb(60,80,224)] h-max w-full px-4 text-[rgb(247,247,254)] py-3 mt-5 rounded-xl'>
                <p>This candidate has shown a strong interest in the opportunity presented by Matrix Global Solutions. Their qualifications align well with the role, and they have demonstrated enthusiasm through their proactive engagement during the recruitment process. Their resume and background reflect the necessary skills and experience, making them a strong contender. This candidate is ready for the next steps and is eager to contribute to our team's success.
                  You can view all candidates, including this one, in the following spreadsheet:
                  <a className='underline ml-1 break-words' href="https://docs.google.com/spreadsheets/d/1M7K1XmkQ6L92Nw67RiY8QEMBaumTQ55hss5AkV0vbcM/edit?gid=806238499#gid=806238499" target="_blank" rel="noopener noreferrer">https://docs.google.com/spreadsheets/d/1M7K1XmkQ6L92Nw67RiY8QEMBaumTQ55hss5AkV0vbcM/edit?gid=806238499#gid=806238499</a>
                </p>
              </div>
            </div>
          </> : <></>
        }
        {
          activeTab === 2 ? <>
            <div className='h-max w-full'>
              <div className='h-max w-full flex justify-between items-center'>
                <h1 className='text-white sm:text-3xl text-2xl font-bold'>Job Posting</h1>
                <Link to={"/admin/post-job"}>
                  <button className='bg-[rgb(60,80,224)] hover:bg-[rgb(60,70,214)] text-[rgb(254,254,255)] px-8 font-medium py-3 rounded-md'>POST JOB</button>
                </Link>
              </div>
              <div className='scroll-style h-[380px] w-full flex flex-col gap-5 border-transparent mt-5 overflow-auto'>
                {
                  jobarray && jobarray.map((e, i) => {
                    return (
                      <>
                        <div className='h-max w-full bg-[rgb(222,228,238)] py-2 px-3 relative group border-2'>
                          <div className='h-max w-full flex justify-between'>
                            <h1 className='text-2xl font-bold font-serif'>{e.jobTitle}</h1>
                            <div className='h-max w-max flex items-center gap-3 invisible group-hover:visible'>
                              <Link to={`/admin/update-post-jobs/${e._id}`}>
                                <MdEdit className='text-xl cursor-pointer hover:text-green-600' />
                              </Link>
                              <MdDelete onClick={() => DelJob(e._id)} className='text-xl cursor-pointer hover:text-red-600' />
                            </div>
                          </div>
                          <p className='text-[rgb(90,85,85)] mt-2'>{e.jobDescription}</p>
                          <div className='h-max w-full mt-2 flex sm:flex-row flex-col sm:gap-0 gap-2 sm:justify-between sm:items-center'>
                            <p className='font-bold text-[rgb(60,80,224)]'>City: <span className='font-normal text-black'>{e.city}</span></p>
                            <p className='font-bold text-[rgb(255,49,49)]'>Last Date to Apply: <span className='font-normal text-black'>{e.lastDate}</span></p>
                          </div>

                        </div>
                      </>
                    )
                  })
                }
              </div>

            </div>
          </> : <></>
        }

      </div>
    </>
  )
}

export default Sections