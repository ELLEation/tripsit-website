'use client'
import { useState, useEffect } from 'react'

const VolumetricCalculator = () => {

    //State to keep track of the solvent calculator inputs
    const [solvent, setSolvent] = useState({
        mg_ml: 0,
        mg: 0
    })

    //State to keep track of the concentration calculator inputs
    const [concentration, setConcentration] = useState({
        mg: 0,
        ml: 0
    })

    //State to keep track of the dosing calculator inputs
    const [dose, setDose] = useState({
        mg_ml: 0,
        mg: 0
    })

    //State to keep track of calculator outputs
    const [outputs, setOutputs] = useState({
        solvent: 0,
        concentration: 0,
        dose: 0
    })

    useEffect(() => {

        const calculateValues = () => {

            //Calculate values
            setOutputs({...outputs,
                solvent: solvent.mg / solvent.mg_ml,
                concentration: concentration.mg / concentration.ml,
                dose: dose.mg / dose.mg_ml
            })


        }

        calculateValues()
    }, [solvent, concentration, dose])

    return (
        <section>
            <div className='glassmorphism  m-3'>
                <h1 className='list-title'>
                    How much solvent (water) do you need?
                </h1>
                <div>
                    For a solution with
                    <input 
                        className='p-1 mx-1'
                        type='number'
                        size='6'
                        onChange={(e) => setSolvent({...solvent,
                            mg_ml: e.target.value})}
                    />
                    mg/ml, add 
                    <input
                        className='p-1 mx-1'
                        type='number'
                        size='6'
                        onChange={(e) => setSolvent({...solvent,
                            mg: e.target.value})}
                    />
                    mg of the substance to {outputs.solvent}ml of solvent
                </div>
            </div>
            <div className='glassmorphism  m-3'>
                <h1 className='list-title'>
                    What will the concentration of the solution be (mg/ml)?
                </h1>
                <div>
                    If you put
                    <input 
                        className='p-1 mx-1'
                        type='number'
                        size='6'
                        onChange={(e) => setConcentration({...concentration,
                            mg: e.target.value})}
                    />
                    mg of a substance in 
                    <input 
                        className='p-1 mx-1'
                        type='number'
                        size='6'
                        onChange={(e) => setConcentration({...concentration,
                            ml: e.target.value})}
                    />
                    ml of solvent, it will be {outputs.concentration}mg/ml
                </div>
            </div>
            <div className='glassmorphism m-3'>
                <h1 className='list-title'>
                    How much do you need to take?
                </h1>
                <div>
                    If you have a solution of 
                    <input 
                        className='p-1 mx-1'
                        type='number'
                        size='6'
                        onChange={(e) => setDose({...dose,
                            mg_ml: e.target.value})}
                    />
                    mg/ml, and want to take
                    <input 
                        className='p-1 mx-1'
                        type='number'
                        size='6'
                        onChange={(e) => setDose({...dose,
                            mg: e.target.value})}
                    />
                    mg, you need to take {outputs.dose}ml.
                </div>
            </div>
        </section>
    )
}

export default VolumetricCalculator