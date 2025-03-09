// import React, { useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";


// const Login = () => {
//       const [message, setMessage] = useState("");
//       const navigate = useNavigate();
//       const location = useLocation();
//       const [showPassword, setShowPassword] = useState(false);



//       const { from, product } = location.state || { from: "/virtual-tryon" };


    


//       const togglePasswordVisibility = () => {
//         setShowPassword((prev) => !prev);
//     };
    
//     const [formData, setFormData] = useState({ email: "", password: "" });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSignupRedirect = () => {
//         if (product) {
//             localStorage.setItem("selectedProduct", JSON.stringify(product));
//         }
//         navigate("/signup", { state: { from: location.pathname, product } });
//     };


//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       try {


//           const response = await axios.post("http://localhost:5000/api/users/login", formData);
//           const { token, user } = response.data;
  
//           // Store JWT Token
//           localStorage.setItem("token", token);
//           localStorage.setItem("user", JSON.stringify(user));
  
//           setMessage("Login successful!");
//           alert("Login successful! Redirecting to Virtual Try-On...");
  
//         //  🔹 Retrieve product from localStorage if not available in location.state
//           let storedProduct = localStorage.getItem("selectedProduct");
//           let selectedProduct = product || (storedProduct ? JSON.parse(storedProduct) : null);
  
//           if (!selectedProduct) {
//               alert("Product not found! Redirecting to homepage.");
//               return navigate("/");
//           }
  
//           //  First navigate back to the product details page
//         //   navigate(from, { state: { product: selectedProduct } });


//         // navigate(from, { state: { product } });
//         // 🔹 First navigate back to the product details page
//         navigate(`/product/${selectedProduct._id}`, { state: { product: selectedProduct } });

//         // 🔹 Then redirect to Try-On page after a delay
//         setTimeout(() => {
//             navigate("/virtual-tryon", { state: { product: selectedProduct } });
//         }, 1000);

  
//           //  Then redirect to Try-On page
//         //   setTimeout(() => {
//         //     //   navigate("/virtual-tryon", { state: { product: selectedProduct } });
//         //     navigate("/virtual-tryon", { state: { product } });

//         //   }, 1000);
  
//       } catch (error) {
//           setMessage(error.response?.data?.message || "Login failed.");
//       }
//   };
    
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
//             padding: "90px 80px",
//             borderRadius: "10px",
//             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//             width: "350px",
//             textAlign: "center",
//         },
//         title: {
//             fontSize: "24px",
//             fontWeight: "bold",
//             marginBottom: "20px",
//         },
//         input: {
//             width: "100%",
//             padding: "10px",
//             margin: "10px 0",
//             borderRadius: "6px",
//             border: "none",
//             fontSize: "16px",
//             outline: "none",
//         },
//         forgotPassword: {
//             fontSize: "12px",
//             color: "#ddd",
//             textAlign: "left",
//             marginTop: "5px",
//             cursor: "pointer",
//         },
//         button: {
//             width: "100%",
//             backgroundColor: "#6366F1",
//             color: "white",
//             padding: "12px",
//             marginTop: "15px",
//             borderRadius: "6px",
//             fontSize: "16px",
//             fontWeight: "bold",
//             border: "none",
//             cursor: "pointer",
//             transition: "background 0.3s",
//         },
//         buttonHover: {
//             backgroundColor: "#4F46E5",
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.formBox}>
//                 <h2 style={styles.title}>Login</h2>
//                 <form onSubmit={handleSubmit}>
//                 <label style={{ width: "150px", display: "flex", textAlign: "left",  color: "white" }}htmlFor="email">Email Address</label>

