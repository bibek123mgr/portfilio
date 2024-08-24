"use client"
import Divider from './Divider';
import { SiTaichigraphics } from "react-icons/si";
import { CgIfDesign } from "react-icons/cg";
import { MdWeb, MdEditSquare } from "react-icons/md";

const About = () => {
    return (
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white text-center">
            <div className="mx-auto max-w-screen-xl">
                <Divider title='About' />
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                    I'm bibek, a passionate developer with a strong interest in JavaScript. I love exploring new technologies and solving problems, and I'm eager to learn and grow in the field of web development.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 items-center lg:text-left lg:flex-1">
                    <div className="space-y-8 max-w-sm mx-auto lg:mx-0 lg:text-left lg:col-start-3">
                        <div>
                            <h3 className="text-xl font-semibold text-teal-600 flex gap-2"><span><MdWeb /></span>Web Development</h3>
                            <p className="text-gray-600">
                                Proin gravida nibh vel velit auctor aliquet aks Aenean sollicitudin, lorem quis.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-teal-600 flex gap-2"> <span><SiTaichigraphics /></span>Graphics Design</h3>
                            <p className="text-gray-600">
                                Proin gravida nibh vel velit auctor aliquet aks Aenean sollicitudin, lorem quis.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <div className="relative w-48 h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden bg-blue-100 mx-auto">
                            <img src="/about.png" alt="Profile Picture" />
                        </div>
                    </div>

                    <div className="space-y-8 max-w-sm mx-auto lg:mx-0 ">
                        <div>
                            <h3 className="text-xl font-semibold text-teal-600 flex gap-2"><span><MdEditSquare /></span>Brand Design</h3>
                            <p className="text-gray-600">
                                Proin gravida nibh vel velit auctor aliquet aks Aenean sollicitudin, lorem quis.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-teal-600 flex gap-2"> <span><CgIfDesign /></span>UI/UX Design</h3>
                            <p className="text-gray-600">
                                Proin gravida nibh vel velit auctor aliquet aks Aenean sollicitudin, lorem quis.
                            </p>
                        </div>
                    </div>
                </div>
                {/* 
                <div className="grid grid-cols-1 md:grid-cols-3 mt-12 ">
                    <div>
                        <h3 className="text-3xl font-bold text-teal-600">0 Years</h3>
                        <p className="text-gray-600">Experience</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-teal-600">0</h3>
                        <p className="text-gray-600">Happy Clients</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-teal-600">0</h3>
                        <p className="text-gray-600">Delivered Projects</p>
                    </div>
                </div> */}
            </div>
        </section>

    );
};

export default About;
