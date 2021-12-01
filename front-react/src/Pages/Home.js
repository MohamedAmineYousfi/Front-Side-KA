import React from 'react';
import picture from '../assates/casque-audio-anti-bruit-musique.jpg'
import axios from 'axios'
import '../index.css';
  class Home extends React.Component {
    constructor(){
      super()
      this.state={
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
  <div style={{width:150,fontSize:50,alignContent:'center',marginTop:150}}>
      <img src={picture} style={{marginLeft:600,width:1250,height:500}} alt="BaffleKA"/>
      <h4 style={{marginLeft:750}}>Category</h4>
      <h4 style={{marginLeft:250}}>  Casques</h4>
      <div >
        <div className="container">
          {this.state.data.map((e,k)=>(
   <div key={k} className="one">  
    <div className="title" >{e.name.slice(0,10)} </div>
    <img src={e.imgurl} className="image" alt="imag"/> 

    <div className="price" style={{backgroundColor:'grey',color:'black',fontSize:25}}>
     <div> Price : {e.price} DT</div>
     <div>  Restant : {e.quantity}</div> 
    </div> 
   </div>
          ))}
        </div>
      </div>
      </div>
  );}
};

export default Home;