
// import React, { useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";


// const SignUp = ({ isOpen, onClose }) => {
//     const [message, setMessage] = useState("");
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    
//     const togglePasswordVisibility = () => {
//         setShowPassword((prev) => !prev);
//     };
//     const toggleConfirmPasswordVisibility = () => {
//         setShowConfirmPassword((prev) => !prev);
//       };
    

//     const { from, product } = location.state || { from: "/" };

//     const [formData, setFormData] = useState({
//         Firstname: "",
//         Lastname: "",
//         email: "",
//         password: "",
//         cpassword: "",
//         address: "",
//         phonenum: "",
//     });

//     if (!isOpen) return null;

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleLoginRedirect = () => {
//         if (product) {
//             localStorage.setItem("selectedProduct", JSON.stringify(product));
//         }
//         navigate("/login", { state: { from: location.pathname, product } });
//     };
    

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (formData.password.length < 8) {
//             setMessage("Password must be at least 8 characters long.");
//             return;
//         }

//         if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
//             setMessage("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
//             return;
//         }

//         if (formData.password !== formData.cpassword) {
//             setMessage("Passwords do not match.");
//             return;
//         }

//         if (!/^[a-zA-Z0-9_-]{1,20}$/.test(formData.Firstname)) {
//             setMessage("First must be 3-20 characters long, only letters, numbers, underscores, and hyphens allowed.");
//             return;
//         }
//         if (!/^[a-zA-Z0-9_-]{1,20}$/.test(formData.Lastname)) {
//             setMessage("Last Last name must be 3-20 characters long, only letters, numbers, underscores, and hyphens allowed.");
//             return;
//         }


//         if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
//             setMessage("Invalid email format.");
//             return;
//         }

//         if (!/^\+?\d{10,15}$/.test(formData.phonenum)) {
//             setMessage("Phone number must be 10-15 digits long and can include a leading + for country code.");
//             return;
//         }

//         try {console.log("Form Data Before Sending:", formData);

//             const response = await axios.post("http://localhost:5000/api/users/signup", formData);
//             setMessage(response.data.message);
//             alert("Signup successful! Redirecting to Virtual Try-On...");
            


//             // // Now auto-login the user
//             // const loginResponse = await axios.post("http://localhost:5000/api/users/login", {
//             //     email: formData.email,
//             //     password: formData.password,
//             // });

//             // const { token, user } = loginResponse.data;

//             // // Store JWT Token & User Data
//             // localStorage.setItem("token", token);
//             // localStorage.setItem("user", JSON.stringify(user));

//             // // 🔹 Dispatch event to update profile page
//             // window.dispatchEvent(new Event("storage"));


//             // Redirect back to the product details page first
//             // navigate(from, { state: { product } });

//             //  redirect to Try-On page

//             let storedProduct = localStorage.getItem("selectedProduct");
//             let selectedProduct = product || (storedProduct ? JSON.parse(storedProduct) : null);
    
//             if (!selectedProduct) {
//                 alert("Product not found! Redirecting to homepage.");
//                 return navigate("/");
//             }
    
//             //  First navigate back to the product details page
//           //   navigate(from, { state: { product: selectedProduct } });
  
  
//           // navigate(from, { state: { product } });
//           // 🔹 First navigate back to the product details page
//           navigate(`/product/${selectedProduct._id}`, { state: { product: selectedProduct } });
  
//           // 🔹 Then redirect to Try-On page after a delay
//           setTimeout(() => {
//               navigate("/virtual-tryon", { state: { product: selectedProduct } });
//           }, 1000);
  
  
//             // onClose();
//         } catch (error) {
//             setMessage(error.response?.data?.message || "Signup failed.");
//         }
//     };

//     const styles = {
//         container: {
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             height: "100vh",
//             backgroundColor: "white",
//         },
//         formBox: {
//             backgroundColor: "#141204",
//             color: "white",
//             padding: "60px 100px",
//             borderRadius: "15px",
//             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//             width: "550px",
//             textAlign: "center",
//         },
//         input: {
//             width: "100%",
//             padding: "12px",
//             margin: "8px 0",
//             borderRadius: "6px",
//             border: "none",
//             fontSize: "16px",
//             outline: "none",
//         },
//         button: {
//             width: "100%",
//             backgroundColor: "#6366F1",
//             color: "white",
//             padding: "12px",
//             marginTop: "10px",
//             borderRadius: "6px",
//             fontSize: "18px",
//             fontWeight: "bold",
//             border: "none",
//             cursor: "pointer",
//             transition: "background 0.3s",
//         },
//         loginText: {
//             marginTop: "15px",
//             fontSize: "14px",
//             color: "#ddd",
//         },
//         loginLink: {
//             color: "#6366F1",
//             cursor: "pointer",
//             fontWeight: "bold",
//             marginLeft: "5px",
//         },

//         buttonHover: {
//             backgroundColor: "#4F46E5",
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.formBox}>
// <p style={{fontSize:"34px",fontWeight: "bold"}}>Sign Up</p>
//                 {/* <img src="/logo.png" alt="Logo" width="200" /> */}
//                 <form onSubmit={handleSubmit}>
//                 <label style={{ width: "150px", display: "flex", textAlign: "left",  color: "white" }} htmlFor="Firstname">First Name</label>
//                     <input style={styles.input} type="text" name="Firstname" placeholder="First name" onChange={handleChange} required />

//                     <label style={{ width: "150px", display: "flex", textAlign: "left",  color: "white" }}htmlFor="Lastname">Last Name</label>
//                     <input style={styles.input} type="text" name="Lastname" placeholder="Last name" onChange={handleChange} required />
//                     <label style={{ width: "150px", display: "flex", textAlign: "left",  color: "white" }}htmlFor="email">Email Address</label>
//                     <input style={styles.input} type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
//                     <label style={{ width: "150px", display: "flex", textAlign: "left",  color: "white" }}htmlFor="phonenum">Phone Number</label>
//                     <input style={styles.input} type="text" name="phonenum" placeholder="Phone Number" onChange={handleChange} required />
//                     <div style={{ display: "flex",flexDirection: "column", gap: "10px" }}>
//     <label 
//         style={{ width: "150px", textAlign: "left", color: "white" }} 
//         htmlFor="password"
//     >
//         Password
//     </label>

//     <div style={{ position: "relative", width: "100%" }}>
//         <input
//             style={{ ...styles.input, paddingRight: "40px" }}
//             type={showPassword ? "text" : "password"}
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//         />
//         <span 
//             onClick={togglePasswordVisibility}
//             style={{
//                 position: "absolute",
//                 right: "10px",
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 cursor: "pointer",
//                 color: "#666",
//                 fontSize: "18px"
//             }}
//         >
//             {showPassword ? "👁️" : "🙈"}
//         </span>
//     </div>
// </div>
// <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//         <label
//           htmlFor="cpassword"
//           style={{ textAlign: "left", color: "white", fontSize: "16px", fontWeight: "bold" }}
//         >
//           Confirm Password
//         </label>

//         <div style={{ position: "relative", width: "100%" }}>
//           <input
//             style={{ padding: "10px", width: "100%", border: "1px solid #ccc", borderRadius: "5px", paddingRight: "40px" }}
//             type={showConfirmPassword ? "text" : "password"}
//             name="cpassword"
//             placeholder="Confirm Password"
//             value={formData.cpassword}
//             onChange={handleChange}
//             required
//           />
//           <span
//             onClick={toggleConfirmPasswordVisibility}
//             style={{
//               position: "absolute",
//               right: "10px",
//               top: "50%",
//               transform: "translateY(-50%)",
//               cursor: "pointer",
//               fontSize: "18px",
//               color: "#666",
//             }}
//           >
//             {showConfirmPassword ? "👁️" : "🙈"}
//           </span>
//         </div>
//       </div>
//                      <label style={{ width: "150px", display: "flex", textAlign: "left", color: "white" }}htmlFor="address">Address</label>
//                     <input style={styles.input} type="text" name="address" placeholder="Address" onChange={handleChange} required />
//                      <button style={styles.button} onMouseOver={(e) => (e.target.style.background = styles.buttonHover.backgroundColor)} onMouseOut={(e) => (e.target.style.background = styles.button.backgroundColor)}>
//                         SIGN UP
//                     </button>
//                 </form>
//                 {message && <p style={{ color: "red", marginTop: "10px",fontSize:"18px" }}>{message}</p>}
//                 {/* <p style={styles.loginText}>
//                     Already have an account?
//                     <button style={styles.loginLink} onClick={handleLoginRedirect}>
//                         Login
//                     </button>
//                 </p> */}


//             </div>
//         </div>
//     );
// };

// export default SignUp;




//good ui


// import React, { useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from './Navbar';

// const SignUp = ({ isOpen, onClose }) => {
//     const [message, setMessage] = useState("");
//     const [showPopup, setShowPopup] = useState(false);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
//     const togglePasswordVisibility = () => setShowPassword(prev => !prev);
//     const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(prev => !prev);

//     const { from, product } = location.state || { from: "/" };
    
//     const [formData, setFormData] = useState({
//         Firstname: "", Lastname: "", email: "", password: "", cpassword: "", address: "", phonenum: ""
//     });

//     if (!isOpen) return null;

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (formData.password !== formData.cpassword) {
//             setMessage("Passwords do not match.");
//             setShowPopup(true);
//             return;
//         }
        
//         try {
//             const response = await axios.post("http://localhost:5000/api/users/signup", formData);
//             setMessage(response.data.message);
//             setShowPopup(true);
            
//             setTimeout(() => {
//                 navigate("/login", { state: { product } });

//                 // navigate("/virtual-tryon", { state: { product } });
//             }, 2500);
//         } catch (error) {
//             setMessage(error.response?.data?.message || "Signup failed.");
//             setShowPopup(true);
//         }
//     };

//     return (
//         <div style={{ backgroundColor: "#ffff", minHeight: "100vh", padding: "20px" }}>
//         <Navbar/>

//         <div style={containerStyle}>
//             <div style={formContainerStyle}>
//                 <h2 style={headingStyle}>Create Your Account</h2>
//                 <form onSubmit={handleSubmit} style={formStyle}>
//                     <input type="text" name="Firstname" placeholder="First Name" onChange={handleChange} required style={inputStyle} />
//                     <input type="text" name="Lastname" placeholder="Last Name" onChange={handleChange} required style={inputStyle} />
//                     <input type="email" name="email" placeholder="Email id" onChange={handleChange} required style={inputStyle} />
//                     <input type="text" name="phonenum" placeholder="Phone Number" onChange={handleChange} required style={inputStyle} />
//                     <input type="text" name="address" placeholder="Address" onChange={handleChange} required style={inputStyle} />
                    
//                     <div style={passwordContainerStyle}>
//                         <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange} required style={inputStyle} />
//                         <button type="button" onClick={togglePasswordVisibility} style={toggleStyle}>{showPassword ? "👁️" : "🙈"}</button>
//                     </div>
                    
//                     <div style={passwordContainerStyle}>
//                         <input type={showConfirmPassword ? "text" : "password"} name="cpassword" placeholder="Confirm Password" onChange={handleChange} required style={inputStyle} />
//                         <button type="button" onClick={toggleConfirmPasswordVisibility} style={toggleStyle}>{showConfirmPassword ? "👁️" : "🙈"}</button>
//                     </div>
                    
//                     <button type="submit" style={buttonStyle}>SIGN UP</button>
//                 </form>
//             </div>
            
//             {showPopup && (
//                 <div style={popupStyle}>
//                     <p>{message}</p>
//                     <button onClick={() => setShowPopup(false)} style={buttonStyle}>OK</button>
//                 </div>
//             )}
//         </div>
//         </div>

//     );
// };

// const containerStyle = {
//     display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#f4f4f9"
// };

// const formContainerStyle = {
//     backgroundColor: "#fff", color: "#333", padding: "40px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", width: "380px", textAlign: "center"
// };

// const headingStyle = {
//     marginBottom: "20px", color: "#444"
// };

// const formStyle = {
//     display: "flex", flexDirection: "column", gap: "12px"
// };

// const inputStyle = {
//     width: "100%", padding: "12px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px", outline: "none"
// };

// const passwordContainerStyle = {
//     position: "relative", width: "100%"
// };

// const buttonStyle = {
//     width: "100%", backgroundColor: "#6366F1", color: "white", padding: "14px", marginTop: "15px", borderRadius: "6px", fontSize: "18px", fontWeight: "bold", border: "none", cursor: "pointer", transition: "background 0.3s"
// };

// const toggleStyle = {
//     background: "none", border: "none", cursor: "pointer", position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", fontSize: "18px"
// };

// const popupStyle = {
//     position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "#fff", padding: "20px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", borderRadius: "10px", textAlign: "center", width: "300px"
// };

// export default SignUp;


import { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", phoneNumber: "", address: "" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/register", form);
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="First Name" onChange={(e) => setForm({ ...form, firstName: e.target.value })} required />
        <input type="text" placeholder="Last Name" onChange={(e) => setForm({ ...form, lastName: e.target.value })} required />
        <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <input type="text" placeholder="Phone Number" onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} required />
        <input type="text" placeholder="Address" onChange={(e) => setForm({ ...form, address: e.target.value })} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
