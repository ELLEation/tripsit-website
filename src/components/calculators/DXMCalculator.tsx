'use client'
import { useState, useEffect } from 'react'

const DXMCalculator = () => {

    const plateauModifier = {
        plateau_1: {
            min: 1.5,
            max: 2.5,
        },
        plateau_2: {
            min: 2.5,
            max: 7.5,
        },
        plateau_3: {
            min: 7.5,
            max: 15,
        },
        plateau_4: {
            min: 15,
            max: 20,
        },
    }

    //Values are mg/ml mg/oz mg/capsule
    const dxmOTCDrugs = [
        {   
            id: 0,
            name: 'RoboCough (ml)',
            value: 10, 
            type: 'HBr',
            unit: 'ml'
        },
        { 
            id: 1,
            name: 'Robitussin DX (oz)', 
            value: 88.5,
            type: 'HBr',
            unit: 'oz'
        },
        { 
            id: 2,
            name: 'Robitussin DX (ml)', 
            value: 3, 
            type: 'HBr',
            unit: 'ml'
        },
        { 
            id: 3,
            name: 'Robitussin Gelcaps (15 mg caps)', 
            value: 15,
            type: 'HBr',
            unit: 'capsules' 
        },
        { 
            id: 4,
            name: '30mg Gelcaps (30 mg caps)',
            value: 30, 
            type: 'HBr',
            unit: 'capsules'
        },
        { 
            id: 5,
            name: 'RoboTablets (30 mg tablets)',
            value: 40.9322,
            type: 'Pure',
            unit: 'capsules'
        },
        { 
            id: 6,
            name: 'Pure (mg)',
            value: 1, 
            type: 'Pure',
            unit: 'mg' 
        },
    ]

    const weightUnitModifier = {
        kg: 1,
        lbs: 0.4563
    }

    //State to render different controls based on mode.
    const [autoMode, setAutoMode] = useState(false)

    const [autoCalc, setAutoCalc] = useState({
        mg: 0,
        ml: 0
    })

    //State to control dosing calculation.
    const [dxmCalc, setDXMCalc] = useState({
        dxmConcentration: 10,
        weight: 180,
        weightModifer: 0.4563,
        dxmUnit: 'ml',
    });

    //State to render the calculated plateau dosing
    const [calculatedPlateaus, setPlateaus] = useState({
        plateau_1: {
            min: 0,
            max: 0,
        },
        plateau_2: {
            min: 0,
            max: 0,
        },
        plateau_3: {
            min: 0,
            max: 0,
        },
        plateau_4: {
            min: 0,
            max: 0,
        }
    })

    //Effect will calculate the dosing each time the state dxmCalc is updated with new info.
    useEffect(() => {

        const calculatePlateaus = () => {

            //Create copy of calculatedPlateaus
            const newPlateaus = {...calculatedPlateaus};

            //Iterate over plateau modifiers and recalculate dosing
            Object.keys(plateauModifier).forEach(key => {
                const plateau = plateauModifier[key];

                const plateauCalculationMin = Math.round( dxmCalc.weight * dxmCalc.weightModifer * plateau.min / dxmCalc.dxmConcentration )
                const plateauCalculationMax = Math.round( dxmCalc.weight * dxmCalc.weightModifer * plateau.max / dxmCalc.dxmConcentration )

                //Set updated values to our copy of the current calculatedPlateaus state
                if (newPlateaus[key]) {
                    newPlateaus[key].min = plateauCalculationMin;
                    newPlateaus[key].max = plateauCalculationMax;
                }
    
            })

            //Set state to the updated plateau dosing
            setPlateaus(newPlateaus)
        }
        
    calculatePlateaus()
    }
    ,[dxmCalc])

    //Effect responsible for calculating the concentration of DXM in solution
    useEffect(() => {

        const setConcentration = () => {
            if(autoMode){

                setDXMCalc({...dxmCalc,
                    dxmConcentration: autoCalc.mg / autoCalc.ml
                })

            }

        }
    
        setConcentration()
    }
    ,[autoCalc])

    //Decodes substance id from the substance dictionary
    const decodeDXMSubstance = (id) => {

        setDXMCalc({...dxmCalc,
                dxmConcentration: dxmOTCDrugs[id].value,
                dxmUnit: dxmOTCDrugs[id].unit
            })

    }

    //Decodes weight modifier from the weight modifier dictionary
    const decodeWeightModifier = (id) => {
        
        setDXMCalc({...dxmCalc,
            weightModifer: weightUnitModifier[id]
        })

    }

    //Function to toggle if auto mode is enabled or not
    const toggleMode = () => {
        setAutoMode(prev => !prev)
    }

    return (
        <section>
            <div className='pb-3'>
                {
                    autoMode ? 
                    (
                        <>
                        <h1 className='list-title'>Manual Mode:</h1>
                        <p>Note: Please make sure your product does not contain the following: Acetaminophen(Paracetamol), Guaifenesin, Antihistamines or Pseudoephedrine. This is still intended to be used with DXM hBr product only.</p>
                        </>
                    ) : (
                        <>
                        <h1 className='list-title'>Auto Mode:</h1>
                        <p>NOTE: All products listed here contain DXM hBr as the sole active ingredient.</p>
                        </>
                    )
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="flex justify-between glassmorphism">
                    <div className='self-start'>
                        <label>
                            I weigh
                            <input
                                className='ml-2'
                                placeholder='180'
                                size='6'
                                type='number'
                                onChange={(e) => setDXMCalc({...dxmCalc,
                                    weight: e.target.value})}
                            />
                        </label>
                        <select 
                            className='ml-2'
                            onChange={(e) => decodeWeightModifier(e.target.value)}
                        >
                            <option value={`lbs`}>Lbs</option>
                            <option value={`kg`}>Kg</option>
                        </select>
                    </div>
                    <div className='self-end'>
                        <button 
                            className='black_btn'
                            onClick={toggleMode}
                        >
                            {autoMode ? `Manual` : `Auto`}
                        </button>
                    </div>
                </div>
                <div className='glassmorphism'>
                    <label>
                        I want to take: 

                        {
                        autoMode ? 
                        (
                            <>
                            <input 
                                type='number'
                                size='6'
                                className='mx-1'
                                onChange={(e) => setAutoCalc({...autoCalc, 
                                    mg: e.target.value})}
                            /> mg dxm per 
                            <input 
                                type='number'
                                size='4'
                                className='mx-1'
                                onChange={(e) => setAutoCalc({...autoCalc,
                                    ml: e.target.value})}
                            /> ml
                            </>
                        ) 
                        : 
                        (
                        <select 
                            className='ml-2'
                            onChange={(e) => decodeDXMSubstance(e.target.value)}
                        >
                            {
                            dxmOTCDrugs.map( item => (
                                <option 
                                value={item.id}
                                >
                                    {item.name}
                                </option>
                                ))
                            }
                        </select>
                        )}
                    </label>
                </div>
            </div>
            <div className='flex-center glassmorphism mt-4'>
                <table className='table-auto'>
                    <thead>
                        <tr>
                            <th className='px-3'>Plateau</th>
                            <th className='px-3'>Minimum Dose</th>
                            <th className='px-3'>Maximum Dose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='px-3'>1st</td>
                            <td className='px-3'>{`${calculatedPlateaus.plateau_1.min} ${dxmCalc.dxmUnit}`}</td>
                            <td className='px-3'>{`${calculatedPlateaus.plateau_1.max} ${dxmCalc.dxmUnit}`}</td>
                        </tr>
                        <tr>
                            <td className='px-3'>2nd</td>
                            <td className='px-3'>{`${calculatedPlateaus.plateau_2.min} ${dxmCalc.dxmUnit}`}</td>
                            <td className='px-3'>{`${calculatedPlateaus.plateau_2.max} ${dxmCalc.dxmUnit}`}</td>
                        </tr>
                        <tr>
                            <td className='px-3'>3rd</td>
                            <td className='px-3'>{`${calculatedPlateaus.plateau_3.min} ${dxmCalc.dxmUnit}`}</td>
                            <td className='px-3'>{`${calculatedPlateaus.plateau_3.max} ${dxmCalc.dxmUnit}`}</td>
                        </tr>
                        <tr>
                            <td className='px-3'>4th</td>
                            <td className='px-3'>{`${calculatedPlateaus.plateau_4.min} ${dxmCalc.dxmUnit}`}</td>
                            <td className='px-3'>{`${calculatedPlateaus.plateau_4.max} ${dxmCalc.dxmUnit}`}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default DXMCalculator