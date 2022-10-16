import { Form, Row, Col, Card, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import wishImage from "../images/wishimage.png";

const Library = () => {
  return (
    <Row>
      <p className="font-size-wish-lib">Library</p>
      <Form className="d-flex w-25">
        <BsSearch className="search-icon" />
        <input type="text" placeholder="Search Notes in Library" aria-label="search" className="form-control"></input>
      </Form>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col>
            <Card className="bg-secondary text-white">
              <Card.Img variant="Top" src={wishImage} className="image--custom" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Button className="btn-sm" href="/">
                  Read
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Row>
  );
};

export default Library;