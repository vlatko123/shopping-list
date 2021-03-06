import React  from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
return(
    <div>
        <nav>
            <ul>
                <li><Link to="/">Shopping</Link></li>
                <li><Link to ="/cart"><img src="cart.png" alt="cart"/></Link></li>
            </ul>
        </nav>
    </div>
)
}

export default Navbar;