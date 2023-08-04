// ParentComponent.tsx
import React from 'react';
import Tooltip from '@/components/atoms/Tooltip';
// import styled from 'styled-components';

interface ParentComponentProps {
    icon: string;
    link: string;
    tip: string;
}

const Social: React.FC<ParentComponentProps> = ({ icon, link, tip }) => {
    return (
        <Tooltip tip={tip}>
            <div>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={`icons/${icon}.svg`} alt={icon} />
                </a>
            </div>
        </Tooltip>
    );
};

export default Social;
