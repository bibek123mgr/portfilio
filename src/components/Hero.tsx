import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
                <div className="mx-auto max-w-xl text-center animate-fade-in">
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-black animate-slide-in-up">
                        <span className='uppercase block'>I&apos;m Bibek Bakabal</span>
                        <strong className="font-extrabold text-teal-600 sm:block animate-slide-in-up delay-500">Web Dev & UI/UX Designer</strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed text-black animate-fade-in delay-900">
                        Building the web isn&apos;t just about writing code; it&apos;s about crafting experiences that resonate and endure.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4 animate-bounce-in">
                        <Link
                            className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-600 focus:outline-none focus:ring active:bg-teal-600 sm:w-auto"
                            href="#"
                        >
                            Get Started
                        </Link>

                        <Link
                            className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-600 focus:outline-none focus:ring active:text-teal-600 sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
