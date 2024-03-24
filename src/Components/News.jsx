import React from 'react'
import Merged from '../LIDC Images/eProcessMerged.jpg';
import Sandwish from '../LIDC Images/sandwich.jpg';
import Casa from '../LIDC Images/casa.jpg';
import Certificate from '../LIDC Images/certificate.jpg';
import lasues from '../LIDC Images/lasues.jpg';

const News = () => {
  return (
    <div>
      <div className='max-w-[1640px] bg-gray-50'>
        <h1 className='font-bold text-[30px] lg:text-[45px] sm:mt-[70px] mt-[0px] text-center py-4'>LASU-IDC TODAY</h1>
        <p className='text-2xl text-center pb-14'>The latest news from Lagos State University</p>
        <div className='p-8 my-4 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <img src={Merged} alt="/" className='w-full lg:h-[70vh] lg:flex md:h-[53vh] relative mx-auto hover:scale-[1.02] hover:cursor-pointer lg:col-start-1 lg:col-end-5 md:col-start-1 md:col-end-3 sm:col-start-1 sm:col-end-3 hover:duration-100' />
          <div className='absolute lg:flex lg:flex-col hidden bg-white w-[30%] m-6 pb-4 px-4'>
            <h2 className='mx-4 text-orange-500 text-[20px] font-medium pt-8 pb-3'>IN THE SPOTLIGHT</h2>
            <p className='mx-4 font-bold text-lg hover:text-blue-700'><a href="/">LASU-IDC unveils the eProcess version 2.0 at Ojo, Ikeja and Epe Campuses</a></p>
          </div>
          <div className='shadow-xl bg-white hover:text-blue-700'>
            <img className='hover:scale-95 duration-300 sm:flex hidden' src={Sandwish} alt="/" />
            <h2 className='mx-4 text-orange-500 text-[20px] font-medium pt-8 pb-3'>SANDWISH PROGRAMME</h2>
            <p className='mx-4 text-xl font-bold pb-6 hover:text-blue-700'><a href="/">Multi Instiution platform: The Science behind the intelligent result system</a></p>
          </div>
          <div className='shadow-xl bg-white hover:text-blue-700'>
            <img className=' hover:scale-x-95 duration-300 sm:flex hidden' src={Casa} alt="/" />
            <h2 className='mx-4 text-orange-500 text-[20px] font-medium pt-8 pb-3'>SANDWISH PROGRAMME</h2>
            <p className='mx-4 text-xl font-bold pb-6 hover:text-blue-700'><a href="/">Multi Instiution platform: The Science behind the intelligent result system</a></p>
          </div>
          <div className='shadow-xl bg-white hover:text-blue-700'>
            <img className='hover:scale-95 duration-300 sm:flex hidden' src={Certificate} alt="/" />
            <h2 className='mx-4 text-orange-500 text-[20px] font-medium pt-8 pb-3'>SANDWISH PROGRAMME</h2>
            <p className='mx-4 text-xl font-bold pb-6 hover:text-blue-700'><a href="/">Multi Instiution platform: The Science behind the intelligent result system</a></p>
          </div>
          <div className='shadow-xl bg-white hover:text-blue-700'>
            <img className='hover:scale-95 duration-300 sm:flex hidden' src={lasues} alt="/" />
            <h2 className='mx-4 text-orange-500 text-[20px] font-medium pt-8 pb-3'>SANDWISH PROGRAMME</h2>
            <p className='mx-4 text-xl font-bold pb-6 hover:text-blue-700'><a href="/">Multi Instiution platform: The Science behind the intelligent result system</a></p>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='bg-orange-600 mb-4 text-center border-none text-white font-bold py-4 text-xl rounded-none'>More News from LASU-IDC</button>
        </div>
      </div>
    </div>
  )
}

export default News