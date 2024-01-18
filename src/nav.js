import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserTie, faTruckFast, faSeedling} from '@fortawesome/free-solid-svg-icons';
import Icon from '@mdi/react';
import { mdiSprout, mdiCheck, mdiHome} from '@mdi/js';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (  
        
        <nav className="navbar">
        <h1>KWIACIARNIA Gardena <Icon path={mdiSprout} size={1.2} className='icons'/></h1>
            <div className="links">
                <Link to="/" className='buttons'><Icon path={mdiHome} size={1} className='icons'/></Link>
                <Link to="products/">Produkty <FontAwesomeIcon icon={faSeedling}/></Link>
                <Link to="employees/">Pracownicy <FontAwesomeIcon icon={faUserTie}/> </Link>
                <Link to="clients/">Klienci <FontAwesomeIcon icon={faUser}/></Link>
                <Link to="orders/">Zamówienia <FontAwesomeIcon icon={faTruckFast} /></Link>
                <Link to="login" className='buttons' style={{color: "white"}}> LOG IN <Icon path={mdiCheck} size={1} className='icons'/></Link>
            </div>
        </nav>
    );
}
 
export default Nav
