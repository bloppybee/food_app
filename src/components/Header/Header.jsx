import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {assets} from '../../Assests/assets/frontend_assets/assets'
import './Header.css';


function Hero() {
  return (
  <section
  className="d-flex align-items-center text-white"
  style={{
    height: '100vh',
    background:
      `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${assets.header_img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <Container className="text">
    <h1 className=" display-1">Order your <br />favourite food here</h1>
    <p className="lead">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
    <Button size='md' className='rounded-pill' variant="light">view menu</Button>
  </Container>
</section>

  );
}

export default Hero;




























// import Image from 'react-bootstrap/Image';
// import {assets} from '../../Assests/assets/frontend_assets/assets';


// function FluidExample() {
//   return <Image
//   className='d-block w-100 rounded-0'
//   src={assets.header_img}  />;
// }

// export default FluidExample;
