import React, {Component} from 'react'
import {Navigate, Link} from 'react-router-dom'
import axios from 'axios'

class Edit extends Component{

    state = {
        dets: {
            system_name: '',
            type: '',
            hdd_capacity: '',
            id: ''
        },
        redirect: false,
        id: ''
    }

    componentDidMount(){
        const id = window.location.pathname
        const field = id.split('/')
        const pk = field[2]
        this.setState({id: pk})

        axios.get(`http://localhost:3000/devices/${pk}`).then (
            res => {
                this.setState({dets: res.data})
                console.log(this.state.dets)
            }
        )

    }

    handleClick = (event) => {
        let userId = this.state.id
        event.preventDefault();
        fetch(`http://localhost:3000/devices/${userId}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(this.state.dets)
        }).then (
            alert("Device has been updated")
        ).then(
            () => this.setState({redirect: true})
        )
    };


    inputChange = event => {
        const det = this.state.dets;
        det[event.target.name] = event.target.value;
        this.setState({dets : det})
    }

    handleChange = event => {
        const detail = this.state.dets;
        detail.type = event.target.value
        this.setState({dets: detail})
        console.log(this.state)
    }

    render(){
        const {redirect} = this.state;
        if (redirect) {
            return <Navigate replace to="/" />
        }
        return (
            <div>
                <div className="add">
                    <h3>Edit Device</h3>
                    <form>
                        <div className="fields">
                            <h4>System name *</h4>
                            <input 
                                type="text"
                                name="system_name"
                                value={this.state.dets.system_name}
                                onChange={this.inputChange}
                            />
                        </div>
                        <div className="fields">
                            <h4>Type *</h4>
                            <select value={this.state.dets.type} onChange={this.handleChange} >
                                <option >Select Type</option>
                                <option value="MAC">Mac</option>
                                <option value="WINDOWS_SERVER" >Windows server</option>
                                <option value="WINDOWS_WORKSTATION" >Windows workstation</option>
                            </select>
                        </div>
                        <div className="fields">
                            <h4>HDD Capacity (GB) *</h4>
                            <input 
                                type="number"
                                name="hdd_capacity"
                                value={this.state.dets.hdd_capacity}
                                onChange={this.inputChange}
                            />
                        </div>
                        <div className="buttons">
                            <Link to="/"><button className="close">Close</button></Link>
                            <button className="save" onClick={this.handleClick}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Edit;