import { Form, Button } from "react-bootstrap";
import Logo from "../images/Logo.png";

const SignupPage = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <img src={Logo} alt="Logo-home" className="mb-5 ms-5"></img>
      </div>
      <div className="container d-flex justify-content-center">
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name: </Form.Label>
            <Form.Control type="name" placeholder="Name" className="mb-3 w-100" />
          </Form.Group>

          <Form.Group controlId="formBasicNumber">
            <Form.Label>Phone Number: </Form.Label>
            <Form.Control type="tel" placeholder="Number" className="mb-3 w-100" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email : </Form.Label>
            <Form.Control type="email" placeholder="Enter email" className="mb-3 w-100 " />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password : </Form.Label>
            <Form.Control type="password" placeholder="Password" className="mb-3 w-100" />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password : </Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" className="mb-3 w-100" />
          </Form.Group>

          <Form.Group>
            <Button variant="primary" type="Login" className="w-100">
              Sign Up
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default SignupPage;
