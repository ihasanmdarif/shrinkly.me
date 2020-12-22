import { Container, Row, Image } from "react-bootstrap";

import underCo from "../images/underCo.png";

export default function Login() {
  return (
    <Container>
      <Row>
        <Image src={underCo} fluid />
      </Row>
    </Container>
  );
}
