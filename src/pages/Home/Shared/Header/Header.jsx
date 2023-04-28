import React from 'react';
import logo from '../../../../assets/logo.png'
import moment from 'moment';
import { Container,Button } from 'react-bootstrap';
const Header = () => {
    return (
        <Container>
           <div className="text-center">
           <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D YYYY")}</p>
           </div>
           <Button variant="danger">Latest</Button>
        </Container>
    );
};

export default Header;