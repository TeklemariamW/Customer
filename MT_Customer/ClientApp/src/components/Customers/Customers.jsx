import React, { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Customer from './Customer';

function Customers() {

    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        setLoading(true);

        fetch('https://localhost:7131/api/Customers')
            .then((response) => response.json())
            .then(setCustomers)
            .then(() => setLoading(false));
    }, []);

   

    let content = loading ? (
        <p><em>Loading....</em></p>
    ) :
        (<RenderAllcustomers customers={customers} />);

    return ( 
        <div>
            <Link to="/customer">
               Add Customer
            </Link>
           
            <h4>All customer</h4>
            <p>What time each want to have service</p>
            <div>{content}</div>
        </div>
       


    )

    function RenderAllcustomers({ customers } ) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Telefone</th>
                        <th>Order Date</th>
                        <th>Service Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.firstName}</td>
                                <td>{customer.lastName}</td>
                                <td>{customer.telephoneNumber}</td>
                                <td>{new Date(customer.orderedDate).toLocaleDateString()}</td>
                                <td>{customer.serviceTime ? new Date(customer.serviceTime).toLocaleDateString() :
                                    '-'}</td>
                                <td>
                                    <div className=" form-group">
                                        <button className="btn btn-primary">Update</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </div>
                                   
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
    }
}

export default Customers;



