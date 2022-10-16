import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import Logo from "../images/Logo.png";
import notif from "../images/notif.png";
import { BsSearch } from "react-icons/bs";
import "./style.css";

const Navigation = () => {
  return (
    <>
      <Navbar sticky="top" bg="light" variant="light" className="navbar p-1 mb-4 bg-white">
        <Container className="fluid">
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo-home" className=""></img>
          </Navbar.Brand>
          <Form className="d-flex w-50 ">
            <BsSearch className="search-icon" />
            <input type="text" placeholder="Search" aria-label="Search" className="form-control" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Brand href="/">
            <img src={notif} alt="notif-Logo" className="" height={30} width={30}></img>
          </Navbar.Brand>
          <Nav className="fs-4 ">
            <Nav.Link href="/Signup">Sign Up</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;