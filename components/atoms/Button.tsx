import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {

    return (
        <button
            style={{ transition: 'filter 0.2s var(--bezier-one), transform 0.5s var(--bezier-one)' }}
            className='rounded-[16px] flex items-center justify-center relative w-full sm:w-max cursor-pointer bg-neutral_one select-none mt-5 py-4 px-8 md:py-5 md:pr-8 md:pl-12 text-yellow font-[300] text-base md:text-[1.6rem] font-jetbrains tracking-[-.075em] border border-neutral_four active:scale-[95%] hover:brightness-[110%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow'
        >
            <div
                className='hidden md:block absolute rounded-tl-[16px] rounded-bl-[16px] top-0 left-0 content-[""] h-full w-[1.6rem] bg-yellow'
            />
            {children}
        </button>
    );
};

export default Button;
