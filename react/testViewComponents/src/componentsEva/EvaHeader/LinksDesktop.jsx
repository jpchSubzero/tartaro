import ListItem from '@material-ui/core/ListItem';
import Link from "@material-ui/core/Link";


const LinksDesktop = (props) =>  {

    return (
    
        <ListItem className="header-list-links">
            
        <Link key={props.index} href={props.url} className="alink-menu-header">{props.text}</Link>  
        
        </ListItem>
    );
  }


  export default LinksDesktop;
