"use client"
import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

type Project = {
    id: number;
    title: string;
    description: string;
    link: string;
    technology: string[];
};
type EducationCardProps = {
    project: Project;
};

const EducationCard: React.FC<EducationCardProps> = ({ project }) => {

    return (
        <Link
            className={`block rounded-xl border border-gray-800 border-opacity-5 p-8 shadow-xl hover:border-blue-500/20 hover:shadow-blue-500/20`}
            href={project.link}
        >
            <GraduationCap size={40} className="text-blue-700" />

            <h2 className="mt-4 text-xl font-bold text-white">{project.title}</h2>

            <p className="mt-1 text-sm text-gray-300">
                {project.description}
            </p>
            <ul className='flex gap-2 flex-wrap mt-1 text-white'>
                {project.technology && project.technology.map((item, index) => (
                    <li key={index} className='bg-blue-600 py-1 px-2 rounded-3xl text-[12px]'>
                        {item}
                    </li>
                ))}
            </ul>
        </Link>
    );
};

export default EducationCard;
