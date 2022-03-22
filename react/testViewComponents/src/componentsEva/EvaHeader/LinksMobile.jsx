import ListItem from '@material-ui/core/ListItem';
import Link from "@material-ui/core/Link";


const Links = (props) =>  {

    return (
    
        <>
        <ListItem className="list-mobile-menu">  
        <Link key={props.index} href={props.url} className="header-mobile-links">{props.text}</Link>  
        </ListItem> 
        <hr className="underline-test" />
        </>
    );
  }


  export default Links;
