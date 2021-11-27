import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Device from './device'

class Home extends Component{

    state = {
        devices: [],
        value: ''
    };

    componentDidMount(){
        axios.get(`http://localhost:3000/devices`).then(
            res => {
                this.setState({devices: res.data})
            }
        );
    };

    handleChange = event => {
        this.setState({value: event.target.value})
    };

    render(){
        console.log(this.state.devices)

        return (
            <div className="dash">
                <div className="sort">
                    <h5>Device Type: </h5>
                    <select onChange={this.handleChange}>
                        <option value="All">All</option>
                        <option value="Mac">Mac</option>
                        <option value="Windows server">Windows server</option>
                        <option value="Windows workstation">Windows workstation</option>
                    </select>
                    <h5>Sort by: </h5>
                    <select>
                        <option value="System name" >System name</option>
                        <option value="HDD capacity" >HDD capacity</option>
                    </select>
                </div>
                {this.state.devices.map(device => (
                    <Device 
                        key = {device.id}
                        pk = {device.id}
                        name = {device.system_name}
                        type = {device.type}
                        capacity = {device.hdd_capacity}
                    />
                ))}
                <Link to="/add"><button className="add__device">Add Device</button></Link>
            </div>
        )
    }
}

export default Home;