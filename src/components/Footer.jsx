import { Copyright, Github, Mail } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <>

            <div className='min-h-15 px-10 border-t-2 bg-gray-950 text-gray-100 flex items-center justify-between '>
                <div className='flex space-x-5 '>
                <h1>Made by Shubham Dungarwal</h1>
                 <Copyright/>
                <p className=''> 2025  All Rights reserved.</p>
                </div>
                <div className='flex space-x-3'>
                <a target='_blank' rel="noopener noreferrer" href="mailto:dungarwalshubham56@gmail.com"> <Mail className='text-white text-2xl'/></a>
                <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/shubham-dungarwal"><Linkedin className='textwhite text-2xl'/></a>
                <a target='_blank' rel="noopener noreferrer" href="https://github.com/Shubham-ghub"> <Github className=" text-white text-2xl"/></a>
                </div>
            </div>

        </>
    )
}

export default Footer
