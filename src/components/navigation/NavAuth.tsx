//Import JS Dependancies
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const NavAuth = ({ isMobile }) => {

    //Get users current auth session (if any)
    const {data: session} = useSession();

    //Get a list of OAuth providers (currently only google)
    const [providers, setProviders] = useState(null)

    //Effect loads a list of OAuth providers from Next Auth endpoint.
    useEffect(() => {
        const setupProviders = async () => {
            const response = await getProviders();
            setProviders(response)
        }

        setupProviders();

    }, [])

    return (
        <>
        {/* User logged in */}
        {
            session?.user ? (
            <>

                <button type="button" onClick={signOut} className='outline_btn'>
                    Sign Out
                </button>

                <Link href="/profile">
                    <Image 
                        src={session?.user.image}
                        alt="Profile"
                        width={37}
                        height={37}
                        className='rounded-full'
                    />
                </Link>
                
            </>
        ) : (
            <>
                {
                    providers && 
                        Object.values(providers).map( (provider) => 
                        (

                            <button 
                                type="button"
                                key={`${provider.name}_${isMobile}`}
                                onClick={() => signIn(provider.id)}
                                className='black_btn sm:mx-0 mx-4'
                            >
                                Sign In
                            </button>
        
                        )
                )}
            </>
        )}
        </>
    
    )

}

export default NavAuth