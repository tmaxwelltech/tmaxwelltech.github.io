import React from 'react';
import { Card, Button, CardTitle, CardText, CardGroup, Row, Col, CardDeck } from 'reactstrap';
import InfoCard from './InfoCard'
import {info} from '../shared/info'

console.log(info)

const Example = (props) => {
  console.log(info)
  return (
    <div className="container">

    <Row>
      {info.map(item => {
        return(
          <InfoCard title={item.title} text={item.text} image={item.image}/>
          )
        })}
      </Row>
      </div>

  );
};

export default Example;