'use client';

//Import JS Dependancies
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

//Components
import NavItems from '@components/navigation/NavItems';
import NavAuth from '@components/navigation/NavAuth';

//Page Assets
import logo from '/public/assets/img/logo.png';

const Nav = () => {

    //State to determine if the menu drop down is visable or not on mobile devices.
    const [toggleNav, setNav] = useState(false)

    //Function to toggle nav state
    const toggleMenu = () => {
        setNav(prev => !prev)
    }

    //Change if whether or not the more info box is shown.
    const isActive = toggleNav ? "" : "hidden";

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex flex-center'>
                <Image 
                    src={logo}
                    alt="Tripsit Logo"
                    width={120}
                    height={40}
                    className='object-contain'
                />
            </Link>
            
            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                
                <div className='flex gap-3 md:gap-5'>
                
                    {/* Dynamically populated items go here */}
                    <NavItems isMobile={"desktop"}/>

                    {/* Static items that are not likely to change go here */}
                    <Link href="https://discord.gg/tripsit" className='outline_btn'>Join Discord</Link>

                    <Link href="/webchat" className='outline_btn'>Start Webchat</Link>

                    {/* Auth Handler Goes Here */}
                    <NavAuth isMobile={"desktop"}/>

                </div>
            </div>

            {/* Mobile Navigation */}
            <div className='sm:hidden flex relative'>
                <button 
                    className='black_btn'
                    onClick={toggleMenu}
                >
                    ---
                </button>
                <div className={`absolute top-8 right-0 z-30 w-[250px] min-h-[300px] flex flex-col gap-3 py-4 bg-zinc-400 rounded-md ${isActive}`}>
                    
                    {/* Static items that are not likely to change go here */}
                    <Link href="https://discord.gg/tripsit" className='outline_btn mx-3 mb-1'>Join Discord</Link>

                    <Link href="/webchat" className='outline_btn mx-3 mb-1'>Start Webchat</Link>

                    <NavItems isMobile={"mobile"}/>  

                    <NavAuth isMobile={"mobile"}/>

                </div>
                {
                toggleNav && (
                <div 
                    className='fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40'
                    onClick={toggleMenu}
                />
                )
                }
                
            </div>

        </nav>
    )
}

export default Nav