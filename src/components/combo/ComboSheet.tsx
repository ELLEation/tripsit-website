'use client'
//Import JS dependancies
import {useState, useEffect} from 'react'
import Link from 'next/link'

//Import components
import DrugCombination from '@components/combo/DrugCombination'

const ComboSheet = () => {

    //Example return from the API
    const drugs = [
        {
            id: 1,
            name: 'Alcohol'
        },
        {
            id: 2,
            name: 'Cannabis'
        },
        {
            id: 3,
            name: 'Cocaine'
        },
        {
            id: 4,
            name: 'Ketamine'
        },
        {
            id: 5,
            name: 'Adderall'
        },
        {
            id: 6,
            name: 'MDMA'
        },
        {
            id: 7,
            name: 'LSD'
        },
        {
            id: 8,
            name: 'MDA'
        },
        {
            id: 9,
            name: 'Mushrooms'
        },
        {
            id: 10,
            name: 'DMT'   
        },
        {
            id: 11,
            name: 'DMX'   
        },
        {
            id: 12,
            name: 'Valium'   
        }
    ]

    //Example return from the API
    const combos = [

        {
            "combo_id": 10,
            "substance_1": 1,
            "substance_2": 2,
            "notes": "No known issues",
            "status": 1,
            "substanceStatus": {
              "status_id": 1,
              "status": "Safe"
            },
            "substance1": {
              "substance_id": 1,
              "name": "Substance A",
            },
            "substance2": {
              "substance_id": 2,
              "name": "Substance B",
            },
            "substanceComboSources": [
              
            ]
          },
          {
            "combo_id": 20,
            "substance_1": 1,
            "substance_2": 3,
            "notes": "Should be avoided",
            "status": 2,
            "substanceStatus": {
              "status_id": 2,
              "status": "Dangerous"
            },
            "substance1": {
              "substance_id": 1,
              "name": "Substance A",
              // Other details...
            },
            "substance2": {
              "substance_id": 3,
              "name": "Substance C",
              // Other details...
            },
            "substanceComboSources": [
              // Any sources related to this combination
            ]
        }

    ]

    //State and function to handle list of selected drugs.
    const [selectedDrugs, setSelectedDrugs] = useState([])

    // Handle button click to toggle drugs by their name and id
    const toggleDrug = (drug) => {

        const drugIndex = selectedDrugs.findIndex((d) => d.id === drug.id);
    
        if (drugIndex !== -1) {

            // Remove the drug if it's already selected
            setSelectedDrugs(selectedDrugs.filter((_, index) => index !== drugIndex));

        } 
        else 
        {

            // Add the drug if it's not selected
            setSelectedDrugs([...selectedDrugs, drug]);

        }
    };

    return (
        <section className='w-full'>
            <div className="glassmorphism">
                <table>
                    <thead>
                        <tr>
                            <th className='px-3'>Grid</th>
                            {
                                selectedDrugs.map((drug) => (
                                    <th key={`${drug.id}-tht`} className='px-3'>
                                        {drug.name}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedDrugs.map((drug_1) => (

                                <tr className='text-center'>
                                    <th key={`${drug_1.id}-thl`} className='px-3'>
                                        {drug_1.name}
                                    </th>
                                    
                                    {
                                    selectedDrugs.map((drug_2) => (
                                        
                                            drug_1.id === drug_2.id ? (
                                                <td 
                                                key={`${drug_1.id}-td`}
                                                className='px-3 combo-self'
                                                >
                                                    {drug_1.name}
                                                </td>
                                            ) : (

                                                <DrugCombination                                                     
                                                    combos={combos}
                                                    drug_1={drug_1}
                                                    drug_2={drug_2}
                                                />
                                            
                                            )
                                        
                                    ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='mt-3'>
                <form className="relative w-full flex-center">
                    <input
                        type='text'
                        placeholder='Search for a drug'
                        required
                        className='search_input peer'
                    />
                </form>
                <div className='grid grid-cols-4 gap-3 mt-3'>
                        {
                            drugs.map((drug) => (
                                <button
                                    key={drug.id}
                                    className={`${ selectedDrugs.some(d => d.id === drug.id) ? 'black_btn' : 'outline_btn' }`}
                                    onClick={ () => toggleDrug(drug) }
                                >
                                    {drug.name}
                                </button>
                            ))
                        }
                </div>
            </div>
        </section>
    )
}

export default ComboSheet