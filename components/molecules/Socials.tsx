import Social from '@/components/atoms/Social';
import { user } from '@/lib/utils';
import React from 'react';

const Socials: React.FC = () => {
    return (
        <div className="flex gap-[.75rem]">
            <Social icon="github" tip="xafn" link="https://github.com/xafn" />
            <Social icon="discord" tip={user.username} link={`https://discord.com/users/${user.id}`} />
            <Social icon="email" tip="hey@afn.im" link="mailto:hey@afn.im" />
            <Social icon="kofi" tip="affan" link="https://ko-fi.com/affan" />
        </div>
    )
}

export default Socials