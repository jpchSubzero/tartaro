import { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {List} from "@material-ui/core";
import LinksArray from './LinkList.json';
import LinksMobile from './LinksMobile';

const MenuMobile = () => {

    
const [openDrawer, setOpenDrawer] = useState(false);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


    return (
    <>
    <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
    open={openDrawer} onClose={ ()=> setOpenDrawer(false)} onOpen={ ()=> setOpenDrawer( true)} anchor="right"
    className="drawer-mobile-size"
    >

<IconButton onClick={ ()=> setOpenDrawer(false)} className="button-close-align"  disableRipple>
            <CloseIcon className="icon-close-specs" disableRipple />
          </IconButton>

          <List className="list-mobile-links">
          
          {LinksArray.map((link, index) => {
          return (
            <LinksMobile
            key={index}
          text={link.text}
          url={link.url}

            />
          )      
      })}

         
            </List >
    </SwipeableDrawer>
    
<IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple className="hamburger-button-size" >
     <MenuIcon className="hamburger-menu-style" />
</IconButton>
</>

    )
}


export default MenuMobile;