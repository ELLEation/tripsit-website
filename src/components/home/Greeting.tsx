//Import JS dependancies
import Link from 'next/link'
import Image from 'next/image'

//Import assets
import logo from '/public/assets/img/logo.png'

const Greeting = ({}) => {

    return (
        <section id='greeting' className="w-full flex-center flex-col">
            <Image
                src={logo}
                alt='TripSit logo'
            />
            <p className="desc text-center mt-3">
                Harm Reduction Through Education!
            </p>
            <Link
                href="/webchat"
                className='black_btn my-6'
            >
                I want to talk to a tripsitter.
            </Link>
            <div className='grid grid-cols-1 gap-16 w-full mt-12 md:grid-cols-4'>
                <div className='glassmorphism transition ease-in-out duration-300 hover:scale-110'>
                    <Link href="/combo">
                        <h4 className='list-title'>Compare drug combos</h4>
                        <p className='mt-3'>Explore our interactive chart detailing the effects of combining popular drugs for informed decisions.</p>
                    </Link>
                </div>
                <div className='glassmorphism transition ease-in-out duration-300 hover:scale-110'>
                    <Link href="/factsheets">
                        <h4 className='list-title'>Get drug info</h4>
                        <p className='mt-3'>Dive deep into our detailed factsheets for comprehensive insights on drug dosages, durations, and more.</p>
                    </Link>
                </div>
                <div className='glassmorphism transition ease-in-out duration-300 hover:scale-110'>
                    <Link href="https://discord.gg/tripsit">
                        <h4 className='list-title'>Join the Discord</h4>
                        <p className='mt-3'>Be part of our vibrant community! Dive into our Discord, the hub where all the magic happens and plans come to life.</p>
                    </Link>
                </div>
                <div className='glassmorphism transition ease-in-out duration-300 hover:scale-110'>
                    <Link href="https://learn.tripsit.me">
                        <h4 className='list-title'>Take a course</h4>
                        <p className='mt-3'>Unlock invaluable skills with our complementary learning platform, beginning with our flagship course 'Intro to TripSitting'.</p>
                    </Link>
                </div>
            </div>
        </section>
    )

}

export default Greeting