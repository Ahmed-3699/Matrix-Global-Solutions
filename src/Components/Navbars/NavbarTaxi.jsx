import React, { useEffect, useRef, useState } from 'react'
import logo from '../../Images/Matrix Global.png'
import { Squash as Hamburger } from 'hamburger-react'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavbarTaxi = () => {
  const [isOpen, setOpen] = useState(false)

  const [showlinks, setshowlinks] = useState(false)
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setshowlinks(!showlinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight, "linksHeight");
    if (showlinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;

    }
    else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showlinks])
  return (
    <>
      <div className="h-max w-full bg-white relative z-50">

        <div className="nav-parnt lg:w-full h-max flex lg:flex-row lg:items-center lg:justify-between flex-col justify-center ">

          <div className='nav-header flex lg:justify-center justify-between items-center h-max lg:w-max w-full'>
            <Link to={"/"}>
              <div className="w-26 h-20 sm:ml-5 ml-2">
                <img src={logo} className='h-full w-full' alt="" />
              </div>
            </Link>
            <div onClick={toggleLinks} className=' lg:invisible visible sm:mr-5 mr-2'>
              <Hamburger className="text-3xl" toggled={isOpen} toggle={setOpen} color='black' />
            </div>
          </div>

          <div className='links-container h-0 transition-[.24s] lg:bg-transparent bg-white lg:overflow-visible overflow-hidden z-10' ref={linksContainerRef}>
            <ul className='links relative -mt-3 w-full flex lg:gap-12 gap-8 lg:pl-0 sm:pl-10 pl-4 lg:flex-row lg:items-center  font-medium flex-col lg:text-white  text-black text-[17px]' ref={linksRef}>
              <Link to={'/'}>
                <li className='cursor-pointer lg:mt-0 mt-5 relative group h-max w-max z-10 text-lg text-[rgb(15,23,42)] hover:text-[rgb(254,49,49)]'>Home</li>
              </Link>
              <Link to={'/about'}>
                <li className='cursor-pointer h-max w-max text-lg text-[rgb(15,23,42)] hover:text-[rgb(254,49,49)] duration-200'>About</li>
              </Link>
              
                <li className='cursor-pointer h-max w-max relative flex items-center justify-center  lg:gap-1 gap-3 text-lg text-[rgb(254,49,49)] group duration-200'><Link to={"/services"}>Services</Link> <FaAngleDown className='mt-1 w-max' />

                  <div className='absolute lg:top-10 lg:left-0 -top-20 z-50 left-16 overflow-hidden bg-white h-[0px] w-[0px] duration-300 invisible group-hover:visible group-hover:h-[270px] group-hover:w-[240px] shadow-md shadow-black flex flex-col justify-center'>
                    <div className='h-max py-3 px-2'>
                      <Link to={"/contact-center-as-a-service"}>
                        <p className='duration-150 ml-3 text-black hover:text-[rgb(254,49,49)] leading-6 font-normal text-[16px]'>CONTACT CENTER AS SERVICE</p>
                      </Link>
                    </div>
                    <div className='h-max py-3 px-2'>
                      <Link to={"/offshore-talent-pool"}>
                        <p className='duration-150 ml-3 text-black hover:text-[rgb(254,49,49)] leading-6 font-normal text-[16px] text-nowrap'>OFFSHORE TALENT POOL</p>
                      </Link>
                    </div>
                    <div className='h-max py-3 px-2'>
                      <Link to={"/home-security"}>
                      <p className='duration-150 text-black ml-3 hover:text-[rgb(254,49,49)] leading-6 font-normal text-[16px] text-nowrap'>HOME SECURITY SOLUTIONS</p>
                      </Link>
                    </div>
                    <div className='h-max py-3 px-2'>
                      <Link to={"/taxi-dispatch"}>
                        <p className='duration-150 ml-3 text-[rgb(254,49,49)] leading-6 font-normal text-[16px] text-nowrap'>TAXI DISPATCH SERVICES</p>
                      </Link>
                    </div>
                    <div className='h-max py-3 px-2'>
                      <Link to={"/dispatch-order-management"}>
                        <p className='duration-150 ml-3 text-black hover:text-[rgb(254,49,49)] leading-6 font-normal text-[16px]'>DISPATCH ORDER MANAGEMENT</p>
                      </Link>
                    </div>
                  </div>

                </li>
              
              <Link to={"/career"}>
                <li className='cursor-pointer h-max w-max text-lg text-[rgb(15,23,42)] hover:text-[rgb(254,49,49)] duration-200'>Career</li>
              </Link>

              <div className='lg:hidden flex flex-col gap-7'>
                <Link to={"/contact"}>
                </Link>
                <button className='bg-transparent hover:bg-[rgb(254,49,49)] text-[rgb(15,23,42)] hover:text-white w-[95%] py-3 mb-5 font-medium duration-300 border-2 border-[rgb(254,49,49)] rounded-md'>CONTACT US</button>
              </div>
            </ul>
          </div>

          <div className='social-icons lg:mr-10 mr-10 lg:flex gap-4 hidden h-max w-max'>
            <Link to={"/contact"}>
            <button className='bg-transparent hover:bg-[rgb(254,49,49)] text-[rgb(254,49,49)] hover:text-white px-7 rounded-md py-[10px] font-medium duration-300 text-[15px] border-2 border-[rgb(254,49,49)]'>CONTACT US</button>
            </Link>
          </div>

        </div>
      </div>


    </>
  )
}

export default NavbarTaxi