import { Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <Nav className="me-auto nav__wrap">
      <Link className="nav__link" to="/">
        home
      </Link>
      <Link className="nav__link" to="/login">
        login
      </Link>
    </Nav>
  );
};

export default NavMenu;
