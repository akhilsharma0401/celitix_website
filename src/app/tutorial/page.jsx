import React from 'react'
import Image from 'next/image';
import { comingSoon } from '../../../public/assets/images';

const page = () => {
    return (
        <div className="bg-[#f7ebfc] w-full h-screen flex justify-center items-center">
            <Image
                src={comingSoon}
                alt="Coming Soon"
                className="max-w-full max-h-full object-contain"
            />
        </div>
    )
}

export default page
