import React from 'react';
import picture from '../assates/casque-audio-anti-bruit-musique.jpg'
import axios from 'axios'

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
      <h4 style={{marginLeft:700}}>Category</h4>
      <div>
        <ul>
          {this.state.data.map((e,k)=>(
   <li key={k}>  
     <div className="" >{e.name} - {e.price} DT</div>
    <img src={e.imgurl} className="" alt="imag"/>     
    <div> {e.quantity}</div>  
   </li>
          ))}
        </ul>
      </div>
      </div>
  );}
};

export default Home;