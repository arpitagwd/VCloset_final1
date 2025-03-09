
import React, { useState } from 'react';
import Navbar from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Ensure each cart item has a quantity (default: 1)
    const cart = (location.state?.cart || []).map(item => ({
        ...item,
        quantity: item.quantity || 1, // Assign a default quantity if undefined
    }));

    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    
    // Calculate subtotal (handling potential undefined values)
    const subtotal = cart.reduce((acc, item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = parseInt(item.quantity) || 1;
        return acc + price * quantity;
    }, 0);

    const shippingFee = subtotal > 1000 ? 0 : 50; // Free shipping over ₹1000
    const totalPrice = subtotal + shippingFee;

    const handleConfirmOrder = () => {
        console.log("Order confirmed:", cart, "Shipping to:", address, "Payment Method:", paymentMethod);
        setOrderConfirmed(true);
        setTimeout(() => navigate('/'), 5000);
    };

    if (cart.length === 0) {
        return (
            <>
                <Navbar />
                <h2 style={styles.error}>Error: No product details found for checkout.</h2>
            </>
        );
    }

    return (
        <div style={{ backgroundColor: "#ffff", minHeight: "100vh", padding: "20px" }}>
            <Navbar />
            <div style={styles.contentContainer}>
                {orderConfirmed ? (
                    <div style={styles.successMessage}>
                        <h1>🎉 Order Placed Successfully! 🎉</h1>
                        <p>Thank you for shopping with team VCloset. Your order will be delivered soon!</p>
                    </div>
                ) : (
                    <div style={styles.container}>
                        <h1 style={styles.title}>Checkout</h1>

                        {/* Shipping Address */}
                        <div style={styles.section}>
                            <h2 style={styles.sectionTitle}>Shipping Address</h2>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter your address"
                                style={styles.input}
                            />
                        </div>

                        {/* Payment Method */}
                        <div style={styles.section}>
                            <h2 style={styles.sectionTitle}>Payment Method</h2>
                            <select 
                                value={paymentMethod} 
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                style={styles.select}
                            >
                                <option value="cod">Cash on Delivery</option>
                            </select>
                        </div>

                        {/* Order Summary */}
                        <div style={styles.section}>
                            <h2 style={styles.sectionTitle}>Order Summary</h2>
                            <ul style={styles.productList}>
                                {cart.map((item, index) => (
                                    <li key={index} style={styles.productItem}>
                                        <img src={`http://localhost:5000${item.image}`} alt={item.name} style={styles.productImage} />
                                        <div>
                                            <span style={styles.productName}>{item.name}</span>
                                            <span style={styles.productDetails}>Size: {item.size || 'N/A'} | Qty: {item.quantity}</span>
                                        </div>
                                        <span style={styles.productPrice}>₹{(item.price * item.quantity).toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>
                            <div style={styles.summary}>
                                <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
                                <p>Shipping Fee: ₹{shippingFee.toFixed(2)}</p>
                                <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
                            </div>
                        </div>

                        <button onClick={handleConfirmOrder} style={styles.confirmButton}>Confirm Order</button>
                    </div>
                )}
            </div>
        </div>
    );
};

// Styles
const styles = {
    pageContainer: {
        backgroundColor: "#f6f6f6",
        minHeight: "100vh",
    },
    contentContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "80px",
    },
    container: {
        width: '80%',
        maxWidth: '800px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
    },
    title: {
        textAlign: 'center',
        color: '#333',
    },
    section: {
        marginBottom: '20px'
    },
    sectionTitle: {
        borderBottom: '1px solid #ccc',
        paddingBottom: '8px',
        color: '#444'
    },
    productList: {
        listStyle: 'none',
        padding: '0'
    },
    productItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 0',
        borderBottom: '1px solid #e0e0e0'
    },
    productImage: {
        width: '60px',
        height: '60px',
        objectFit: 'cover',
        borderRadius: '4px',
        marginLeft: '60px'
    },
    productName: {
        fontWeight: 'bold',
        fontSize: '18px'
    },
    productDetails: {
        fontSize: '14px',
        color: '#666',
        marginLeft: "28px"
    },
    productPrice: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#388e3c'
    },
    summary: {
        padding: '10px',
        borderTop: '1px solid #ccc',
        textAlign: 'right',
        fontSize: '16px'
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    },
    select: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    },
    confirmButton: {
        backgroundColor: 'green',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '4px',
        fontSize: '28px',
        width: '100%',
        cursor: 'pointer'
    },
    successMessage: {
        textAlign: 'center',
        backgroundColor: '#d4edda',
        color: '#155724',
        padding: '20px',
        borderRadius: '8px',
        width: '60%',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    },
    error: {
        textAlign: 'center',
        color: 'red'
    }
};

export default Checkout;
