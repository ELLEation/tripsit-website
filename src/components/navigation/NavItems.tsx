//Import JS Libraries
import Link from 'next/link';


//Import Components
import NavDropDown from '@components/navigation/NavDropDown';


//Define Dropdown Menus
const menuItems = [
    {
        title: "Home",
        route: "#greeting"
    },
    {
        title: "About",
        route: "#about"
    },
    {
        title: "Resources",
        children: [
            {
                title: "Drug Info",
                children: [
                    {
                        title: 'Wiki',
                        route: 'https://wiki.tripsit.me'
                    },
                    {
                        title: 'Factsheets',
                        route: '/factsheets'
                    },
                    {
                        title: 'Combo App',
                        route: '/combo'
                    },
                    {
                        title: 'Printing Information',
                        route: '#faq'
                    },
                    {
                        title: 'Drug Users Handbook',
                        route: 'https://www.reddit.com/r/Drugs/comments/131q1yb/the_drug_users_bible_download_it_free_of_charge/'
                    }
                ],
            },
            {
                title: "Calculators",
                children: [
                    {
                        title: 'DXM Conversion',
                        route: '/dxm'
                    },
                    {
                        title: 'Volumetric',
                        route: '/volumetric'
                    },
                    {
                        title: 'Benzo Conversion',
                        route: '/benzos'
                    }
                ]
            },
            {
                title: "Test Kits",
                children: [
                    {
                        title: 'DoseTest (20% off with code "tripsit")',
                        route: 'https://dosetest.com/tripsit'
                    },
                    {
                        title: 'Reagent Tests UK (10% off with code "tripsitwiki")',
                        route: 'https://www.reagent-tests.uk/shop/'
                    },
                    {
                        title: 'ProTest (10% off with code "TripSit")',
                        route: 'https://protestkit.eu/shop/?coupon_code=tripsit'
                    },
                    {
                        title: 'EZ Test (10% off with code "TripsitAusOct")',
                        route: 'http://ez-test.com.au/'
                    },
                    {
                        title: 'Test Kit Instructions',
                        route: 'https://dancesafe.org/testing-kit-instructions/'
                    },
                    {
                        title: 'Fentanyl Strip Guide',
                        route: 'https://dancesafe.org/you-may-be-using-fentanyl-testing-strips-incorrectly/'
                    },
                ]
            },
            {
                title: 'Learning Platform',
                route: 'https://learn.tripsit.me/'
            },
            {
                title: 'Android App',
                route: 'https://play.google.com/store/apps/details?id=me.tripsit.mobile&hl=en_US&gl=US'
            },
            {
                title: 'Service Status',
                route: 'https://uptime.tripsit.me/status/default'
            },
        ]
    },
    {
        title: 'Guides',
        children: [
            {
                title: 'Harm Reduction',
                children: [
                    {
                        title: 'Psychedelic Myths',
                        route: 'https://wiki.tripsit.me/wiki/Common_Misconceptions_About_Psychedelics'
                    },
                    {
                        title: 'Test Kits',
                        route: 'https://wiki.tripsit.me/wiki/Test_Kits'
                    },
                    {
                        title: 'Scales',
                        route: 'https://wiki.tripsit.me/wiki/Scales'
                    },
                    {
                        title: 'Storage',
                        route: 'https://wiki.tripsit.me/wiki/Storage'
                    },
                    {
                        title: 'Laboratory Analysis',
                        route: 'https://wiki.tripsit.me/wiki/Sources_for_Laboratory_Analysis'
                    },
                ]
            },
            {
                title: 'TripSitting',
                children: [
                    {
                        title: 'Intro to TripSitting',
                        route: 'https://learn.tripsit.me'
                    },
                    {
                        title: 'Hallucinogens',
                        route: 'https://wiki.tripsit.me/wiki/Hallucinogens'
                    },
                    {
                        title: 'TripSit in real life',
                        route: 'https://wiki.tripsit.me/wiki/How_To_Tripsit_In_Real_Life'
                    },
                    {
                        title: 'TripSit online',
                        route: 'https://wiki.tripsit.me/wiki/How_To_Tripsit_Online'
                    },
                    {
                        title: 'Deal with a bad trip',
                        route: 'https://wiki.tripsit.me/wiki/How_To_Deal_With_A_Bad_Trip'
                    }
                ]
            },
            {
                title: 'Recovery',
                children: [
                    {
                        title: 'Stimulant Comedowns',
                        route: 'https://wiki.tripsit.me/wiki/Quick_Guide_to_Stimulant_Comedowns'
                    },
                    {
                        title: 'HPPD',
                        route: 'https://wiki.tripsit.me/wiki/HPPD'
                    },
                    {
                        title: 'Guide to Withdrawls',
                        route: 'https://wiki.tripsit.me/wiki/Guide_to_Withdrawals'
                    },
                    {
                        title: 'Addiction',
                        route: 'https://wiki.tripsit.me/wiki/Addiction'
                    },
                    {
                        title: 'Professional Help Resources',
                        route: 'https://wiki.tripsit.me/wiki/Professional_Help_Resources'
                    }
                ]
            },
            {
                title: 'Dosing',
                children: [
                    {
                        title: 'Volumetric Dosing',
                        route: 'https://wiki.tripsit.me/wiki/Quick_Guide_to_Volumetric_Dosing'
                    },
                    {
                        title: 'Rectal Administration (Plugging)',
                        route: 'https://wiki.tripsit.me/wiki/Quick_Guide_to_Plugging'
                    },
                    {
                        title: 'Reducing Snorting Pain',
                        route: 'https://wiki.tripsit.me/wiki/Reducing_Pain_Caused_by_Insufflation'
                    },
                    {
                        title: 'Cannabinoid Eliquid',
                        route: 'https://wiki.tripsit.me/wiki/Cannabinoid_Eliquid'
                    },
                    {
                        title: 'Cold Water Extraction',
                        route: 'https://wiki.tripsit.me/wiki/Cold_Water_Extraction'
                    },
                    {
                        title: 'Acid-to-base Reduction',
                        route: 'https://wiki.tripsit.me/wiki/Zim%27s_Clarified_ATB_Hybrid_Salt_Tek'
                    }
                ]
            }
        ]
    },
    {
        title: 'Volunteer',
        route: '/#volunteer'
    },
    {
        title: 'FAQ',
        route: '/#faq'
    },
    {
        title: 'Updates',
        route: 'https://updates.tripsit.me'
    }
]


const NavItems = ({  }) => {
 


    return (
        <>
        {
            //Iterates over the object, checks if it has a children property, then passes it to the NavDropDown component
            menuItems.map( (item) => {
                return item.hasOwnProperty("children") ? (
                    <NavDropDown menuItem={item} />
                ) : (
                    //If the children property doesn't exist it will simply create a link
                    <Link 
                        href={item?.route || ""}
                        className='sm:px-0 px-4'
                        >
                        {item.title}
                    </Link>
                )
            })

        }
        </>
    )

}

export default NavItems