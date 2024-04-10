'use client'

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';
import { Router } from 'next/router';

const CreateDrug = () => {

    const router = useRouter();
    
    const { data: session } = useSession();

    const [submitting, setSubmitting] = useState(false);
    const [drug, setDrug] = useState({
        name: '',
        summary: '',
        categories: [],
    });

    const createDrug = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try{

            if(!session) {
                console.log('No active session :(')

                return
            }

            const response = await fetch('/api/drugs/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: drug.name,
                    summary: drug.summary,
                    categories: drug.categories,
                }),
                credentials: 'include'
            })

            if(response.ok){
                router.push('/')
            }

        } catch (error) {
            console.log(error)
        } finally{
            setSubmitting(false)
        }
    }

    return(
        <Form
            type="Create"
            drug={drug}
            setDrug={setDrug}
            submitting={submitting}
            handleSubmit={createDrug}
        />
    )
}

export default CreateDrug