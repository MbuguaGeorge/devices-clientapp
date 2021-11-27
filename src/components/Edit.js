import React, {Component} from 'react'
import {Navigate} from 'react-router-dom'

class Edit extends Component{

    state = {
        dets: {
            system_name: '',
            type: '',
            hdd_capacity: ''
        },
        redirect: false
    }

    handleClick = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/devices`, {
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
                            <select>
                                <option value="Select Type" >Select Type</option>
                                <option value="Mac">Mac</option>
                                <option value="Windows server" >Windows server</option>
                                <option value="Windows workstation" >Windows workstation</option>
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
                            <button className="close">Close</button>
                            <button className="save" onClick={this.handleClick}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Edit;