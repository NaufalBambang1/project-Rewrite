import { Row, Card, InputGroup, ListGroup, Button } from "react-bootstrap";
const CartContent = () => {
  return (
    <Row>
      <div className="col-md-8">
        <p className="font-size-wish-lib">Shopping Cart</p>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <div className="list-custom row">
                <Card.Img src="" />
                <Card.Title className="title-custom">Circuit Session 4 </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Broak Venetia uploaded a new study material</Card.Subtitle>
                <InputGroup>
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div className="col-md-4">
        <div className="summary-custom">
          <Card>
            <Card.Body>
              <Card.Text>Shopping Summary</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">Total Price </Card.Subtitle>
              <Card.Subtitle className="mb-4 text-muted">Discount </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Grand Total </Card.Subtitle>
              <Button className="w-100">Buy</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Row>
  );
};

export default CartContent;