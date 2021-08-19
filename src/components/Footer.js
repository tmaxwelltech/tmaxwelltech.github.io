import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';


const Footer = (props) => {

  return (
<footer className="footer mt-auto py-3 bg-light">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-4">
          <SocialIcon className="m-1" url="https://linkedin.com/in/tylermaxwell" />
          <SocialIcon className="m-1" url="https://github.com/tmax818" />
          <SocialIcon className="m-1" url="https://medium.com/@tylermaxwell" />
          <SocialIcon className="m-1" url="https://www.youtube.com/channel/UCTtQJwBVAoEA1Ob1-UvJZ9Q" />
          <SocialIcon className="m-1" url="https://twitter.com/tmax818" />
          <SocialIcon className="m-1" url="https://www.codewars.com/users/tmax818" />
        </div>
        <div className="col-3"></div>
      
        <div className="col-3">
          <p className="text-muted m-1">Copyright (c) {new Date().getFullYear()}</p>
          <p className="text-muted m-1">By Tyler Maxwell</p>
        </div>
      </div>
    </div>
</footer>
  );
};

export default Footer;