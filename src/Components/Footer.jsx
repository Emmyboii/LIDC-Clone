import React from 'react'

const Footer = () => {
    return (
        <div className='max-w-[1640px] bg-orange-600 text-white text-center'>
            <h1 className='text-[50px]'>LASU IDC</h1>
            <div className='grid grid-cols-2 sm:grid-cols-1 sm:ml-[50px] lg:ml-[250px] xl:ml-[25%] md:ml-[20%]'>
                <ul className='sm:flex sm:flex-row flex-col text-[18px] text-center'>
                    <li className='px-2 whitespace-nowrap'>LASU-IDC Home</li>
                    <li className='px-2 whitespace-nowrap'>Maps & Direction</li>
                    <li className='px-2 whitespace-nowrap'>Search Lagos State</li>
                    <li className='px-2 whitespace-nowrap'>Emergency</li>
                </ul>
                <ul className='sm:flex text-[15px]'>
                    <li className='px-2 whitespace-nowrap'>Terms of Use</li>
                    <li className='px-2 whitespace-nowrap'>Privacy</li>
                    <li className='px-2 whitespace-nowrap'>Copyright</li>
                    <li className='px-2 whitespace-nowrap'>Trademarks</li>
                    <li className='px-2 whitespace-nowrap'>Non-Dsicrimination</li>
                    <li className='px-2 whitespace-nowrap'>Accessibility</li>
                </ul>
            </div>
            <p className='px-2'>© Copyright Lagos State University. Ojo, Lagos 102001.</p>
        </div>
    )
}

export default Footer