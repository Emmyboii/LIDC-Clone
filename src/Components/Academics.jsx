import React from 'react'
import EngStud from '../LIDC Images/EngineeringStudent.jpg';
import Under from '../LIDC Images/Undergrad.jpg'
import lifelong from '../LIDC Images/lifelong.jpg'

const Academics = () => {
    return (
        <div className='max-w-[1640px] bg-slate-700'>
            <div className='py-4'>
                <h1 className='font-bold text-[60px] mt-10 text-center'>Academics</h1>
                <p className='text-white lg:text-[30px] md:text-[20px] sm:text-[20px] mx-[20%] text-center'>Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 py-10 mx-10 gap-10'>
                    <div className='text-white'>
                        <img src={EngStud} alt="/" />
                        <h1 className='text-xl font-bold py-4'>Undergraduate Education</h1>
                        <p>Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise</p>
                    </div>
                    <div className='text-white'>
                        <img src={Under} alt="/" />
                        <h1 className='text-xl font-bold py-4'>Graduate Education</h1>
                        <p>Unsurpassed opportunities to participate in the advancement of entire fields of knowledge</p>
                    </div>
                    <div className='text-white'>
                        <img src={lifelong} alt="/" />
                        <h1 className='text-xl font-bold py-4'>Continuous learning</h1>
                        <p>Sandwich programme, executive and professional programs</p>
                    </div>
                </div>
                <div className='pt-10'>
                    <h1 className='text-[30px] font-bold text-center'>Seven Faculties in which to pursue your passions</h1>
                    <ul className='sm:flex hidden justify-center flex-wrap py-6 text-lime-300 text-xl'>
                        <li className='px-4 border-r whitespace-nowrap'><a href="/">Arts</a></li>
                        <li className='px-4 border-r whitespace-nowrap'><a href="/">Education</a></li>
                        <li className='px-4 border-r whitespace-nowrap'><a href="/">Engineering</a></li>
                        <li className='px-4 border-r whitespace-nowrap'><a href="/">Law</a></li>
                        <li className='px-4 border-r whitespace-nowrap'><a href="/">Manaement sciences</a></li>
                        <li className='px-4 border-r whitespace-nowrap'><a href="/">Sciences</a></li>
                        <li className='px-4 whitespace-nowrap'><a href="/">Social Sciences</a></li>
                    </ul>
                    <ul className='flex sm:hidden justify-center flex-wrap py-6 text-lime-300 text-xl'>
                        <li className='border-b w-[50%] ml-[2px] py-4 text-center whitespace-nowrap'><a href="/">Arts</a></li>
                        <li className='border-b w-[50%] ml-[2px] py-4 text-center whitespace-nowrap'><a href="/">Education</a></li>
                        <li className='border-b w-[50%] ml-[2px] py-4 text-center whitespace-nowrap'><a href="/">Engineering</a></li>
                        <li className='border-b w-[50%] ml-[2px] py-4 text-center whitespace-nowrap'><a href="/">Law</a></li>
                        <li className='border-b w-[50%] ml-[2px] py-4 text-center'><a href="/">Manaement sciences</a></li>
                        <li className='border-b w-[50%] ml-[2px] py-4 text-center whitespace-nowrap'><a href="/">Sciences</a></li>
                        <li className='border-b w-[50%] ml-[2px] py-4 text-center'><a href="/">Social Sciences</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[30px] font-bold text-center'>Three Schools in which to pursue your passions</h1>
                    <ul className='sm:flex hidden justify-center flex-wrap py-6 text-lime-300 text-xl'>
                        <li className='px-4 border-r whitespace-nowrap'><a href="/">Agriculture</a></li>
                        <li className='px-4 border-r whitespace-nowrap'><a href="/">Communications</a></li>
                        <li className='px-4 whitespace-nowrap'><a href="/">Transport</a></li>
                    </ul>
                    <ul className='flex sm:hidden justify-center flex-wrap py-6 text-lime-300 text-xl'>
                        <li className='border-b w-[50%] ml-[2px] py-4 text-center whitespace-nowrap'><a href="/">Agriculture</a></li>
                        <li className='border-b w-[50%] ml-[2px] py-4 text-center whitespace-nowrap'><a href="/">Communications</a></li>
                        <li className='border-b w-[50%] ml-[2px] py-4 text-center whitespace-nowrap'><a href="/">Transport</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[30px] font-bold text-center'>One College in which to pursue your passions</h1>
                    <ul className='flex justify-center py-6 text-lime-300 text-xl'>
                        <li className=' whitespace-nowrap'><a href="/">Medicine</a></li>
                    </ul>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-orange-600 text-center mb-4 border-none text-white font-bold py-4 text-xl rounded-none'>More about Academics</button>
                </div>
            </div>
        </div>
    )
}

export default Academics