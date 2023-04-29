import React, { useContext } from 'react';
import logo from '../../../../assets/logo.png'
import moment from 'moment';
import { Container,Button } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <Container>
           <div className="text-center">
           <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D YYYY")}</p>
           </div>
           <div className='d-flex '>
           <Button variant="danger">Latest</Button>
           <Marquee className='text-danger' speed={200} gradientColor={[2, 255, 25]}>
  I can be a React component, multiple React components, or just some text.
</Marquee>
           </div >
           
        </Container>
    );
};

export default Header;