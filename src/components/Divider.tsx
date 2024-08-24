import React from 'react';

type Props = {
    title: string;
}

const Divider = (props: Props) => {
    return (
        <span className="relative flex justify-center mb-10">
            <div
                className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-75"
            ></div>

            <span className="relative z-10 bg-white px-6 text-teal-600 text-4xl">{props.title}</span>
        </span>
    );
}

export default Divider;
