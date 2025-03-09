// import React, { useState, useEffect } from "react";

// const Profile = () => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const fetchUser = () => {
//             const storedUser = localStorage.getItem("user");
//             if (storedUser) {
//                 setUser(JSON.parse(storedUser));
//             }
//         };

//         fetchUser();

//         // 🔹 Listen for storage updates (when user logs in / signs up)
//         window.addEventListener("storage", fetchUser);

//         return () => {
//             window.removeEventListener("storage", fetchUser);
//         };
//     }, []);

//     return (
//         <div>
//             <h2>User Profile</h2>
//             {user ? (
//                 <div>
//                     <p><strong>Name:</strong> {user.Firstname} {user.Lastname}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <p><strong>Phone:</strong> {user.phonenum}</p>
//                     <p><strong>Address:</strong> {user.address}</p>
//                 </div>
//             ) : (
//                 <p>No user logged in.</p>
//             )}
//         </div>
//     );
// };

// export default Profile;






//above works 



// import React, { useState, useEffect } from "react";
// import Navbar from './Navbar';
// import { useAuth } from "../context/AuthContext";
// import { useNavigate  } from "react-router-dom";

// const Profile = () => {
//     const navigate = useNavigate();
//     const { user, logout } = useAuth();
//     if (!user) {
//         return (   <div><Navbar/>        
// <p>Please log in to view your profile.</p></div> );
//       }
    
//     const handleSignOut = () => {
//             logout();
//             navigate("/login");
//           };
    

//     return (
//         <div style={{ backgroundColor: "#ffff", minHeight: "100vh", padding: "20px" }}>
//             <Navbar/>

//         <div style={styles.container}>
//             <div style={styles.card}>
//                 <h2 style={styles.heading}>User Profile</h2>
//                 {user ? (
//                     <div style={styles.info}>
//                         <p><strong>Name:</strong> {user.Firstname} {user.Lastname}</p>
//                         <p><strong>Email:</strong> {user.email}</p>
//                         <p><strong>Phone:</strong> {user.phonenum}</p>
//                         <p><strong>Address:</strong> {user.address}</p>
//                         <button onClick={handleSignOut} style={styles.signOutButton}>
//                             Sign Out
//                         </button>
//                     </div>
//                 ) : (
//                     <p style={styles.noUser}>No user logged in.</p>
//                 )}
//             </div>
//         </div>
//         </div>

//     );
// };

// // Inline styles
// const styles = {
//     container: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f4f4f4",
//     },
//     card: {
//         backgroundColor: "#fff",
//         padding: "20px",
//         borderRadius: "12px",
//         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//         width: "350px",
//         textAlign: "center",
//     },
//     heading: {
//         fontSize: "24px",
//         fontWeight: "bold",
//         color: "#333",
//         marginBottom: "15px",
//     },
//     info: {
//         textAlign: "left",
//         lineHeight: "1.8",
//         color: "#555",
//     },
//     noUser: {
//         color: "#888",
//     },
//     signOutButton: {
//         marginTop: "15px",
//         width: "100%",
//         padding: "10px",
//         backgroundColor: "#d9534f",
//         color: "#fff",
//         border: "none",
//         borderRadius: "8px",
//         cursor: "pointer",
//         fontSize: "16px",
//         transition: "background 0.3s",
//     },
// };

// export default Profile;



import React from "react";
import Navbar from "./Navbar";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleSignOut = () => {
        logout();
        navigate("/login");
    };

    return (
        <div><Navbar />
        <div style={styles.container}>
            
            <div style={styles.profileCard}>
                {user ? (
                    <>
                        <h2 style={styles.heading}>User Profile</h2>
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png" 
                            alt="User Avatar" 
                            style={styles.avatar}
                        />
                        <div style={styles.info}>
                            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phoneNumber || "Not provided"}</p>
                            <p><strong>Address:</strong> {user.address || "Not provided"}</p>
                        </div>
                        <button onClick={handleSignOut} style={styles.signOutButton}>
                            Sign Out
                        </button>
                    </>
                ) : (
                    <div style={styles.noUserContainer}>
                        <h2>Welcome to VCloset</h2>
                        <p>Please log in to access your profile.</p>
                        <button onClick={() => navigate("/login")} style={styles.loginButton}>
                            Log In
                        </button>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
};

// Styles
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "20px",
    },
    profileCard: {
        backgroundColor: "#fff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: "380px",
        textAlign: "center",
    },
    heading: {
        fontSize: "22px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "15px",
    },
    avatar: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        marginBottom: "15px",
    },
    info: {
        textAlign: "left",
        lineHeight: "1.8",
        color: "#555",
    },
    signOutButton: {
        marginTop: "15px",
        width: "100%",
        padding: "12px",
        backgroundColor: "#d9534f",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background 0.3s",
    },
    signOutButtonHover: {
        backgroundColor: "#c9302c",
    },
    noUserContainer: {
        textAlign: "center",
    },
    loginButton: {
        marginTop: "10px",
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background 0.3s",
    },
};

export default Profile;
