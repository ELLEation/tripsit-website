import '@styles/globals.css';

//Import Components
import Nav from '@components/navigation/Nav';
import AuthProvider from '@components/AuthProvider'
import Footer from '@components/navigation/Footer';

export const metadata = {
    title: "TripSit.Me",
    description: "Harm Reduction Through Education"
}

const RootLayout = ({ children }) => {

    return (
        <html lang='en'>
            <body>
                {/* AuthProvider Here */}
                <AuthProvider>
                <div className="main">
                    <div className="gradient" />
                </div>

                <main className='app'>
                    <Nav />
                    {children}
                    <Footer />
                </main>
                
                {/* AuthProvider Here */}
                </AuthProvider>
            </body>
        </html>
    )
}

export default RootLayout;