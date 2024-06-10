import React from 'react'
import Slide from '../../assets/slide.png'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/esm/Container';

const HomePage = () => {
  return (
    <div className='bg-dark'>
      <Container>
      <Image src={Slide} fluid/>;
      </Container>
    </div>
  )
}

export default HomePage