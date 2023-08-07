'use client'

import React, { useEffect, useState } from 'react';

import Tooltip from '@/components/atoms/Tooltip';
import Link from 'next/link';
import RichPresence from '../molecules/RichPresence';

const About: React.FC = () => {
    const [age, setAge] = useState<ReturnType<typeof getAge>>()

    // i didnt write this idk
    const getAge = () => {
        let birthDate = new Date('2003/11/16');
        const ageMs = Date.now() - birthDate.getTime();
        const preciseAge = (ageMs / 31536000000).toFixed(10);
        return preciseAge;
    };

    useEffect(() => {
        setAge(getAge())
        setInterval(() => {
            setAge(getAge())
        }, 1000);
    }, [])

    return (
        <section id="about" className="wrapper flex flex-col md:flex-row mb-24 md:grid grid-cols-[1fr_1fr] md:items-center gap-16">
            <div>
                <RichPresence />
            </div>
            <div className="relative leading-[1.75rem] before:">
                <h2 className='md:hidden mb-4 md:mt-4 md:mb-0'>bio</h2>
                <p>
                    Hey there, I&rsquo;m Hemant! :] I&rsquo;m a{" "}
                    <Tooltip tip={age!}>
                        <span className='bio_span'>{Math.floor(Number(age))}</span>
                    </Tooltip>{" "}
                    year old digital artist and graphic/UI designer based in Canada. I&rsquo;ve taken art seriously since{" "}
                    <span className='bio_span'>2017</span>, and have been doodling silly anime characters since <span className='bio_span'>2020</span>.
                    Recently, however, I&rsquo;ve grown a knack for programming. I like contributing to{" "}
                    <Tooltip tip="🤓">
                        <Link className='no-underline' href="https://github.com/xafn" target="_blank" rel="noreferrer">
                            <span className='bio_span'>open source</span>
                        </Link>
                    </Tooltip>{" "}
                    as a web developer, which is probably the reason why you&rsquo;ve ended up here. Currently struggling
                    with Svelte and Typescript.
                </p>
            </div>
        </section>
    )
}

export default About