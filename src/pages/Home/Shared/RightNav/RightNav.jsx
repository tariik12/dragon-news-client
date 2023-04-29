import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagramSquare } from 'react-icons/fa';
import Q_Zone from '../Q_Zone/Q_Zone';
import bg_Pic from '../../../../assets/bg.png'

const RightNav = () => {
    return (
        <div className='mt-4'>
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle/> Login With Google</Button>
      <Button variant="outline-secondary"><FaGithub /> Login with GitHub</Button>
      <div className='mt-4'>
        <h4>Find Us On</h4>
        <ListGroup>
      <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item> <FaTwitter/>Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagramSquare/> Instagram</ListGroup.Item>
    </ListGroup>
      </div>
            <Q_Zone />
      <div className=''>
        <img src={bg_Pic} alt="" />
        </div>
        </div>
       
    );
};

export default RightNav;