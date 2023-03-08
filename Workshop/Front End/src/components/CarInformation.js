import './CarInformation.css'
import React,{Component} from "react";
import axios from'axios';
class  CarInformation extends Component{
    state={
        data:[]
    }
    componentDidMount(){
        axios.get("http://localhost:8080/findall")
        .then(response =>{
            this.setState({data: response.data});
        })
        .catch(error =>{
            console.log(error);
        });
    }
    deleteData(id){
        axios.delete('http://localhost:8080/modelid/' + id)
        .then(response =>{
            console.log(response);
            const data = this.state.data.filter(item => item.id !==id);
            this.setState({data});
        })
    }
     handleUpdate = async (id) => {
     let header = prompt("Enter new header");
     let brand = prompt("Enter new brand");
     let model = prompt("Enter new model");
     let type = prompt("Enter new type");
     let gear_box = prompt("Enter new gear box");
     let engine_displacement = prompt("Enter new engine displacement");
     let mileage = prompt("Enter new mileage");
     let price = prompt("Enter new price");

     let newData = {
        id : id,
      header : header , 
      brand : brand,
      model  : model ,
      type  : type,
      gear_box  : gear_box,
      engine_displacement :  engine_displacement,
      mileage : mileage,
      price : price
     }

     console.log(newData);
     
     await axios.put("http://localhost:8080/update/" + id, newData);
     window.location.reload();
  };
    
    render(){
    return(
 <div>
 <div className="car-information">
{this.state.data.map(user =>(
    <div key={user.id}>
    <h2 className="car_information__image">{user.header}</h2>
    <div className="car-information__description">
    Brand : {user.brand}
    <br/>
    Model : {user.type}
    <br/>
    Type : {user.type}
    <br/>
    Gear-Box : {user.gear_box}
    <br/>
    Engine-Displacement : {user.engine_displacement}
    <br/>
    Mileage : {user.mileage}
    <br/>
    Price : {user.price}
    <br/>
    <button onClick={() => this.deleteData(user.id)}>Delete</button>
    <br/>
    <button onClick={() => {this.handleUpdate(user.id)}}>Update</button>
    </div>
    </div>
))}
</div>
 </div>
    );
}
}
export default CarInformation;