import React, {Component} from 'react'

class Add extends Component{
    render(){
        return (
            <div>
                <div className="add">
                    <h3>Add Device</h3>
                    <form>
                        <div className="fields">
                            <h4>System name *</h4>
                            <input 
                                type="text"
                                name="system name"

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
                                name="capacity"
                            />
                        </div>
                        <div className="buttons">
                            <button className="close">Close</button>
                            <button className="save">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Add;