import { CgDesignmodo } from "react-icons/cg";
import Divider from "./Divider";
import SkillCard from "./SkillCard";
import { Cloud, Code, Server } from 'lucide-react';


import React from 'react'
import Link from "next/link";

type Props = {}

const Skills = (props: Props) => {
    const services = [
        {
            id: 1,
            icon: <Cloud size={24} />,
            title: 'Cloud Computing',
            description: 'Leverage scalable cloud solutions to enhance performance, security, and efficiency. Our cloud services include infrastructure management, cloud migration, and continuous monitoring.'
        },
        {
            id: 2,
            icon: <Code size={24} />,
            title: 'Software Development',
            description: 'Custom software development tailored to meet your business needs. We offer full-stack development, API integrations, and maintenance services to ensure your software runs smoothly.'
        },
        {
            id: 3,
            icon: <CgDesignmodo size={24} />,
            title: 'UI/UX Design',
            description: 'Design engaging user interfaces and experiences that captivate users. Our design services include user research, wireframing, prototyping, and usability testing.'
        },
        {
            id: 4,
            icon: <Server size={24} />,
            title: 'Server Management',
            description: 'Comprehensive server management services to keep your infrastructure robust and reliable. We provide server setup, optimization, monitoring, and troubleshooting to ensure uptime and performance.'
        }
    ];
    return (
        <section className="bg-teal-800">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <h1 className="text-white text-center text-5xl font-bold">Blogs</h1>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services && services.map((service, index) => (
                        <SkillCard service={service} key={index} />
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 animate-bounce-in">

                    <Link
                        className="block w-full rounded px-12 py-3 text-sm bg-white font-medium text-teal-600 shadow hover:text-teal-600 focus:outline-none focus:ring active:text-teal-600 sm:w-auto"
                        href="#"
                    >
                        All Blogs
                    </Link>
                </div>
            </div>

        </section>
    )
}

export default Skills