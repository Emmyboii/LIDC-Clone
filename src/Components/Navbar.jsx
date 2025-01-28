import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import LASUarial from '../LIDC Images/LASUarial.jpg'

const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const [nav, setNav] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }

    const fixed = () => {
        if (window.scrollY > 20) {
            setNav(true)
        } else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', fixed)

    return (
        <>
            <div className='bg-orange-600 max-w-[1640px] py-1 fixed z-50 w-full'>
                <div className='flex justify-between mr-0 ml-5 relative'>
                    <h1 className='text-white text-[25px] font-serif hidden sm:flex'>Lagos State University Integrated Data Center</h1>
                    <h1 className='text-white text-[20px] font-serif sm:hidden whitespace-nowrap'>LASU IDC</h1>
                    <ul className='flex text-white text-[17px] items-center'>
                        <li className=' hidden px-4 lg:flex sm:hidden'>
                            <a href="/">Current Students</a>
                        </li>
                        <li className='hidden px-4 lg:flex sm:hidden'>
                            <a href="/">Lecturers</a>
                        </li>
                        <li className='hidden px-4 lg:flex sm:hidden'>
                            <a href="/">Alumni</a>
                        </li>
                        <li className='hidden px-4 lg:flex sm:hidden items-center cursor-pointer'>
                            <AiOutlineSearch className='mx-1' size={25} />
                            <a href="/">Search</a>
                        </li>
                        <div className='flex sm:flex-col md:flex-row bg-orange-600 sm:h-17 items-center sm:bg-orange-600 lg:hidden sm:absolute sm:right-0 sm:top-2 md:top-0'>
                            <li className='flex items-center mx-2 cursor-pointer'>
                                <AiOutlineSearch className='mx-2' size={25} />
                                <a href="/">Search</a>
                            </li>
                            <div onClick={handleMenu}>
                                <li className=' flex sm:py-4 md:py-2 pr-2 items-center cursor-pointer'>
                                    {menu ? <AiOutlineClose className='mx-2' size={25} /> : <AiOutlineMenu className='mx-2' size={25} />}
                                    {menu ? 'Close' : 'Menu'}
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <div>
                <img className='w-screen relative sm:top-[75px] object-cover h-screen lg:top-0' src={LASUarial} alt="/" />
                <ul className={nav ? 'hidden lg:flex lg:whitespace-nowrap text-center z-50 text-2xl fixed top-14 left-[18px] xl:left-40 mx-auto text-black bg-white' : 'hidden lg:flex lg:whitespace-nowrap text-center z-10 text-2xl fixed top-14 left-[18px] xl:left-40 mx-auto text-white'}>
                    <li className='px-4 hover:border-b-white hover:border-b-4 py-1 hover:duration-300'>
                        <a href="/">Admission Screening</a>
                    </li>
                    <li className='px-4 hover:border-b-white hover:border-b-4 py-1 hover:duration-300'>
                        <a href="/">IIVC-Revalidation</a>
                    </li>
                    <li className='px-4 hover:border-b-white hover:border-b-4 py-1 hover:duration-300'>
                        <a href="/">Fulltime</a>
                    </li>
                    <li className='px-4 hover:border-b-white hover:border-b-4 py-1 hover:duration-300'>
                        <a href="/">SandWich</a>
                    </li>
                    <li className='px-4 hover:border-b-white hover:border-b-4 py-1 hover:duration-300'>
                        <a href="/">LASUES</a>
                    </li>
                    <li className='px-4 hover:border-b-white hover:border-b-4 py-1 hover:duration-300'>
                        <a href="/">News</a>
                    </li>
                    <li className='px-4 hover:border-b-white hover:border-b-4 py-1 hover:duration-300'>
                        <a href="/">About</a>
                    </li>
                </ul>
                <div className='absolute top-[220px] sm:top-[250px] lg:top-[220px] mr-[50px] ml-[30px] md:mx-[100px] lg:mx-[180px] sm:mx-[70px] text-center flex justify-center'>
                    <h1 className='text-white text-[49px] font-bold sm:text-[75px] md:text-[80px] lg:text-[80px] text-center'>Lagos State University Integrated Data Center</h1>
                </div>

                {menu ? <div className='bg-black/60 w-full fixed h-screen z-10 top-10 left-0 lg:hidden'></div> : ''}

                <div className={menu ? 'fixed md:h-[210px] top-11 z-10 bg-white w-full lg:hidden' : 'hidden'}>
                    <ul className='text-center text-xl top-11 mx-auto text-black grid grid-cols-2 sm:grid-cols-4 left-0 w-full'>
                        <li className='px-2 py-6  border hover:cursor-pointer hover:text-red-400 hover:duration-500 hover:bg-gray-100 border-gray-300 border-t-0'>
                            <a href="/">Admission Screening</a>
                        </li>
                        <li className='px-6 py-6 hover:cursor-pointer hover:text-red-400 hover:duration-500 hover:bg-gray-100 border border-gray-300 border-t-0'>
                            <a href="/">IIVC-Revalidation</a>
                        </li>
                        <li className='px-6 py-6 whitespace-nowrap hover:cursor-pointer hover:text-red-400 hover:duration-500 hover:bg-gray-100 border border-gray-300 border-t-0'>
                            <a href="/">Fulltime</a>
                        </li>
                        <li className='px-6 py-6 whitespace-nowrap hover:cursor-pointer hover:text-red-400 hover:duration-500 hover:bg-gray-100 border border-gray-300 border-t-0 border-r-0'>
                            <a href="/">SandWich</a>
                        </li>
                        <li className='px-6 py-6 whitespace-nowrap hover:cursor-pointer hover:text-red-400 hover:duration-500 hover:bg-gray-100 border border-gray-300'>
                            <a href="/">LASUES</a>
                        </li>
                        <li className='px-6 py-6 whitespace-nowrap hover:cursor-pointer hover:text-red-400 hover:duration-500 hover:bg-gray-100 border border-gray-300'>
                            <a href="/">News</a>
                        </li>
                        <li className='px-6 py-6 whitespace-nowrap hover:cursor-pointer hover:text-red-400 hover:duration-500 hover:bg-gray-100 border border-gray-300 md:border-r-0'>
                            <a href="/">About</a>
                        </li>
                    </ul>
                    <div className='bg-gray-100 '>
                        <ul className='flex justify-center sm:h-14'>
                            <li className='px-3 py-3 sm:text-lg hover:bg-white hover:text-red-400 hover:duration-500 hover:cursor-pointer'>
                                <a href="/">Current Students</a>
                            </li>
                            <li className='px-3 py-3 sm:text-lg hover:bg-white hover:text-red-400 hover:duration-500 hover:cursor-pointer'>
                                <a href="/">Lecturers</a>
                            </li>
                            <li className='px-3 py-3 sm:text-lg hover:bg-white hover:text-red-400 hover:duration-500 hover:cursor-pointer'>
                                <a href="/">Alumni</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar