import React from 'react'
import logo from '../../Images/Matrix Global.png'
import { IoPeopleOutline } from "react-icons/io5";
import { PiSuitcaseLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const DashBoardSidebar = ({handleTabClick, activeTab, sidebar, MarkX}) => {
    return (
        <>
            <div className={`${sidebar} h-[100vh] lg:w-[24%]  md:w-[33%] sm:w-[40%] w-[70%] bg-[rgb(36,48,63)] absolute top-0 lg:left-0 z-50 duration-300`}>
            <RxCross1 onClick={MarkX} className='absolute z-10 right-0 text-white top-1 text-3xl lg:invisible visible' />
                <div className='h-max w-max flex items-center sm:gap-3 gap-1 sm:pl-6 pl-2 pt-5'>
                    <div className='h-14 w-14 overflow-hidden rounded-xl'>
                        <img className='h-full w-full' src={logo} alt="" />
                    </div>
                    <p className='text-2xl text-white font-serif break-words'>Matrix Global</p>
                </div>
                <div className='h-max w-[85%] m-auto mt-16 flex flex-col gap-2'>
                    <div onClick={() => handleTabClick(0)} className={`${activeTab === 0 ? 'bg-[rgb(51,58,72)]' : 'bg-transparent'} h-10 w-full text-[rgb(222,228,238)] hover: px-3 cursor-pointer flex justify-between items-center`}>
                        <div className='h-max w-full flex items-center gap-3 '>
                            <IoPeopleOutline />
                            <p>Clients</p>
                        </div>
                        <FaAngleRight />
                    </div>
                    <div onClick={() => handleTabClick(1)} className={`${activeTab === 1 ? 'bg-[rgb(51,58,72)]' : 'bg-transparent'} h-10 w-full text-[rgb(222,228,238)] hover: px-3 cursor-pointer flex justify-between items-center`}>
                        <div className='h-max w-full flex items-center gap-3 '>
                            <CiUser />
                            <p>Candidates</p>
                        </div>
                        <FaAngleRight />
                    </div>
                    <div onClick={() => handleTabClick(2)} className={`${activeTab === 2 ? 'bg-[rgb(51,58,72)]' : 'bg-transparent'} h-10 w-full text-[rgb(222,228,238)] hover: px-3 cursor-pointer flex justify-between items-center`}>
                        <div className='h-max w-full flex items-center gap-3 '>
                            <PiSuitcaseLight />
                            <p>Job Posting</p>
                        </div>
                        <FaAngleRight />
                    </div>





                </div>
            </div>
        </>
    )
}

export default DashBoardSidebar