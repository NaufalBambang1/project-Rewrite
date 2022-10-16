import { Row, Card, Col, ListGroup, ProgressBar, Button } from "react-bootstrap";
import catatan from "../images/catatan.png";
import catatanRecently from "../images/catatan2.png";
import catatanFeed from "../images/catatanFeed.png";
import "./style.css";

const HomeContent = () => {
  const proggresNow = 73;
  return (
    <Row>
      <div className="col-md-8">
        <Card className="card-custom bg-secondary text-white">
          <Row>
            <div className="col-md-6">
              <Card.Img src={catatanRecently} className="recen-custom"></Card.Img>
            </div>
            <div className="col-md-6">
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text>Last Read 3 mins ago</Card.Text>
                <ProgressBar now={proggresNow} label={`${proggresNow}%`} />
              </Card.Body>
            </div>
          </Row>
        </Card>
        <p className="font-size-recomend">Recomended For You</p>
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Col>
              <Card className="bg-secondary text-white">
                <Card.Img variant="top" src={catatan} className="image-custom" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>This is a longer card with supporting text </Card.Text>
                  <Button href="/cart" className="btn-sm ">
                    Add To Cart
                  </Button>
                  {/* <Card.Link href="/cart" element="<">
                    Add To Cart
                  </Card.Link> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="col-md-4">
        <p className="font-size-feed">Feed</p>
        <Card>
          <ListGroup variant="flush">
            <Col xs={1} md={12}>
              {Array.from({ length: 4 }).map((_, idx) => (
                <ListGroup.Item>
                  <Row>
                    <div className="col-md-4">
                      <Card.Img src={catatanFeed} className="image-feed-custom" />
                    </div>
                    <div className="col-md-8">
                      <Card.Title className="title-custom">Circuit Session 4 </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Broak Venetia uploaded a new study material</Card.Subtitle>
                    </div>
                  </Row>
                </ListGroup.Item>
              ))}
            </Col>
            {/* <ListGroup.Item>
                <div className="list-custom row">
                  <Card.Img src="holder.js/100px160" />
                  <Card.Title>Metacognition </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Claudire uploaded a new study material</Card.Subtitle>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="list-custom row">
                  <Card.Img src="holder.js/100px160" />
                  <Card.Title>Ribosme and Cytoplasm</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Christabel Kaye uploaded a new study material</Card.Subtitle>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="list-custom row">
                  <Card.Img src="holder.js/100px160" />
                  <Card.Title>Lecture Week 4 + 3</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Ron Derrick uploaded a new study material</Card.Subtitle>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="list-custom row">
                  <Card.Img src="holder.js/100px160" />
                  <Card.Title>Sociology 101</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Arden Briley uploaded a new study material</Card.Subtitle>
                </div>
              </ListGroup.Item> */}
          </ListGroup>
        </Card>
        <p className="font-size-explore">Explore Your Followed Topics</p>
        <Col xs={3} md={12}>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Card.Title className="title-custom">List Topics </Card.Title>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          ))}
        </Col>
      </div>
    </Row>
  );
};

export default HomeContent;