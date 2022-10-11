import React, { Component, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Customer() {
    let navigate = useNavigate();
    

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [serviceDate, setServiceDate] = useState("");

    function handleSubmit(e) {
        
        e.preventDefault();

        let customerObject = {
            id: Math.floor(Math.random() * 1000),
            firstName: firstName,
            lastName: lastName,
            telephoneNumber: telephone,
            orderDate: orderDate,
            serviceTime: serviceDate
        }

       // alert(`First Name ${te}`)
        axios.post("https://localhost:7131/api/Customers", customerObject)
            .then(result => { navigate('/customers') });

    }
    return (
        <div className="customer-form">
            <h4>Add customer</h4>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text"
                        style={{ width: "200px" }}
                        className="form-control"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text"
                        style={{ width: "200px" }}
                        className="form-control"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Telephone</label>
                    <input type="number"
                        style={{width: "200px"} }
                        className="form-control"
                        value={telephone}
                        onChange={e => setTelephone(e.target.value)} />
                </div>
                <div className="row">
                    <div className="col col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <label>Date of Order:  </label>
                            <input
                                type="date"
                                className="form-control"
                                value={orderDate}
                                onChange={e => setOrderDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <label>Date of Service:  </label>
                            <input
                                type="date"
                                className="form-control"
                                value={serviceDate}
                                onChange={e => setServiceDate(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add customer" className="btn btn-primary" />
                </div>
            </form>
         </div>
        );
}

export default Customer;

function Submit() {
    return (
        <div>
        </div>
        );
}