import {Card, Col, Container, Row, Image} from "react-bootstrap"
import LittleMermaidImage from "../assets/Image/Disney/LittleMermaid.jpg.jpeg"
import RayaLastDragonImage from "../assets/Image/Disney/RayaLastDragon.jpg.jpg"
import EnchantoImage from "../assets/Image/Disney/Enchanto.jpg.jpg"
import FrozenImage from "../assets/Image/Disney/Frozen.jpg.jpg"
import ToystoryImage from "../assets/Image/Disney/Toy story.jpg.jpg"
import DisenchantedImage from "../assets/Image/Disney/Disenchanted.jpg.jpg"

const Disney = () => {
  return (
 <div className="movieWrapper">
  <Container >
    <br />
    <h1 className="text-white">DISNEY MOVIES</h1>
    <br />
    <Row>
      <Col md={4}>
       <Card className="bg-dark text-white movieImage">
        <Image src={LittleMermaidImage} alt="fastX Movies" className="images" />
        <div className="bg-dark">
          <div className="p-2 m-1 text-white">
          <Card.Title className="text-center">Little Mermaid</Card.Title> 
          <Card.Text className="text-left">
          This is a wider card with natural lead-in
          to additional content.
        </Card.Text>
        <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
        </div>
        </div>
       </Card>
      </Col>
      <Col md={4} className="movieWrapper" id="Disney">
       <Card className="bg-dark text-white movieImage">
        <Image src={RayaLastDragonImage} alt="fastX Movies" className="images" />
        <div className="bg-dark">
          <div className="p-2 m-1 text-white">
          <Card.Title className="text-center">Raya & The Last Dragon</Card.Title> 
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
        <Image src={EnchantoImage} alt="fastX Movies" className="images" />
        <div className="bg-dark">
          <div className="p-2 m-1 text-white">
          <Card.Title className="text-center">Enchanto</Card.Title> 
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
        <Image src={FrozenImage} alt="fastX Movies" className="images" />
        <div className="bg-dark">
          <div className="p-2 m-1 text-white">
          <Card.Title className="text-center">Frozen</Card.Title> 
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
        <Image src={ToystoryImage} alt="fastX Movies" className="images" />
        <div className="bg-dark">
          <div className="p-2 m-1 text-white">
          <Card.Title className="text-center">Toy Story</Card.Title> 
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
        <Image src={DisenchantedImage} alt="fastX Movies" className="images" />
        <div className="bg-dark">
          <div className="p-2 m-1 text-white">
          <Card.Title className="text-center">Disenchanted</Card.Title> 
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

export default Disney