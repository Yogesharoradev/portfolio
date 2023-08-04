'use client'

import { Space_Grotesk } from 'next/font/google'

import HeroImage from '@/components/atoms/HeroImage'
import Socials from '@/components/molecules/Socials'
// import '../../app/mixin.scss'

const font2 = Space_Grotesk({ subsets: ['latin'] })

const Hero: React.FC = () => {
    return (
        <>
            <section id="home" className="wrapper scroll-mt-[20rem] block sm:flex justify-between items-center mb-[2.75rem] md:mb-[5.75rem] mt-[4rem] lg:mt-[7rem]">
                <div className={font2.className}>
                    <h1 className='before:content-["///"] before:h-[300px] before:text-[175px] before:font-[700] before:-z-10 before:select-none before:translate-x-[-95%] before:translate-y-0 webkit_text_stroke before:opacity-[0.25] before:tracking-[-.1em] before:absolute
                     text-[96px] text-white font-semibold'>
                        Hemant
                    </h1>
                    <h4 className=''>
                        Hobbyist illustrator and designer.
                        <br className='' />
                        Attempting to program.
                    </h4>
                    <div className="">
                        {/* <Socials /> */}
                    </div>
                    {/* <Button side on: click={handleClick} on: keypress={handleClick}>Discover my work ↓</Button> */}
                </div>
                <HeroImage />
            </section >
        </>
    )
}

export default Hero