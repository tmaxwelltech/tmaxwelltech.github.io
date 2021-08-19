import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';


const Footer = (props) => {
  return (
<footer className="footer mt-auto py-3 bg-light">
    <div className="container">
        <span className="text-muted m-1">Tyler Maxwell</span>
        <p>

        <SocialIcon className="m-1" url="https://linkedin.com/in/tylermaxwell" />
        <SocialIcon className="m-1" url="https://github.com/tmax818" />
        <SocialIcon className="m-1" url="https://medium.com/@tylermaxwell" />
        <SocialIcon className="m-1" url="https://www.youtube.com/channel/UCTtQJwBVAoEA1Ob1-UvJZ9Q" />
        <SocialIcon className="m-1" url="https://twitter.com/tmax818" />
        </p>
    </div>
</footer>
  );
};

export default Footer;