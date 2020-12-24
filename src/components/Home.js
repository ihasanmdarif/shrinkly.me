import { useState, useEffect } from "react";
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
  const localStorageValue = JSON.parse(
    localStorage.getItem("shrinkenUrlHistory")
  );
  const [customCode, setCustomCode] = useState("");
  const [shortenUrls, setShortenUrls] = useState(localStorageValue || []);
  const [inputIsInValid, setInputIsInValid] = useState(false);
  const [errorMessages, seterrorMessages] = useState("");
  const [codeIsTaken, setCodeIsTaken] = useState(false);

  useEffect(() => {
    localStorage.setItem("shrinkenUrlHistory", JSON.stringify(shortenUrls));
    if (longUrl !== "") {
      setInputIsInValid(false);
    }
  }, [shortenUrls, longUrl]);

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
        const { longUrl, urlCode } = response.data;
        setCodeIsTaken(false);
        var shortUrl = `https://shrinkly.me/${urlCode}`;
        //saved only last three items
        //in the history
        if (shortenUrls.length > 2) {
          shortenUrls.shift();
        }
        setShortenUrls([
          ...shortenUrls,
          { lngUrl: longUrl, shrtUrl: shortUrl },
        ]);
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
      <Container className="main-page-container">
        <Row className="align-items-center main-page-row">
          <Col>
            <div className="brand-name">Shrinkly.me</div>
            <div className="brand-details">
              A smart and simple tool to share your link.
            </div>
            <InputGroup className="mt-3">
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
            <div className="brand-name text-center">
              <FontAwesomeIcon icon={faSyncAlt} />
            </div>
            <div className="brand-details">Or make your custom link</div>
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
          <Col xs={6} md={4} className="hero-image">
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
