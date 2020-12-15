import { useState } from "react";
import { ListGroup, ListGroupItem, Button, Row, Col } from "react-bootstrap";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Results(props) {
  const [variantList, setVariantList] = useState([
    "primary",
    "secondary",
    "success",
    "warning",
    "info",
    "dark",
  ]);
  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  };
  return (
    <>
      <h3>
        Recent shorten links <FontAwesomeIcon icon={faLevelDownAlt} />
      </h3>
      <ListGroup>
        {props.history
          .map((p, index) => (
            <ListGroupItem variant={variantList.random()} key={index}>
              <Row>
                <Col>{p}</Col>
                <Col className="text-right">
                  <Button size="sm">Copy</Button>
                </Col>
              </Row>
            </ListGroupItem>
          ))
          .reverse()}
      </ListGroup>
    </>
  );
}
