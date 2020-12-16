import { useState, useRef } from "react";
import shareLogo from "../images/shareLogo.svg";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Image,
  Form,
} from "react-bootstrap";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Results from "./Results";

const validator = require("../helpers/urlValidator");
const axios = require("axios").default;
var hostToPost = "https://shurl.hasanarif.com/shrink";

function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [shortenUrls, setShortenUrls] = useState([]);
  const [inputIsInValid, setInputIsInValid] = useState(false);
  const [errorMessages, seterrorMessages] = useState("");
  const [codeIsTaken, setCodeIsTaken] = useState(false);

  const handleUrlChange = (e) => {
    if (longUrl !== "") {
      setInputIsInValid(false);
      setCodeIsTaken(false);
    }
    setLongUrl(e.target.value);
  };

  const handleCustomCodeChange = (e) => {
    setCustomCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (longUrl === "") {
      seterrorMessages("URL field is required!");
      setInputIsInValid(true);
      return;
    } else if (!validator(longUrl)) {
      seterrorMessages("This URL is not valid!");
      setInputIsInValid(true);
      return;
    }
    axios
      .post(hostToPost, {
        longUrl: longUrl,
        customCode: customCode,
      })
      .then((response) => {
        const { urlCode } = response.data;
        var shortUrl = `https://shrinkly.me/${urlCode}`;
        setShortenUrls([...shortenUrls, shortUrl]);
      })
      .catch((error) => {
        if (error.response.status === 409) {
          seterrorMessages(error.response.data);
          setCodeIsTaken(true);
        }
      });
  };

  return (
    <>
      <Container>
        <Row className="align-items-center" style={{ marginTop: 15 }}>
          <Col>
            <div style={{ fontSize: 55, fontWeight: "bolder" }}>
              Shrinkly.me
            </div>
            <div style={{ fontSize: 24 }}>
              A smart and simple tool to share your link.
            </div>
            <InputGroup className="mt-3" size="lg">
              <FormControl
                value={longUrl}
                name="longUrl"
                onChange={handleUrlChange}
                placeholder="Your long url..."
                aria-label="Long url"
                aria-describedby="long url input"
                isInvalid={inputIsInValid}
              />
              <InputGroup.Append>
                <Button onClick={handleSubmit} variant="outline-secondary">
                  Shrink
                </Button>
              </InputGroup.Append>
              <Form.Control.Feedback type="invalid">
                {errorMessages}
              </Form.Control.Feedback>
            </InputGroup>
            <div
              style={{
                fontSize: 45,
                fontWeight: "bolder",
                textAlign: "center",
              }}
            >
              <FontAwesomeIcon icon={faSyncAlt} />
            </div>
            <div style={{ fontSize: 24 }}>Or choose your custom link</div>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  https://Shrinkly.me/
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="basic-url"
                value={customCode}
                name="customCode"
                onChange={handleCustomCodeChange}
                aria-describedby="basic-addon3"
                isInvalid={codeIsTaken}
              />
              <Form.Control.Feedback type="invalid">
                {errorMessages}
              </Form.Control.Feedback>
            </InputGroup>
          </Col>
          <Col xs={6} md={4}>
            <Image src={shareLogo} fluid />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} lg={6}>
            {shortenUrls.length > 0 && <Results history={shortenUrls} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
