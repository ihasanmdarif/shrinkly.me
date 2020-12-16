import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Button, Row, Col } from "react-bootstrap";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Results(props) {
  const [copyInfo, setCopyInfo] = useState({
    itemId: 0,
    isCopied: false,
  });
  useEffect(() => {
    let changeColorTimer = setTimeout(
      () =>
        setCopyInfo((prevState) => ({
          ...prevState,
          isCopied: false,
        })),
      2000
    );
    return () => {
      clearTimeout(changeColorTimer);
    };
  }, [copyInfo]);

  const copyToClipboard = (e, textToCopy, listItemId) => {
    var textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopyInfo({
      itemId: listItemId,
      isCopied: true,
    });
  };

  return (
    <>
      <h3>
        Recent shorten links <FontAwesomeIcon icon={faLevelDownAlt} />
      </h3>
      <ListGroup>
        {props.history
          .map((param, index) => (
            <ListGroupItem
              key={index}
              variant={
                copyInfo.isCopied && copyInfo.itemId === index && "success"
              }
            >
              <Row>
                <Col className="link-col" xs={6} md={8} lg={8}>
                  {param}
                </Col>
                <Col xs={6} md={4} lg={4} className="text-right link-col">
                  <Button
                    onClick={(e) => copyToClipboard(e, param, index)}
                    size="sm"
                  >
                    Copy
                  </Button>
                  {index === copyInfo.itemId &&
                    copyInfo.isCopied &&
                    " Copied! "}
                </Col>
              </Row>
            </ListGroupItem>
          ))
          .reverse()}
      </ListGroup>
    </>
  );
}
