import React from 'react';
import Divider from './Divider';

type Props = {};

const Contact: React.FC<Props> = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-16">
                <Divider title='Contact' />
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <h1 className='text-5xl text-teal-600 font-bold'>Get in Touch</h1>
                        <p className="max-w-xl text-[16px] text-black">
                            Have some big idea or brand to develop and need help? Then reach out we&apos;sd love to hear about your project and provide help.
                        </p>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg text-black outline-none border-gray-200 p-3 text-sm bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-100"
                                    placeholder="Name"
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full text-black outline-none  rounded-lg border-gray-200 p-3 text-sm bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-100"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full text-black outline-none rounded-lg border-gray-200 p-3 text-sm bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-100"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>
                                <textarea
                                    className="w-full text-black  outline-none rounded-lg border-gray-200 p-3 text-sm bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-100"
                                    placeholder="Message"
                                    rows={8}
                                    id="message"
                                    required
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-teal-700 px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Contact
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
