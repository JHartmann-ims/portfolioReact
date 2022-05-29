import React from 'react'

import {MoonIcon, ChevronDownIcon, TranslateIcon} from '@heroicons/react/solid'

const Navbar = () => {
  return (
    <div className='w-screen h-[120px] m-0 mx-auto'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl sm:text-4xl sm:pl-5 font-bold pl-10'>&lt;JHartmann&gt;</h1>
                <ul className='hidden md:flex ml-5'>
                    <a href="" ><li className='transition ease-in-out hover:translate-y-1 hover:scale-95 delay-75'>.me()</li></a>
                    <a href="" ><li className='transition ease-in-out hover:translate-y-1 hover:scale-95 delay-75'>.contact()</li></a>
                </ul>
            </div>
            <div className='sm:pr-6 pr-9'>
                <button className='btn hidden md:flex'><TranslateIcon className='w-5 h-5' /></button>
                <div class="dropdown dropdown-left flex md:hidden">
                    <label tabindex="0" class="btn btn-ghost rounded-btn bg-neutral active:bg-primary"><ChevronDownIcon className='w-5 h-5'/></label>
                    <ul tabindex="0" class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                        <li><a>.me()</a></li> 
                        <li><a>.contact()</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar