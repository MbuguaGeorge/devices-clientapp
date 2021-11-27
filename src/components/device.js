import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Device = ({name, type, capacity, pk}) => {

    const [device, setDevice] = useState([]);
    const [item, setItem] = useState([]);

    const handleClick = () => {
        fetch(`http://localhost:3000/devices/${pk}/`,{
            method: 'DELETE'
        }).then(
            res => {
                setDevice({device: res.data})
            }
        )
        console.log(device)
    };

    console.log(item)
    console.log(device)
    return (
        <div>
            <div className="home">
                <ul>
                    <li>
                        <div>
                            <ol><h4>{name}</h4></ol>
                            <ol><span>{type}</span></ol>
                            <ol><h4>{capacity} GB</h4></ol>
                        </div>
                        <div className="edit__device">
                            <Link to={`/update/${pk}`}><button className="edit" component={Device}>Edit</button></Link>
                            <button className="delete" onClick={handleClick}>Delete</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Device;