import {List} from "@material-ui/core";
import './Header.scss';
import LinksArray from './LinkList.json';
import LinksDesktop from './LinksDesktop';
import EvaButton from "../EvaButton";
import MenuMobile from "./MenuMobile";


const handleClick = () => {
  console.log("Objeto realizado click")
};

const HeaderLinks = (props) => {


return(
  <>
  <div className="header-home-wrapper-menu-items">
          <List className="lista-menu-wrapper" >
     
        {LinksArray.map((link, index) => {
          return (
            <LinksDesktop
            key={index}
          text={link.text}
          url={link.url}
          class={link.class}
            />
          )      
      })}


						<EvaButton type='submit'
							variant='contained'
							buttonSize = 'small'
							onClick={handleClick}
              className="button-header-width"
						>
							Small Button
						</EvaButton>
				
      
      </List>
      </div>  
     <div className="menu-mobile-wrapper">
     <MenuMobile /> 
     </div>
     </>
);

}

export default HeaderLinks;
