import { cn } from '@/lib/utils';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavProps {
    href: string;
    section: string;
    isSelected: boolean;
}

const Nav: React.FC<NavProps> = ({ href, section, isSelected }) => {
    const pathname = usePathname()

    async function handleClick() {
        if (pathname !== '/') {
            window.location.href = '/';
        }

        const el = document.querySelector(href);
        if (!el) return;
        el.scrollIntoView(true);
    }

    return (
        <li className={cn('no-underline list-none font-jetbrains')}>
            <div
                onClick={handleClick}
                className='bg-transparent hover:bg-transparent border-none text-white_two text-[1.1rem] select-none flex flex-col items-center gap-[.75rem] py-[13px] px-[25px] rounded-[100px] cursor-pointer md:hover:bg-neutral_four group'
                style={{
                    transition: 'background-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
            >
                <div
                    className={cn("md:hidden delay-[.3s] py-[6px] px-[24px] rounded-[100px] md:p-0", {
                        'bg-neutral_four': isSelected,
                    })}
                    style={{
                        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                >
                    <Image
                        className={cn('scale-[0.95] delay-[.3s] group-hover:text-white group-hover:opacity-100 group-active:opacity-100 flex items-center justify-center opacity-50', {
                            'opacity-100 text-white': isSelected,
                        })}
                        src={`/icons/${section === '/' ? 'home' : section}.svg`}
                        alt={section}
                        width={24}
                        height={24}
                        style={{
                            transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }}
                    />
                </div>
                <h5
                    className={cn('delay-[.5s] group-hover:text-white group-hover:opacity-100 opacity-80', {
                        'text-white opacity-100': isSelected,
                    })}
                    style={{
                        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                >
                    {section}
                </h5>
            </div>
        </li>
    )
}

export default Nav