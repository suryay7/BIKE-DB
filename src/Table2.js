import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Table2 extends Component {
    state = {
        data: [],
        update: false
    }


    componentDidMount() {
        axios.get('http://127.0.0.1:2202/show').then(response =>{this.setState({data: response.data});
    })
    .catch(error => {console.log(error);
    });
    }
deleteData(product_id, e){
    axios.delete(`http://127.0.0.1:2202/delete/${product_id}`).then(response => {console.log(response);
    
    const data = this.state.data.filter(item => item.product_id !== product_id);
    this.setState({ data });
})
}

// updateData(product_id, e){
//     axios.put(`http://127.0.0.1:2202/update/${product_id}`).then(response => {console.log(response);
    
    
// })
// }   

handleSubmit = (event) => {
    this.setState({update: true});
}


render(){
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Body Type</th>
                        <th>cc</th>
                        <th>fuel_norms</th>
                        <th>name</th>
                        <th>Top Speed</th>
                        <th>Action</th>
                        <th>Action2</th>
                      
                        
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(biker => (
                        <tr key={biker.product_id}>
                            <td>{biker.product_id}</td>
                            <td>{biker.body_type}</td>
                            <td>{biker.cc}</td>
                            <td>{biker.fuel_norms}</td>
                            <td>{biker.name}</td>
                            <td>{biker.top_speed}</td>
<><td>
    <button className='btn btn-danger' onClick={(e) => this.deleteData(biker.product_id, e)}>Delete</button>
</td><td>
<button className='btn btn-danger' onClick={this.handleSubmit}> {this.state.update && <Navigate to={'/Update/'+`${biker.product_id}`}/>} Update</button>
    </td></>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}


export default Table2;

