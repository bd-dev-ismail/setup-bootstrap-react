
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardF from "../Card/Card";

function CardGroupF({hot}) {
    const {image, name, size , id} = hot;
  return (
    <Row xs={1} md={3}  className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body className="custom-body">
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                Size: {size} & Id: {id}
              </Card.Text>
                <CardF></CardF>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardGroupF;
