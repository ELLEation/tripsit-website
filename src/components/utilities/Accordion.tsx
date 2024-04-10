'use client'
//Import JS dependancines
import { useState } from "react"
import Image from 'next/image'

//Import Assets
import down_chevron from '/public/assets/img/ui/down-chevron.png'

const Accordion = ({ children, title }) => {

    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive(prev => !prev)
    }

    return (
        <div 
            className="accordion w-full"
            onClick={toggle}
        >
            <div className="flex justify-between bg-slate-500 p-3 rounded">
            <h1 className="self-start text-white">{`${title}`}</h1>
            <Image 
                src={down_chevron}
                alt='Down Chevron'
                height={'16'}
                width={'16'}
                className="self-end"
            />
            </div>
            
            
            
            <div className={`${ isActive ? 'accordion-content glassmorphism' : 'hidden' }`}>
                {children}
            </div>
        
        </div>
    )
}

export default Accordion