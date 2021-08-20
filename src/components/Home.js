import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import Cards from './Cards'

const Home = (props) => {
  return (
    <div className="mt-4">
      <Cards/>
    </div>
  );
};

export default Home;