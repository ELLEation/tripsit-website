import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

//Import Assets
import down_chevron from '/public/assets/img/ui/down-chevron.png'

const NavDropDownItem = ({ item, toggleSubMenu, isActive }) => {

    //State to handle if subMenu is shown
    const [subMenuState, setSubMenuState] = useState(false);

    //Effect checks if the active state of the submenu is true or false then allows it to render or not.
    useEffect( () => {
        if (!isActive) {
            setSubMenuState(false)
        }
        else
        {
            setSubMenuState(true)
        }
    }, [isActive])

    // Check for children and render a sub-dropdown if they exist
    if (item.children && item.children.length) 
    {
        return (
        <div className="relative">
            <div className='flex justify-between'>
                <button
                    className={`hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1 self-start ${subMenuState ? 'bg-zinc-300' : ''}`}
                    onClick={toggleSubMenu}
                    >
                    {item.title}
                </button>
                <Image 
                  src={down_chevron} 
                  alt='' 
                  height='16'
                  width='16'
                  className='self-end mx-4'
                />
            </div>
            <div className={`absolute top-8 z-30 w-[250px] min-h-[100px] flex flex-col py-4 bg-zinc-400 rounded-md ${subMenuState ? 'flex' : 'hidden'}`}>
            {
            item.children.map( child => (
                <div>
                <NavDropDownItem 
                    key={child.route} 
                    item={child} 
                    toggleSubMenu={() => {}} 
                    isActive={true} 
                />
                </div>
            ))}
            </div>
        </div>
        );
    } 
    else 
    {
        return (
        <Link
            key={item.route}
            className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
            href={item?.route || ''}
            onClick={toggleSubMenu}
        >
            {item.title}
        </Link>
        );
    }
};

export default NavDropDownItem;