//Import JS dependancies
import Image from 'next/image'
import Link from 'next/link'

//Import Assets
import MAPS from '/public/assets/img/logos/maps.png'
import BlueLight from '/public/assets/img/logos/bluelight.jpg'
import EffectIndex from '/public/assets/img/logos/sei.png'
import DanceSafe from '/public/assets/img/logos/dancesafeYellow.png'
import PsychonautWiki from '/public/assets/img/logos/pw.png'
import rDrugs from '/public/assets/img/logos/rdrugs.png'


//List could be replaced with an API endpoint potentially and fetch it dynamically.
const friends = [
    {
        name: 'MAPS Logo',
        image: MAPS,
        url: 'https://maps.org/'
    },
    {
        name: 'BlueLight Logo',
        image: BlueLight,
        url: 'https://bluelight.org/xf/'
    },
    {
        name: 'EffectIndex Logo',
        image: EffectIndex,
        url: 'https://effectindex.com/'
    },
    {
        name: 'DanceSafe Logo',
        image: DanceSafe,
        url: 'https://dancesafe.org/'
    },
    {
        name: 'PsychonautWiki Logo',
        image: PsychonautWiki,
        url: 'https://psychonautwiki.org/wiki/Main_Page'
    },
    {
        name: 'r/Drugs Logo',
        image: rDrugs,
        url: 'https://reddit.com/r/drugs'
    },
]


const Friends = ({}) => {


    return (
        <section id='friends' className="w-full flex-center flex-col mt-16">
            <div className='center-text'>
                <h1 className='section-title'>TripSit is friends with...</h1>
            </div>
            <div className="grid grid-cols-1 gap-8 w-full mt-6 md:grid-cols-6">
                {
                friends.map( item  => (
                    <div className='relative h-48 w-full transition ease-in-out duration-300 hover:scale-110'>
                        <Link href={item.url}>
                            <Image
                                src={item.image}
                                alt={item.name}
                                className='w-full h-full object-contain'
                            >
                            </Image>
                        </Link>
                    </div>
                ))
                }
            </div>
        </section>
    )
}

export default Friends