import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './AddCarInformation.css'
class AddCarInformation extends Component{

constructor(props){
super(props);
this.state={
    id:'',
    header:'',
    brand:'',
    model:'',
    type:'',
    gear_box:'',
    engine_displacement:'',
    mileage:'',
    price:''
};
this.handleSubmit = this.handleSubmit.bind(this);
}
// handleIdChange =(event)=>{
//     this.setState({id: event.target.value});
// };
// handleHeaderChange =(event)=>{
//     this.setState({header: event.target.value});
// };
// handleBrandChange =(event)=>{
//     this.setState({brand: event.target.value});
// };
// handleTypeChange =(event)=>{
//     this.setState({type: event.target.value});
// };
// handleModelChange =(event)=>{
//     this.setState({model: event.target.value});
// };
// handleGearBoxChange =(event)=>{
//     this.setState({gear_box: event.target.value});
// };
// handleEngineDisplacementChange =(event)=>{
//     this.setState({engine_displacement: event.target.value});
// };
// handleMileageChange =(event)=>{
//     this.setState({mileage: event.target.value});
// };
// handlePriceChange =(event)=>{
//     this.setState({price: event.target.value});
// };
handleChange = (event)=>{
    this.setState({[event.target.name]:event.target.value});
}
handleSubmit(event) {
    event.preventDefault();
    const data ={
        "id":parseInt(this.state.id),
        "header":this.state.header,
        "brand":this.state.brand,
        "type":this.state.type,
        "model":this.state.model,
        "gear_box":this.state.gear_box,
        "engine_displacement":this.state.engine_displacement,
        "mileage":this.state.mileage,
        "price":this.state.price
    };
    console.log(data)
    axios.post('http://localhost:8080/savedata',[data])
};
render(){
    return(
        <form onSubmit={this.handleSubmit}>
        <center><h2>Car Information</h2></center>
        <br/>
        <center><label>Id</label></center>
       <center> <input type="number" name="id" onChange={this.handleChange}/></center>
        <br/>
       <center><label>Header</label></center>
        <center><input type="text" name="header" onChange={this.handleChange}/></center>
        <br/>
        <center><label>Brand</label></center>
        <center><input type="text" name="brand" onChange={this.handleChange}/></center>
        <br/>
        <center><label>Type</label></center>
        <center><input type="text" name="type" onChange={this.handleChange}/></center>
        <br/>
        <center><label>Model</label></center>
        <center><input type="text" name="model" onChange={this.handleChange}/></center>
        <br/>
        <center><label>Gear Box</label></center>
        <center><input type="text" name= "gear_box" onChange={this.handleChange}/></center>
        <br/>
       <center> <label>Engine Displacement</label></center>
        <center><input type="text" name= "engine_displacement"onChange={this.handleChange}/></center>
        <br/>
        <center><label>Mileage</label></center>
        <center><input type="text" name= "mileage" onChange={this.handleChange}/></center>
        <br/>
        <center><label>Price</label></center>
        <center><input type="text" name= "price" onChange={this.handleChange}/></center>
        <br/>
<center><button type="submit" onSubmit={this.handleSubmit}>Add</button></center>
<Link to="/table">view table</Link>
        </form>
    );
}

}
export default AddCarInformation;
