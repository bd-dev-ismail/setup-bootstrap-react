import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import './Card.css'
function CardF() {
  const [showB, setShowB] = useState(false);
  const toggleShowB = () => setShowB(!showB);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <div className="text-center">
          <Button onClick={toggleShowB} className="mb-2 btn-warning ">
            Show Toast
          </Button>
        </div>
        <Toast
          className="custom-toast"
          onClose={toggleShowB}
          show={showB}
          animation={false}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default CardF;
