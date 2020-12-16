import { Container, Row, Col } from "react-bootstrap";
import "./Pricing.css";
export default function Pricing() {
  return (
    <Container className="mt-3">
      <Row>
        <Col xs={6} md={4}>
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $0 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="btn green-bg">
                Start Trial
              </button>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title featured">
                $10 <small className="featured">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="btn red-bg">
                Get Pro
              </button>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal ">Pro Max</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title featured">
                $20 <small className="featured">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="btn red-bg">
                Get Pro Max
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
