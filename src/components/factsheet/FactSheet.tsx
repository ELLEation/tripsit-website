'use client'

import { useState, useEffect } from 'react'

import DrugCard from '@components/factsheet/DrugCard'

const DrugCardList = ({data, handleTagClick}) => {
    return (
        <div className='mt-16 prompt_layout'>
            {data.map( (drug) =>
                <DrugCard
                    key={drug.drugId}
                    drug={drug}
                    handleTagClick={handleTagClick}
                />
            )}
        </div>
    )
}

const FactSheet = () => {

    const [searchText, setSearchText] = useState('')
    const [drugs, setDrugs] = useState([]);

    const handleSearchChange = (e) => {

    }



    useEffect(() => {
        
        const fetchDrugs = async () => {
            const response = await fetch('/api/drugs');
            const data = await response.json();

            setDrugs(data);
        }

        fetchDrugs();
    }, [])

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type='text'
                    placeholder='Search for a tag or drug name'
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className='search_input peer'
                />

            </form>

            <DrugCardList
                data={drugs}
                handleTagClick={() => {}}
            />
        </section>
    )
}

export default FactSheet