import { Navbar, NavbarBrand, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
      <NavbarBrand> Blog.app
      </NavbarBrand >
      <Nav.Link className="text-white text-decoration-none" as={NavLink} to="/">Home</Nav.Link>
      <Nav.Link className="text-white text-decoration-none" as={NavLink} to="/about">About</Nav.Link>
    </Navbar>
  );
};

export default NavBar;