import './Navbar.css';
import Logo from './Logo.js'
import NavLinks from './NavLinks';
import Navbutton from './Navbutton';

function Navbar()
{
    return (
      <div className="navbar">
        <div className="logo-navlinks">
          <Logo />
          <NavLinks />
        </div>
        <Navbutton/>
      </div>
    );
}

export default Navbar;