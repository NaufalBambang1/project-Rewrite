import { Form, Button } from "react-bootstrap";
import Logo from "../images/Logo.png";
import "./style.css";
const LoginPage = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <img src={Logo} alt="Logo-home" className="mb-5 ms-5"></img>
      </div>
      <div className="container d-flex justify-content-center">
        <Form>
          <Form.Group className=" " controlId="formBasicEmail">
            <Form.Label>Email : </Form.Label>
            <Form.Control type="email" placeholder="Enter email" className="mb-3 w-100 " />
          </Form.Group>

          <Form.Group className="" controlId="formBasicPassword">
            <Form.Label>Password : </Form.Label>
            <Form.Control type="password" placeholder="Password" className="mb-3 w-100" />
          </Form.Group>

          <Form.Group className="">
            <Button variant="primary" type="Login" className="w-100">
              Login
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
