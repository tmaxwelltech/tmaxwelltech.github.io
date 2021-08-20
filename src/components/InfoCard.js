import React from 'react'
import { Card, Col, Button, CardTitle, CardText, CardImg, CardBody, CardSubtitle} from 'reactstrap';

const InfoCard = ({title, text, image}) => {

    return (
          <Col sm="4">
          <Card className="p-3">
            <CardImg src={image} alt="Card image cap" style={{backgroundColor: 'black', padding: ".5em"}} />
            <CardBody>
              <CardTitle tag="h5">{title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Course Content</CardSubtitle>
              <CardText>{text}</CardText>

            </CardBody>
          </Card>
          </Col>


    )
}

export default InfoCard
