import Link from 'next/link'
import React, { FC } from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";



type Props = {
    activeItem: number
    setActiveItem: (activeItem: number) => void
    isMobile: boolean
}

// const NavItems: FC<Props> = ({ activeItem, setActiveItem, isMobile }) => {
export const navItems = [
    {
        name: 'Home',
        url: '/',

    },
    {
        name: 'About',
        url: '/about'
    },
    {
        name: 'Blogs',
        url: '/blog'
    },
    {
        name: 'Projects',
        url: '/project'
    },

]

export const SocailLink = [
    {
        name: 'facebook',
        url: 'www.facebook.com',
        image: <FaFacebook size={25} />
    },
    {
        name: 'twitter',
        url: 'www.twitter.com',
        image: <FaTwitter size={25} />
    },
    {
        name: 'linkedin',
        url: 'www.linkedin.com',
        image: <FaLinkedin size={25} />
    },
    {
        name: 'github',
        url: 'www.github.com',
        image: <FaGithub size={25} />
    },
    {
        name: 'instragram',
        url: 'www.instragram.com',
        image: <FaInstagram size={25} />
    }

]
// return (
//     <>
//         <div className='hidden md:flex'>
//             {
//                 navItems.map((item, index) => (
//                     <Link href={item.url} key={index} passHref>
//                         <span
//                             className={`${activeItem === index
//                                 ? 'dark:text-[#37a39] text-[crimson]'
//                                 : 'dark:text-white text-black'
//                                 } text-[18px] px-6 font-Poppins font-[400]`}
//                         >
//                             {item.name}
//                         </span>
//                     </Link>
//                 ))
//             }
//         </div>

//         {
//             isMobile && (
//                 <div className='md:hidden mt-5'>
//                     {
//                         navItems.map((item, index) => (
//                             <Link href={item.url} key={index} passHref>
//                                 <span
//                                     className={`${activeItem === index
//                                         ? 'dark:text-[#37a39] text-[crimson]'
//                                         : 'dark:text-white text-black'
//                                         } text-[18px] px-6 font-Poppins font-[400]`}
//                                 >
//                                     {item.name}
//                                 </span>
//                             </Link>
//                         ))
//                     }
//                 </div>
//             )
//         }
//     </>
// )
// }

// export default NavItems