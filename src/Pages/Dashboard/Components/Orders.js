import React from "react";
import { Table } from "react-bootstrap";
import useOrders from "../../../hooks/useOrders";
import useAuth from "../../../hooks/useAuth";

const Orders = () => {
    const { user } = useAuth();

    const userEmail = user.email;

    const [orders] = useOrders();
    return (
        <div>
            <h3 className="text-center">Orders</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Phone No</th>
                        <th>Tx ID</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map(order => <tr key={order._id}>
                        {order.email === userEmail ? <>
                            <td>{order.displayName}</td>
                            <td>{order.email}</td>
                            <td>{order.toyName}</td>
                            <td>{order.phone}</td>
                            <td>{order.TxID}</td>
                            <td>{order.status}</td>
                        </> : <></>}
                    </tr>)}
                </tbody>
            </Table>
        </div>
    );
};

export default Orders;