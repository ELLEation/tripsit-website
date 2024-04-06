import Link from "next/link"
import Image from "next/image"

const Footer = ({}) => {

    return(
        <footer className="mt-16 w-full">
            <div className="grid grid-cols-2 gap-16 w-full md:grid-cols-4">
                <div>
                    <span className="section-title">TripSit</span>
                </div>
                <div>
                    <span className='list-title'>Useful Links</span>
                    <ul className="mt-3">
                        <li>
                            <Link
                            href={``}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                            href={``}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                            href={``}
                            >
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link
                            href={``}
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                            href={``}
                            >
                                Team Portal
                            </Link>                            
                        </li>
                    </ul>
                </div>
                <div>
                    <span className='list-title'>Our Services</span>
                    <ul className="mt-3">
                        <li>
                            <Link
                            href={``}
                            >
                                Combo App
                            </Link>
                        </li>
                        <li>
                            <Link
                            href={``}
                            >
                                Factsheets
                            </Link>                            
                        </li>
                        <li>
                            <Link
                            href={``}
                            >
                                Live Chat
                            </Link>
                        </li>
                        <li>
                            <Link
                            href={``}
                            >
                                Android App
                            </Link>                            
                        </li>
                        <li>
                            <Link
                            href={``}
                            >
                                Learning Portal
                            </Link>                            
                        </li>
                    </ul>
                </div>
                <div>
                    <span className='list-title'>Contact Us</span>
                    <ul className="mt-3">
                        <li>
                            <Image
                            src=''
                            alt=''
                            >
                            </Image>
                            <Link
                            href={`https://discord.gg/tripsit`}
                            >
                                Discord
                            </Link>
                        </li>
                        <li>
                            <Image
                            src=''
                            alt=''
                            >
                            </Image>
                            <Link
                            href={``}
                            >
                                Twitter
                            </Link>
                        </li>
                        <li>
                            <Image
                            src=''
                            alt=''
                            >
                            </Image>
                            <Link
                            href={``}
                            >
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Image
                            src=''
                            alt=''
                            >
                            </Image>
                            <Link
                            href={``}
                            >
                                Reddit
                            </Link>
                        </li>
                        <li>
                            <Image
                            src=''
                            alt=''
                            >
                            </Image>
                            <Link
                            href={``}
                            >
                                Matrix
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between w-full mt-16">
                <div className="self-start">
                    <p>© Copyright TripSit. All Rights Reserved</p>
                    <p>Made with ❤️ by Moonbear and Team TripSit</p>
                </div>
                <div className="flex self-end">
                            <Link
                                href={`https://discord.gg/tripsit`}
                                className="black_btn"
                            >
                                D
                            </Link>
                            <Link
                                href={``}
                                className="black_btn"
                            >
                                T
                            </Link>                            
                            <Link
                                href={``}
                                className="black_btn"
                            >
                                F
                            </Link>    
                            <Link
                                href={``}
                                className="black_btn"
                            >
                                R
                            </Link>
                            <Link
                                href={``}
                                className="black_btn"
                            >
                                Ln
                            </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer