import React from 'react';
import Image from 'next/image';
import Instagram from "../graphics/instagram.png";
import Facebook from "../graphics/facebook.png";
import Twitter from "../graphics/twitter.png";
import LinkedIn from "../graphics/linkedin.png";

const Footer: React.FC = () => {
    return (
        <footer className="p-4 border-t border-gray-300 text-center" >
            <div><h4> Navipath &copy; 2025. All Rights Reserved.</h4></div>
            <div className='flex justify-center items-center gap-[8vw] mt-4 flex-wrap flex-row'>
                <div className='flex justify-center items-center gap-2 flex-col'>
                    <p>Quick Links</p>
                    <div className='no-underline flex justify-center items-center gap-6 text-gray-400'>
                        <a href="../home">Home</a>
                        <a href="../about">About</a>
                        <a href="../contact">Contact Us</a>
                        <a href="../login">Login/Signup</a>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2 flex-col'>
                    <p>Contact us</p>
                    <div className='flex gap-[2em]'>
                        <p>Phone: +6379670870</p>
                        <p>E-mail: <a href="mailto:mail.com">mail.com</a></p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2 flex-col'>
                    <p>Follow us</p>
                    <div className='flex justify-center items-center gap-2 flex-row'>
                        <a href="https://www.facebook.com" target='_blank'><Image src={Facebook} className='w-[5vh] h-[5vh] mx-2' alt='Facebook'/></a>
                        <a href="https://www.twitter.com" target='_blank'><Image src={Twitter} alt='Twitter' className='w-[5vh] h-[5vh] mx-2'/></a>
                        <a href="https://www.instagram.com" target="_blank"><Image src={Instagram} alt='Instagram' className='w-[5vh] h-[5vh] mx-2'/></a>
                        <a href='https://www.linkedin.com' target="_blank"><Image src={LinkedIn} alt='Instagram' className='w-[5vh] h-[5vh] mx-2'/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;