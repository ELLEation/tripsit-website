//Import JS Dependancies
import { useState } from 'react'
import Image from 'next/image'

//Import Components
import NavDropDownItem from '@components/navigation/NavDropDownItem'

//Import Assets
import down_chevron from '/public/assets/img/ui/down-chevron.png'

const NavDropDown = ({ menuItem }) => {

    //State that keeps track if the menu is open or closed.
    const [menuState, setMenuState] = useState(false);

    //State to coordinate submenus active state
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    //Get children of items if they exist. If not set to an empty array.
    const items = menuItem.children ? menuItem.children : [];
    
    //Change state of menu to opposite of what it is.
    const toggleMenu = () => {
        
        setMenuState(old => !old);
        
        if (menuState) {

            setActiveSubMenu(null);

        }

    }
  
    const handleSubMenuToggle = (title) => {

        setActiveSubMenu(activeSubMenu == title ? null : title)
    
    }

    //Variable that states if the CCS shows the menu or if its hidden.
    const dropDownClass = menuState ? "flex" : "hidden";
  
    return (
      <>
        <div className="relative">
          <div className='flex justify-between gap-1'>
            <button className="hover:text-blue-400 sm:px-0 px-4 self-start" onClick={toggleMenu}>
              {menuItem.title}
            </button>
            <Image 
                src={down_chevron} 
                alt='' 
                height='16'
                width='16'
                className='self-end sm:mx-0 mx-4'
              />
          </div>
          <div className={`absolute top-8 z-30 w-[250px] min-h-[100px] flex flex-col py-4 bg-zinc-400 rounded-md ${dropDownClass}`}>
            {
            items.map( item => (
              <NavDropDownItem 
                key={item.route}
                item={item} 
                toggleSubMenu={ () => handleSubMenuToggle(item.title)} 
                isActive={activeSubMenu === item.title}
              />
            ))
            }
          </div>
        </div>
        {
        menuState && (
          <div 
            className='fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40'
            onClick={toggleMenu}
          />
        )
        }
      </>
    );
  };
  
export default NavDropDown;