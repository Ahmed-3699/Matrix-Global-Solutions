import React, { useState } from 'react'
import imgLogo from '../../Images/Matrix_Global-removebg-preview.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const DashBoardNavbar = ({bar}) => {
  const [OpenMenu, setOpenMenu] = useState(false)
  const [userData, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

  const DropMenu = () => {
    setOpenMenu(!OpenMenu)
  }

  const Logout = () => {
    localStorage.removeItem("user")
    setUser(null)
    toast.success("Successfully Logout!")
  }
  return (
    <>
      <div><Toaster /></div>
      <div className='h-20 lg:w-[76%] w-full bg-[rgb(36,48,63)] absolute lg:left-[24%] left-0 top-0 flex justify-between items-center px-5'>
        <FaBarsStaggered onClick={bar} className='text-[rgb(222,228,238)] cursor-pointer text-3xl lg:invisible visible' />

        <div className='h-max w-max flex items-center gap-3'>
          <div className='h-11 w-11 rounded-full overflow-hidden'>
            <img src={imgLogo} alt="" />
          </div>
          <FaAngleDown onClick={DropMenu} className='text-[rgb(222,228,238)] cursor-pointer relative' />
          {
            OpenMenu && (
              <div className={`${OpenMenu} h-max w-max bg-[rgb(36,48,63)] absolute top-16 right-5 px-8 py-2 z-10 shadow-sm shadow-white`}>
                <ul className='text-[rgb(174,183,192)]'>
                  <Link to={'/'}>
                    <li className='h-10 w-full flex items-center justify-center hover:text-[rgb(60,80,224)] cursor-pointer'>Back On Website</li>
                  </Link>
                  <Link to={'/'}>
                    <li onClick={Logout} className='h-10 w-full flex items-center justify-center hover:text-[rgb(60,80,224)] cursor-pointer'>Logout</li>
                  </Link>
                </ul>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default DashBoardNavbar