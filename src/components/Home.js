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

    handleChange = filterParam => {
        axios.get(`http://localhost:3000/devices`).then(
            res => {
                this.setState({devices: res.data})
                console.log("filter by ", filterParam);

                let devices = this.state.devices.filter(device => {
                    return device.type === filterParam;

                });
                if (filterParam === 'ALL'){
                    // eslint-disable-next-line no-restricted-globals
                    location.reload()
                }

                console.log(devices)
                this.setState({devices: devices})
            }
        );
    };

    sortByType = sortParam => {
        console.log("sorting by ", sortParam);

        if(sortParam === "System name"){
            sortParam = "system_name";
        }else if(sortParam === "HDD capacity"){
            sortParam = "hdd_capacity"
        }
        let devices = this.state.devices.sort(this.dynamicSort(sortParam));
        this.setState({devices: devices})
        console.log(this.state.devices)
    }

    dynamicSort = property => {
        var sortOrder = 1;
        if(property[0] === "-"){
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1:0;
            return result * sortOrder;
        };
    };

    render(){
        console.log(this.state.devices)

        return (
            <div className="dash">
                <div className="sort">
                    <h5>Device Type: </h5>
                    <select onChange={(e) => this.handleChange(e.target.value)}>
                        <option value="ALL">All</option>
                        <option value="MAC">Mac</option>
                        <option value="WINDOWS_SERVER">Windows server</option>
                        <option value="WINDOWS_WORKSTATION">Windows workstation</option>
                    </select>
                    <h5>Sort by: </h5>
                    <select onChange={(e) => this.sortByType(e.target.value)}>
                        <option value="System name" >System name</option>
                        <option value="HDD capacity" >HDD capacity</option>
                    </select>
                    <Link to="/add"><button className="add__device">Add Device</button></Link>
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
            </div>
        )
    }
}

export default Home;