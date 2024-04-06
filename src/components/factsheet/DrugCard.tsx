'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react'
import { usePathName, usePathname, useRouter } from 'next/navigation';

const DrugCard = ({ drug, handleTagClick, handleEdit, handleDelete }) => {

    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();

    const [copied, setCopied] = useState('');

    //Function can be used to copy contents of a card (alternatively I think this could be used to link the drug factsheet instead)
    const handleCopy = () => {
        setCopied(drug.promt)
        navigator.clipboard.writeText(drug.prompt)
        setTimeout(() => setCopied(""), 3000)
    }

    drug.creator = {email: 'lorem ipsum', username: 'test'}

    return (
        <div className='prompt_card'>
            <div className='flex justify-between items-start gap-5'>
                <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
                    <Image 
                        src='/assets/pill.png'
                        alt="image"
                        width={40}
                        height={40}
                        className='rounded-full object-contain'
                    />
                    <div className='flex flex-col'>
                        <h3 className='font-satoshi font-semibold text-gray-900'>
                            {drug.pretty_name}
                        </h3>
                        <p className='font-inter text-sm text-gray-500'>
                            {drug.creator.email}
                        </p>
                    </div>
                </div>
            </div>
            <p className='my-4 font-satoshi text-sm text-gray-700'>
                {drug.summary}
            </p>
            <div className='flex flex-wrap'>
            { //Iterate over each category and add it as a tag
                drug.categories.map((category, index) => (
                    <span key={index} className='font-inter pr-1 text-sm blue_gradient cursor-pointer'
                        onClick={() => handleTagClick && handleTagClick(category)}>
                        #{category}
                    </span>
            ))
            }
            </div>
            { //Handles logic for deleting/editing
            session?.user.role === 'admin' && (
                <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
                    <p className="font-inter text-sm green_gradient cursor-pointer"
                       onClick={handleEdit}
                    >
                        Edit
                    </p>
                    <p className="font-inter text-sm orange_gradient cursor-pointer"
                       onClick={handleDelete}
                    >
                        Delete
                    </p>
                </div>
            )}
        </div>
    )
}

export default DrugCard