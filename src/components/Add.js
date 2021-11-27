import React, {Component} from 'react'
import {Navigate} from 'react-router-dom'

class Add extends Component{

    state = {
        details: {
            system_name: '',
            type: '',
            hdd_capacity: ''
        },
        redirect: false
    }

    submit = event => {
        event.preventDefault();
        fetch(`http://localhost:3000/devices`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(this.state.details)
        }).then(
            alert("device added")
        ).then(
            () => this.setState({redirect: true})
        )
    };

    inputChange = event => {
        const detail = this.state.details;
        detail[event.target.name] = event.target.value;
        this.setState({details : detail})
    }

    handleChange = event => {
        this.setState({value:event.target.value})
    }

    render(){
        const {redirect} = this.state;
        if (redirect) {
            return <Navigate replace to="/" />
        }
        return (
            <div>
                <div className="add">
                    <h3>Add Device</h3>
                    <form>
                        <div className="fields">
                            <h4>System name *</h4>
                            <input 
                                type="text"
                                name="system_name"
                                value={this.state.details.system_name}
                                onChange={this.inputChange}
                            />
                        </div>
                        <div className="fields">
                            <h4>Type *</h4>
                            <select value={this.state.details.type} onChange={this.handleChange}>
                                <option >Select Type</option>
                                <option >Mac</option>
                                <option >Windows server</option>
                                <option >Windows workstation</option>
                            </select>
                        </div>
                        <div className="fields">
                            <h4>HDD Capacity (GB) *</h4>
                            <input 
                                type="number"
                                name="hdd_capacity"
                                value={this.state.details.hdd_capacity}
                                onChange={this.inputChange}
                            />
                        </div>
                        <div className="buttons">
                            <button className="close">Close</button>
                            <button className="save" onClick={this.submit}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Add;