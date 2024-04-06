'use client'

//Import JS dependancies
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const About = ({}) => {

    //State to determine if more info is shown or not.
    const [aboutMore, setAboutMore] = useState(false);

    //Change if whether or not the more info box is shown.
    const isActive = aboutMore ? "" : "hidden";

    const toggleMenu = () => {
        setAboutMore(prev => !prev)
    }

    return (
        <section id='about' className="w-full flex-center flex-col mt-16">
            <div className='text-center'>
                <h1 className='section-title'>ABOUT US</h1>
                <p className='mt-3 desc'>In an era where assistance often doesn't measure up, TripSit emerges as the beacon of hope. We're driving forward with a mission to dismantle misconceptions about drug use and arm individuals with the tools they need for safer experiences.</p>
            </div>
            <div className='grid grid-cols-1 gap-16 w-full mt-6 md:grid-cols-2'>
                <div>
                    <h4 className='list-title'>Our foundational principles are clear-cut:</h4>
                    <ul>
                        <li> - Accept that people will use substancs, regardless of legality or social stigma.</li>
                        <li> - Know it is possible to use substances while reducing harmful practices.</li>
                        <li> - Conviction that informed education is the correrstone for harm mitigaiton.</li>
                    </ul>
                </div>
                <div>
                    <p>At TripSit, our emphasis lies in fostering open conversations and enacting harm reduction methodologies. Beyond championing essentials like test kits, we provide a roadmap for more prudent drug interactions. We've cultivated a platform that promotes discourse from scientific, medical, and philosophical angles on drugs, offering counsel rooted in our shared journeys.</p>
                </div>
            </div>
            <button
                onClick={toggleMenu}
                className='black_btn mt-6'
            >
                    Learn More
            </button>
            <div className={`glassmorphism mt-3 ${isActive}`}>
                <p className='mb-3'>In an era where assistance often doesn't measure up, TripSit stands as a beacon of hope. We're passionately driven to challenge drug-related stigmas and empower individuals with the tools they need for safer experiences.</p>
                <p className='mb-3'>At the heart of TripSit is our commitment to open dialogue and the practical application of harm reduction strategies. Beyond championing tools like test kits, we provide a roadmap for informed and safer drug interactions. Our platform is a hub for discourse on drugs from scientific, medical, and philosophical viewpoints, offering insights rooted in our collective journeys.</p>
                <p className='mb-3'>With the understanding that people will engage with substances irrespective of their legal status, our goal is to minimize the dangers of uninformed consumption. Our umbrella of support ranges from offering a listening ear and guidance on dosage to suggesting avenues for recovery.</p>
                <p className='mb-3'>Our vibrant community features a 24/7 live chat for on-the-spot help and a drug-knowledge wiki for swift facts. Additionally, our live radio service offers musical companionship to resonate with our users.</p>
                <p className='mb-3'>We're a passionate group of volunteers, not certified professionals. Our suite of services is designed to assist those seeking information, an unbiased ear, testing resources, or just a welcoming space.</p>
                <p className='mb-3'>TripSit doesn't endorse drug consumption. Rather, our network serves individuals who've chosen to use substances, emphasizing their well-being. We ardently advise against risky drug mixtures and maintain a strict policy against discussions of self-harm or suicide.</p>
                <p className='mb-3'>While we don't replace the expertise of medical professionals, our mission is to offer guidance and a positive anchor to those already exploring substances. We educate about potential adverse effects, addiction dangers, and risky drug combinations.</p>
                <p className='mb-3'>We're a sanctuary for those wary of seeking guidance due to societal prejudices. By offering advice, unwavering support, and positivity, and by confronting outdated views on substance use, TripSit endeavors to deliver potentially life-saving knowledge and tools.</p><p>A heartfelt message from the TripSit family: Prioritize safety and knowledge.</p>
                <p className='mb-3'>From all of us at TripSit: Stay safe and dose responsibly.</p>
            </div>
        </section>
    )

}

export default About