//                     <input
//                         style={styles.input}
//                         type="email"
//                         name="email"
//                         placeholder="E-mail"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />
// <div style={{ display: "flex",flexDirection: "column", gap: "10px" }}>
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
//                     {/* <p style={styles.forgotPassword}>Forgot Password?</p> */}
//                     <button
//                         style={styles.button}
//                         onMouseOver={(e) => (e.target.style.background = styles.buttonHover.backgroundColor)}
//                         onMouseOut={(e) => (e.target.style.background = styles.button.backgroundColor)}
//                     >
//                         Login
//                     </button>
//                 </form>
//                 {message && <p style={{ color: "red", marginTop: "10px",fontSize:"18px" }}>{message}</p>}
//                 <p style={styles.loginText}>
//                     Signup if you don't have an account?
//                     <button style={styles.loginLink} onClick={handleSignupRedirect}>
//                         Sign up
//                     </button>
//                 </p>


//             </div>
//         </div>
//     );
// };

// export default Login;


//below good ui
// import React, { useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from './Navbar';

// const Login = () => {
//     const [message, setMessage] = useState("");
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [showPassword, setShowPassword] = useState(false);
//     const [popup, setPopup] = useState(null);

//     const { from, product } = location.state || { from: "/virtual-tryon" };

//     const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

//     const [formData, setFormData] = useState({ email: "", password: "" });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSignupRedirect = () => {
//         if (product) {
//             localStorage.setItem("selectedProduct", JSON.stringify(product));
//         }
//         navigate("/signup", { state: { from: location.pathname, product } });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:5000/api/users/login", formData);
//             const { token, user } = response.data;
//             localStorage.setItem("token", token);
//             localStorage.setItem("user", JSON.stringify(user));

//             setPopup({ type: "success", message: "Login successful! Redirecting to your try-on session ..." });

//             let storedProduct = localStorage.getItem("selectedProduct");
//             let selectedProduct = product || (storedProduct ? JSON.parse(storedProduct) : null);

//             setTimeout(() => {
//                 navigate(`/product/${selectedProduct?._id || ""}`, { state: { product: selectedProduct } });
//                 setTimeout(() => navigate("/virtual-tryon", { state: { product: selectedProduct } }), 1000);
//             }, 3000);
//         } catch (error) {
//             setPopup({ type: "error", message: error.response?.data?.message || "Login failed." });
//         }
//     };

//     return (
//         <div style={{ backgroundColor: "#ffff", minHeight: "100vh", padding: "20px" }}>
//         <Navbar/>

//         <div style={containerStyle}>
//             <div style={formContainerStyle}>
//                 <h2 style={headingStyle}>Login</h2>
//                 <form onSubmit={handleSubmit} style={formStyle}>
//                     <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required style={inputStyle} />
//                     <div style={passwordContainerStyle}>
//                         <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={inputStyle} />
//                         <button type="button" onClick={togglePasswordVisibility} style={toggleStyle}>{showPassword ? "👁️" : "🙈"}</button>
//                     </div>
//                     <button type="submit" style={buttonStyle}>Login</button>
//                 </form>
//                 <p style={linkStyle}>Don't have an account? <span onClick={handleSignupRedirect} style={spanStyle}>Sign up</span></p>
//             </div>
//             {popup && (
//                 <div style={{ ...popupStyle, top: "10px", backgroundColor: popup.type === "success" ? "#6c5ce7" : "#d63031" }}>
//                     <p>{popup.message}</p>
//                     <button onClick={() => setPopup(null)} style={buttonStyle}>Close</button>
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

// const linkStyle = {
//     marginTop: "10px", color: "#555"
// };

// const spanStyle = {
//     color: "#6366F1", cursor: "pointer", fontWeight: "bold"
// };

// const popupStyle = {
//     position: "fixed", left: "50%", transform: "translateX(-50%)", backgroundColor: "white", padding: "20px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", borderRadius: "10px", textAlign: "center", width: "300px"
// };

// export default Login;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext"; // ✅ Correct import
import Navbar from './Navbar';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth(); // ✅ Use useAuth instead of useContext(AuthContext)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before making request
  
    try {
      const response = await api.post("/users/login", { email, password });
  
      if (response.data.token) {
        login(response.data); // ✅ Pass the full userData object
        navigate("/");
      } else {
        setError("Invalid response from server.");
      }
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError("Invalid email or password");
    }
  };
  

  return (
    <div className="login-container">
      <Navbar/>
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
