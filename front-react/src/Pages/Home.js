import React from 'react';
import picture from '../assates/casque-audio-anti-bruit-musique.jpg';
import axios from 'axios';
import '../index.css';
import Card from "react-bootstrap/Card";
import { Container, Row, Col , Button ,ListGroup,ListGroupItem} from 'react-bootstrap';



  class Home extends React.Component {
    constructor(){
      super()
      this.state =
      {
        data : []
      }
      this.connect = this.connect.bind(this)
    }

    componentDidMount(){
      this.connect()
    }

    connect() {
      axios.get('http://localhost:5000/api/casques')
        .then(data => {
          console.log(data.data)
        this.setState({
          data: data.data
        })})
        .catch (err=>console.log(err))
        }


    render(){
  return (    

<div>
  <div style={{width:150,fontSize:50,marginTop:150}} className="top">
      <div className="one"><h3>1er fournisseur de Materiel Sono en Tunisie </h3>
      <img src={picture} style={{marginLeft:600,width:1250,height:500}} alt="BaffleKA"/></div>
      </div>
      
      <h1 style={{marginLeft:750}}>Category</h1>
      <h4 style={{marginLeft:250}}>  Casques</h4>
      <>
      <Container>
      <Row className="container" >
          {this.state.data.map((e,k)=>(
  //  <div key={k} className="one">  
  //   <div className="title" >{e.name.slice(0,10)} </div>
  //   <img src={e.imgurl} className="image" alt="imag"/> 

  //   <div className="price" style={{backgroundColor:'grey',color:'black',fontSize:25}}>
  //    <div> Price : {e.price} DT</div>
  //    <div> Restant : {e.quantity}</div>
  //    <Button>Ajouter au Panier</Button>
  //   </div> 
  //  </div>
  <Col key={k}  >
  <Card
    bg={'dark'}
    // text='light'
    border={'primary'}
    style={{ width: '20rem'}}
    className="md-6"
  >
  <Card.Img variant="top" src={e.imgurl} />
    <Card.Body>
    <Card.Title>{e.name.slice(0,22)}</Card.Title>
    <Card.Text>
     {e.description.slice(0,19)}
    </Card.Text>
    <ListGroup className="list-group">
    <ListGroupItem>{e.description}</ListGroupItem>
    {/* <ListGroupItem>{e.rating}</ListGroupItem>
    <ListGroupItem>{e.views}</ListGroupItem> */}
  </ListGroup>
    <Card.Text>Price : {e.price} DT  </Card.Text>
    <Button variant="primary">Ajouter au Panier</Button>
    </Card.Body>
</Card>
</Col>
          ))}
          </Row>
          </Container>
          </>
     
      </div> 
  );}
};

export default Home;