import React, {Component} from "react";
import axios from 'axios';
import './Create.css'
import { Navigate } from "react-router-dom";

class Create extends Component {
    constructor(props) {
         super(props);
         this.state = {
            product_id: '',
            body_type: '',
            cc:'',
            fuel_norms: '',
            name:'',
            top_speed:'',
            submitted: false
         };
        }

 handleaccidchange = (event) => {
     this.setState({product_id:event.target.value});   
    };


 handleclientnamechange = (event) => {
     this.setState({body_type: event.target.value});
    };


 handlebanknamechange = (event) => {
     this.setState({cc: event.target.value});
     };


    handlebranchchange = (event) => {
        this.setState({fuel_norms: event.target.value});
    };


    handlemobilechange = (event) => {
        this.setState({name: event.target.value});
    };


    handlemailidchange = (event) => {
        this.setState({top_speed: event.target.value});
    };




    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          product_id : this.state.product_id,
          body_type: this.state.body_type,
          cc: this.state.cc,
          fuel_norms: this.state.fuel_norms,
          name: this.state.name,
          top_speed: this.state.top_speed,
          submitted: true
        };
        this.setState({submitted:true});
        axios.post('http://127.0.0.1:2202/add', data)
    };
    render(){
        return(
    <>
    {
        this.state.submitted && <Navigate to="/Table"/>
    }
            <form onSubmit={this.handleSubmit} className="login-form" id="inputdata">
                <label className="login-label">VEHICLE NO</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.product_id}
                    onChange={this.handleaccidchange}
                />
                <label className="login-label">BODY TYPE</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.body_type}
                    onChange={this.handleclientnamechange}
                />
                 <label className="login-label">CC</label>
                 <input 
                     className="login-input"
                     type="number"
                    value={this.state.cc}
                     onChange={this.handlebanknamechange}
                 />
                <label className="login-label">FUEL NORMS</label>
                 <input 
                 className="login-input"
                 type="text"
                 value={this.state.fuel_norms}
                onChange={this.handlebranchchange}
                 />
                 <label className="login-label">VEHICLE NAME</label>
                 <input 
                 className="login-input"
                     type="text"
                 value={this.state.name}
                 onChange={this.handlemobilechange}
                 />
                 <label className="login-label">TOP SPEED</label>
                 <input 
                     className="login-input"
                     type="number"
                     value={this.state.top_speed}
                    onChange={this.handlemailidchange}
                 />
             <button className="login-button" type="submit">Add</button>
         </form>
         </>
         )
     }
}


export default Create;