import React from 'react';
import { Card, Button, CardTitle, CardText, CardGroup, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <div className="container">
      <CardGroup>
    <Row>
      <Col sm="3">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="3">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
    </CardGroup>
    </div>
  );
};

export default Example;