import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function Headers() {
  return (
    <>
      <Navbar
        style={{ padding: 15 }}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <NavLink to="/">
          <Navbar.Brand>Shortly</Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          className="d-flex justify-content-between"
          id="responsive-navbar-nav"
        >
          <Nav className="mr-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/features">Features</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
          </Nav>
          <Nav>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
