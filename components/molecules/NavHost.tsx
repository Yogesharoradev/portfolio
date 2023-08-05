import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Nav from '../atoms/Nav';

const NavHost: React.FC = () => {
    // getting the scroll position
    const [y, setY] = useState(0);

    const handleNavigation = () => {
        const windowScroll = window.scrollY;
        console.log(windowScroll)
        setY(windowScroll);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, []);

    return (
        <nav className='flex items-center justify-center bg-bg_color'>
            <div
                className={cn('bottom-0 top-auto p-0 bg-[#1a1616] w-full md:w-[40rem] rounded-[12px] text-center items-center fixed md:top-0 md:bottom-auto md:py-5 z-[15] md:bg-bg_color', {
                    'md:border-none md:border-b-yellow_opacity': y < 20,
                    'md:border-b-[1.5px] md:border-b-yellow_opacity md:py-2 md:mt-2 md:w-[34rem] md:bg-neutral_five md:backdrop-blur-[15px] md:webkit_backdrop_filter_15px': y > 20
                })}
                style={{
                    transition: 'all 0.5s ease'
                }}
            >
                <ul className='flex gap-[2vw] md:gap-16 justify-evenly md:justify-center'>
                    <Nav href="#home" section="/" isSelected={y < 350} />
                    <Nav href="#about" section="about" isSelected={y > 350 && y < 675} />
                    <Nav href="#aw" section="work" isSelected={y > 675} />
                </ul>
            </div>
        </nav>
    )
}

export default NavHost