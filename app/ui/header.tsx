import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../graphics/logo-dark.png";

const Header: React.FC = () => {
    return (
        <header className=" bg-black sticky top-0 z-50 shadow flex items-center justify-between gap-2 p-4 border-b border-gray-300 h-[10vh]">
            <Link href="/">
                <div className='flex items-center gap-2'>
                    <Image src={Logo} alt='Logo' className='w-[3.7vw] h-[3.7vw]' />
                    <h1 className='m-0 text-[5vh]'>Navipath</h1>
                </div>
            </Link>
            <div className='flex gap-4 items-center text-[2.35vh]'>
                <Link href="../home">Home</Link>
                <Link href="../about">About</Link>
                <Link href="../contact">Contact Us</Link>
                <Link href="../login"><button className="px-8 py-4 text-[2vh] bg-[#0070f3] text-white border-0 rounded-[5px] cursor-pointer ">Login/Signup</button></Link>
            </div>
        </header>
    );
};

export default Header;