'use client'

import { useState } from 'react';

import Cursor from '@/components/atoms/Cursor';
import NavHost from '@/components/molecules/NavHost';

export default function PageLayout({ children }: { children: React.ReactNode }) {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(1);
    const [timeOut, setTimeOut] = useState<ReturnType<typeof setTimeout>>()

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
        setOpacity(1);

        clearTimeout(timeOut);
        setTimeOut(setTimeout(() => {
            setOpacity(0);
        }, 2000))
    };

    return (
        <html lang="en">
            <body className='font-spacegrotesk'>
                <div
                    onMouseMove={onMouseMove}
                    onMouseDown={() => setScale(1.25)}
                    onMouseUp={() => setScale(1)}
                >
                    <NavHost />
                    <Cursor
                        mouseX={mouseX}
                        mouseY={mouseY}
                        scale={scale}
                        opacity={opacity}
                    />
                    {children}
                </div>
            </body>
        </html>
    )
}

