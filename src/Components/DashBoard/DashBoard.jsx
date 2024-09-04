import React, { useEffect, useState } from 'react'
import DashBoardNavbar from './DashBoardNavbar'
import DashBoardSidebar from './DashBoardSidebar'
import Sections from './Sections'
import { useNavigate } from 'react-router-dom'

const DashBoard = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [user, setuser] = useState(localStorage.getItem("user") || "")
  const [sidebar, setsidebar] = useState("md:-left-[33%] sm:-left-[40%] -left-[70%]")

  const navigate = useNavigate()

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  useEffect(() => {
    if (user) {
      navigate('/admin/dashboard/001')
    }
    else {
      navigate('/signin/admin/for-dashboard')
    }
  }, [])
  const bar = () => {
    setsidebar("left-0")
  }
  const MarkX =()=>{
    setsidebar("md:-left-[33%] sm:-left-[40%] -left-[70%]")

  }
  return (
    <>
      <div className='relative h-max w-full'>
        <DashBoardSidebar activeTab={activeTab} handleTabClick={handleTabClick} sidebar={sidebar} MarkX={MarkX} />
        <DashBoardNavbar bar={bar}  />
        <Sections activeTab={activeTab} />
      </div>
    </>
  )
}

export default DashBoard