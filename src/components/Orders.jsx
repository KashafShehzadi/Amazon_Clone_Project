import React, { useState, useEffect } from 'react';
import { db } from "../firebase.js"; // Ensure this is the correct import
import { collection, doc, orderBy, onSnapshot } from 'firebase/firestore'; // Import Firestore functions
import '../CSS/Orders.css';
import { useStateValue } from "../StateProvider.jsx";
import Order from './Order.jsx';

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        let unsubscribe;
        if (user) {
            const ordersRef = collection(db, 'users', user.uid, 'orders'); // Using the modular approach
            unsubscribe = onSnapshot(ordersRef, (snapshot) => {
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })));
            });
        } else {
            setOrders([]);
        }

        return () => {
            if (unsubscribe) unsubscribe(); // Cleanup listener
        };
    }, [user]);

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className='orders__order'>
                {orders.map(order => (
                    <Order key={order.id} order={order} />
                ))}
            </div>
        </div>
    );
}

export default Orders;
