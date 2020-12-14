import Header from "./Header";
import shareLogo from "../images/shareLogo.svg";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Image,
} from "react-bootstrap";

import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Row className="align-items-center" style={{ marginTop: 15 }}>
          <Col>
            <div style={{ fontSize: 55, fontWeight: "bolder" }}>Shortly.me</div>
            <div style={{ fontSize: 24 }}>
              A smart and simple tool to share your link.
            </div>
            <InputGroup className="mt-3" size="lg">
              <FormControl
                placeholder="Your long url..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">Shrink</Button>
              </InputGroup.Append>
            </InputGroup>
            <div
              style={{
                fontSize: 55,
                fontWeight: "bolder",
                textAlign: "center",
              }}
            >
              <FontAwesomeIcon rotation={90} icon={faExchangeAlt} />
            </div>
            <div style={{ fontSize: 24 }}>Or choose your custom link</div>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Your long url..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  https://Shortly.me/
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
              <InputGroup.Append>
                <Button variant="outline-secondary">Shrink</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col xs={6} md={4}>
            <Image src={shareLogo} fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
