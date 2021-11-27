import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component{
    render(){
        return (
            <div className="dash">
                <div className="sort">
                    <h5>Device Type: </h5>
                    <select>
                        <option value="All" >All</option>
                        <option value="Mac">Mac</option>
                        <option value="Windows server" >Windows server</option>
                        <option value="Windows workstation" >Windows workstation</option>
                    </select>
                    <h5>Sort by: </h5>
                    <select>
                        <option value="System name" >System name</option>
                        <option value="HDD capacity" >HDD capacity</option>
                    </select>
                </div>
                <div className="home">
                    <ul>
                        <li>
                            <div>
                                <ol><h4>SUSAN-DESKTOP</h4></ol>
                                <ol><span>Windows Workstation</span></ol>
                                <ol><h4>128 GB</h4></ol>
                            </div>
                            <div className="edit__device">
                                <Link to="/update"><button className="edit">Edit</button></Link>
                                <button className="delete">Delete</button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <ol><h4>MAC-LOCAL-FREDDY</h4></ol>
                                <ol><span>Mac</span></ol>
                                <ol><h4>256 GB</h4></ol>
                            </div>
                            <div className="edit__device">
                                <button className="edit">Edit</button>
                                <button className="delete">Delete</button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <ol><h4>SMART-SERVER</h4></ol>
                                <ol><span>Windows Server</span></ol>
                                <ol><h4>1024 GB</h4></ol>
                            </div>
                            <div className="edit__device">
                                <button className="edit">Edit</button>
                                <button className="delete">Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <Link to="/add"><button className="add__device">Add Device</button></Link>
            </div>
        )
    }
}

export default Home;