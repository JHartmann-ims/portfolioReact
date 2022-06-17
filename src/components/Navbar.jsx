import React from 'react'

import {MailIcon} from '@heroicons/react/solid'

const Navbar = () => {
  return (
    <div className='w-screen h-[120px] m-0 mx-auto'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl sm:text-4xl sm:pl-5 font-bold pl-10'>&lt;JHartmann&gt;</h1>
            </div>
            <div className='sm:pr-6 pr-9'>
                <a href="mailto:julian.hartmann@students.ksba.ch"><button className='btn flex'><MailIcon className='w-5 h-5' /></button></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar