// Tooltip.tsx
import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

interface TooltipProps {
    tip: string;
    children: React.ReactNode;
}

// const TooltipWrapper = styled.div`
//   position: relative;
//   display: inline-block;

//   &:hover .tooltip {
//     opacity: 1;
//     visibility: initial;
//     margin-top: -8px;
//   }
// `;

// const TooltipSpan = styled.span`
//   position: absolute;
//   display: inline-block;
//   white-space: nowrap;
//   opacity: 0;
//   visibility: hidden;
//   transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, margin-top 0.2s ease-in-out;
//   left: 50%;
//   top: 0%;
//   line-height: normal;
//   transform: translate(-50%, -120%);
//   padding: 0.15rem 0.5rem;
//   border-radius: 6px;
//   background-color: var(--yellow);
//   color: var(--neutral-one);
//   font-size: 0.9rem;
//   font-family: var(--font-two);
//   font-weight: 300;
//   letter-spacing: -0.075em;

//   // the little triangle below the tooltip v
//   &::after {
//     border-left: solid transparent 10px;
//     border-right: solid transparent 10px;
//     border-top: solid var(--yellow) 10px;
//     bottom: -8px;
//     content: ' ';
//     height: 0;
//     width: 0;
//     left: 50%;
//     margin-left: -10px;
//     position: absolute;
//   }

//   &.active {
//     opacity: 1;
//     visibility: initial;
//     margin-top: -8px;
//   }
// `;

const Tooltip: React.FC<TooltipProps> = ({ tip, children }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <>
            {loaded && tip ? (
                <div className="tooltip-wrapper">
                    <span className={`tooltip ${active ? 'active' : ''}`}>
                        {tip}
                    </span>
                    <span className="tooltip-slot">
                        <slot />
                    </span>
                </div>
            ) : (
                <slot />
            )}
        </>
    );
};

export default Tooltip;
