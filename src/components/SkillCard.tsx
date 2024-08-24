"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { SiDiscourse } from "react-icons/si";

type Props = {
    id: number;
    icon: any;
    title: string;
    description: string;
};
interface IService {
    service: Props
}
const SkillCard: React.FC<IService> = ({ service }) => {

    return (
        <Link
            href={'/'}
            className={`block rounded-xl border border-gray-800 border-opacity-5 p-8 shadow-xl hover:border-blue-500/20 hover:shadow-blue-500/20`}
        >
            <h3 className="text-center text-xl my-2 flex justify-center items-center">
                <span className="mr-2 text-white">{service.icon}</span>
            </h3>
            <h1 className='mx-4 text-blue-600 text-lg font-bold'>{service.title}</h1>
            <p className="text-sm text-justify mx-4 text-white">
                {service.description}
            </p>
        </Link>
    );
}

export default SkillCard;
