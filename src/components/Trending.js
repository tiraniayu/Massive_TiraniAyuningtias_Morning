import {Card, Col, Container, Row, Image} from "react-bootstrap"
import fastXImage from "../assets/Image/Trending/fastX.jpg"
import EvilDeadRiseImage from "../assets/Image/Trending/EvilDeadRise.jpeg"
import BuyahamkaImage from "../assets/Image/Trending/Buyahamka.jpg"

const Trending = () => {
  return (
 <div>
  <Container>
    <br />
    <h1 className="text-white">TRENDING MOVIES</h1>
    <br />
    <Row>
      <Col md={4} className="movieWrapper" id="Trending">
       <Card className="bg-dark text-white movieImage">
        <Image src={fastXImage} alt="fastX Movies" className="images" />
        <div className="bg-dark">
          <div className="p-2 m-1 text-white">
          <Card.Title className="text-center">fastX</Card.Title> 
          <Card.Text className="text-left">
          This is a wider card with natural lead-in
          to additional content.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
        </div>
       </Card>
      </Col>
      <Col md={4} className="movieWrapper">
       <Card className="bg-dark text-white movieImage">
        <Image src={EvilDeadRiseImage} alt="fastX Movies" className="images" />
        <div className="bg-dark">
          <div className="p-2 m-1 text-white">
          <Card.Title className="text-center">Evil Dead Rise</Card.Title> 
          <Card.Text className="text-left">
          This is a wider card with natural lead-in
          to additional content.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
        </div>
       </Card>
      </Col>

      <Col md={4} className="movieWrapper">
       <Card className="bg-dark text-white movieImage">
        <Image src={BuyahamkaImage} alt="fastX Movies" className="images" />
        <div className="bg-dark">
          <div className="p-2 m-1 text-white">
          <Card.Title className="text-center">Buya Hamka</Card.Title> 
          <Card.Text className="text-left">
          This is a wider card with natural lead-in
          to additional content.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
        </div>
       </Card>
      </Col>

     
    </Row>
  </Container>
 </div>
    )
}

export default Trending