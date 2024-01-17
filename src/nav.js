import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserTie, faTruckFast, faSeedling} from '@fortawesome/free-solid-svg-icons';
import Icon from '@mdi/react';
import { mdiSprout, mdiCheck, mdiHome} from '@mdi/js';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (  
        
        <nav className="navbar">
        <h1>KWIACIARNIA Gardena <Icon path={mdiSprout} size={1.2} color="green" className='icons'/></h1>
            <div className="links">
                <Link to="/" className='buttons'><Icon path={mdiHome} size={1} color="white" className='icons'/></Link>
                <Link to="products/">Products <FontAwesomeIcon icon={faSeedling}/></Link>
                <Link to="employees/">Employees <FontAwesomeIcon icon={faUserTie}/> </Link>
                <Link to="clients/">Clients <FontAwesomeIcon icon={faUser}/></Link>
                <Link to="orders/">Orders <FontAwesomeIcon icon={faTruckFast} /></Link>
                <Link to="login" className='buttons' style={{color: "white"}}> LOG IN <Icon path={mdiCheck} size={1} color="white" className='icons'/></Link>
            </div>
        </nav>
    );
}
 
export default Nav
