// // working with db  n ui
// import { useContext, useState, useEffect } from "react";
// import { useParams, useNavigate, Link,useLocation  } from "react-router-dom";
// import axios from "axios";
// import { CartContext } from "../context/CartContext";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ProductDetails = () => {
//   const { id } = useParams(); 
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { addToCart } = useContext(CartContext);

//   const [userRegistered, setUserRegistered] = useState(null);


//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/products/${id}`);
//         setProduct(response.data);
//       } catch (err) {
//         console.error("Error fetching product:", err);
//         setError("Failed to load product.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchProduct();
//   }, [id]);


//   useEffect(() => {
//     const isRegistered = localStorage.getItem("userRegistered");
//     setUserRegistered(isRegistered === "true");
//   }, []);



//   const handleAddToCart = () => {
//     if (product) {
//       addToCart(product);
//       toast.success(`${product.name} added to cart!`);
//     }
//   };

//   const handleTryOn = () => {
//     // navigate("/virtual-tryon", { state: { product } });
//     if (userRegistered === null) {
//       toast.info("Checking user status...");
//       return;
//     }

//     if (userRegistered) {
//       localStorage.setItem("selectedProduct", JSON.stringify(product));
//       navigate("/signup", { state: { from: location.pathname, product } });
//           } else {
//       navigate("/login", { state: { from: location.pathname, product } });
//     }
//   };


//   const handleProceedToBuy = () => {
//     if (!product || !product._id) {
//       console.error("Error: Product ID is missing!", product);
//       toast.error("Error: Product ID is missing!");
//       return;
//     }
//     localStorage.setItem("selectedProduct", JSON.stringify(product)); // Store product in localStorage

//     console.log("Navigating to checkout with Product ID:", product._id);
//     navigate("/checkout", { state: {cart: [product] } }); 
//   };

//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2>Error: {error}</h2>;
//   if (!product) return <h2>Product not found</h2>;

//     return (
//       <div style={styles.pageContainer}>
//       <ToastContainer position="top-right" autoClose={2000} />

//         <nav style={styles.navbar}>
//         <img src="/logo.png" alt="Logo" width="200" />
//       <div style={styles.searchContainer}>
//         <div style={styles.navLinks}>
//           <Link to="/" style={styles.link}>Home</Link>
//           <Link to="/men" style={styles.link}>Men</Link>
//           <Link to="/women" style={styles.link}>Women</Link>
//           <Link to="/help" style={styles.link}>Help</Link>
//         </div>
//         <div style={styles.searchContainer}>
//           <input type="text" placeholder="Search for items" style={styles.searchInput} />
//           <Link to="/search" style={styles.icon}>🔍</Link>
//           <Link to="/favourites" style={styles.icon}>❤️</Link>
//           <Link to="/cart" style={styles.icon}>🛒</Link>
//           <Link to="/profile" style={styles.icon}>👤</Link>
//         </div>


//       </div>
//         </nav>
  
//         {/* Product Details */}

//         <div style={styles.container}>
        
//         <div style={styles.imageSection}>
//   <img
//     src={product.image ? `http://localhost:5000${product.image}` : "https://via.placeholder.com/300"}
//     alt={product.name}
//     style={styles.productImage}
//     onError={(e) => e.target.src = "https://via.placeholder.com/300"} // Fallback image
//   />
// </div>
//           <div style={styles.detailsSection}>
//             <h1 style={styles.productName}>{product.name}</h1>
//             <h2 style={styles.productPrice}>₹{product.price}</h2>
//             <h3>Product Details:</h3>
//             <p>{product.description}</p>
//             <p>{product.size}</p>

            
//             <div style={styles.buttonContainer}>
//               <button style={styles.tryOnButton} onClick={handleTryOn}>
//                 👗 Virtual Try-On
//               </button>
//               <button style={styles.addToCartButton} onClick={handleAddToCart}>
//                 🛒 Add to Cart
//               </button>
//               <button style={styles.proceedToBuyButton} onClick={handleProceedToBuy}>
//                 💸 Buy Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   const styles = {
//     pageContainer: {
//       backgroundColor: "#ffff",
//       minHeight: "100vh",
//       padding: "20px",
//     },
//     navbar: {
//       backgroundColor: "#C0BFBD",
//       padding: "20px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       borderBottom: "2px solid #D3D3D3",
//     },
//     brand: {
//       fontSize: "28px",
//       fontWeight: "bold",
//       fontFamily: "serif",
//       color: "#8B8000",
//     },
//     navLinks: {
//       display: "flex",
//       gap: "40px",
//       fontSize: "18px",
//       fontWeight: "600",
//       textDecoration: "none",
//       color: "black",
//     },
//     searchContainer: {
//       display: "flex",
//       alignItems: "center",
//       gap: "10px",
//     },
//     icon: {
//       fontSize: "28px",
//       textDecoration: "none",
//       color: "#fff",
//     },
//       container: {
//       display: "flex",
//       display: 'flex',
//       padding: '20px',
//       backgroundColor: "#ffff",
//       borderRadius: '8px',
//       boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//       gap: '30px', // 
//         },
//         imageSection: {
//           flex: 1,
//           backgroundColor: "#ebf2fa",
//           borderRadius: '8px',
//           padding: '20px',
//         },
//             productImage: {
//       width: "100%",
//       borderRadius: "8px",
//     },
//     detailsSection: {
//       flex: 2,
//       backgroundColor: '#ebf2fa',
//       borderRadius: '8px',
//       padding: '20px',
//       display: 'flex',
//   flexDirection: 'column', 
//   justifyContent: 'space-between', 

//     },
//         productName: {
//       fontSize: "28px",
//       fontWeight: "700",
//     },
//     productPrice: {
//       fontSize: "22px",
//       color: "#555",
//       margin: "10px 0",
//     },
//     buttonContainer: {
//       display: "flex",
//       gap: "10px",
//       marginTop: "20px",
//     },
//     tryOnButton: {
//       flex: 1,
//       padding: "10px 15px",
//       backgroundColor: "#28a745",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       transition: "background-color 0.3s",
//     },
//     addToCartButton: {
//       flex: 1,
//       padding: "10px 15px",
//       backgroundColor: "#524b2a",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       transition: "background-color 0.3s",
//     },
//     proceedToBuyButton: {
//       flex: 1,
//       padding: "10px 15px",
//       backgroundColor: "#1e52fe",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       transition: "background-color 0.3s",
//     },
//   };
  
//   // Button Hover Effects
//   Object.keys(styles).forEach(key => {
//     if (key.includes("Button")) {
//       styles[key][":hover"] = {
//         opacity: "0.9",
//       };
//     }
//   });
  
//   export default ProductDetails;
  




// working with db  n ui
import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate, Link,useLocation  } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { addToCart } = useContext(CartContext);

  // const [userRegistered, setUserRegistered] = useState(null);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true); // Start loading
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
        setLoading(false); // ✅ Stop loading after data is set
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Failed to load product details");
        setLoading(false); // ✅ Stop loading even on error
      }
    };
    fetchProduct();
  }, [id]);
  
  const handleTryOn = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/virtual-tryon", { state: { product } });
    }
  };

  if (!product) return <p>Loading...</p>;


  const handleAddToCart = async () => {
    if (!user) {
      navigate("/login");
      return;
    }
  
    console.log("Token being sent:", user.token); // 🔍 Log token before request
  
    try {
      const response = await api.post(
        "/cart/add",
        { productId: product._id, quantity: 1 },
        { headers: { Authorization: `Bearer ${user.token}` } } // Ensure token is added
      );
  
      toast.success(`${product.name} added to cart!`);
      console.log("Cart updated:", response.data);
    } catch (error) {
      console.error("Error adding to cart:", error.response ? error.response.data : error.message);
      toast.error(`Failed to add to cart: ${error.response ? error.response.data.message : "Unknown error"}`);
    }
  };
    const handleProceedToBuy = () => {
    if (!product || !product._id) {
      console.error("Error: Product ID is missing!", product);
      toast.error("Error: Product ID is missing!");
      return;
    }
    localStorage.setItem("selectedProduct", JSON.stringify(product)); // Store product in localStorage

    console.log("Navigating to checkout with Product ID:", product._id);
    navigate("/checkout", { state: {cart: [product] } }); 
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!product) return <h2>Product not found</h2>;

    return (
      <div style={styles.pageContainer}>
      <ToastContainer position="top-right" autoClose={2000} />

        <nav style={styles.navbar}>
        <img src="/logo.png" alt="Logo" width="200" />
      <div style={styles.searchContainer}>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/men" style={styles.link}>Men</Link>
          <Link to="/women" style={styles.link}>Women</Link>
          <Link to="/help" style={styles.link}>Help</Link>
        </div>
        <div style={styles.searchContainer}>
          <input type="text" placeholder="Search for items" style={styles.searchInput} />
          <Link to="/search" style={styles.icon}>🔍</Link>
          <Link to="/favourites" style={styles.icon}>❤️</Link>
          <Link to="/cart" style={styles.icon}>🛒</Link>
          <Link to="/profile" style={styles.icon}>👤</Link>
        </div>


      </div>
        </nav>
  
        {/* Product Details */}

        <div style={styles.container}>
        
        <div style={styles.imageSection}>
  <img
    src={product.image ? `http://localhost:5000${product.image}` : "https://via.placeholder.com/300"}
    alt={product.name}
    style={styles.productImage}
    onError={(e) => e.target.src = "https://via.placeholder.com/300"} // Fallback image
  />
</div>
          <div style={styles.detailsSection}>
            <h1 style={styles.productName}>{product.name}</h1>
            <h2 style={styles.productPrice}>₹{product.price}</h2>
            <h3>Product Details:</h3>
            <p>{product.description}</p>
            <p>{product.size}</p>

            
            <div style={styles.buttonContainer}>
              <button style={styles.tryOnButton} onClick={handleTryOn}>
                👗 Virtual Try-On
              </button>
              <button style={styles.addToCartButton} onClick={handleAddToCart}>
                🛒 Add to Cart
              </button>
              <button style={styles.proceedToBuyButton} onClick={handleProceedToBuy}>
                💸 Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const styles = {
    pageContainer: {
      backgroundColor: "#ffff",
      minHeight: "100vh",
      padding: "20px",
    },
    navbar: {
      backgroundColor: "#C0BFBD",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "2px solid #D3D3D3",
    },
    brand: {
      fontSize: "28px",
      fontWeight: "bold",
      fontFamily: "serif",
      color: "#8B8000",
    },
    navLinks: {
      display: "flex",
      gap: "40px",
      fontSize: "18px",
      fontWeight: "600",
      textDecoration: "none",
      color: "black",
    },
    searchContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    icon: {
      fontSize: "28px",
      textDecoration: "none",
      color: "#fff",
    },
      container: {
      display: "flex",
      display: 'flex',
      height:'790px',
      padding: '20px',
      backgroundColor: "#fff",
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      gap: '30px', // 
        },
        imageSection: {
          flex: 1,
          backgroundColor: "#ebf2fa",
          borderRadius: '8px',
          padding: '20px',
        },
            productImage: {
      width: "100%",
      borderRadius: "8px",
    },
    detailsSection: {
      flex: 2,
      backgroundColor: '#ebf2fa',
      borderRadius: '8px',
      padding: '20px',
      display: 'flex',
  flexDirection: 'column', 
  justifyContent: 'space-between', 

    },
        productName: {
      fontSize: "28px",
      fontWeight: "700",
    },
    productPrice: {
      fontSize: "22px",
      color: "#555",
      margin: "10px 0",
    },
    buttonContainer: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
    },
    tryOnButton: {
      flex: 1,
      padding: "10px 15px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    addToCartButton: {
      flex: 1,
      padding: "10px 15px",
      backgroundColor: "#524b2a",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    proceedToBuyButton: {
      flex: 1,
      padding: "10px 15px",
      backgroundColor: "#1e52fe",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
  };
  
  // Button Hover Effects
  Object.keys(styles).forEach(key => {
    if (key.includes("Button")) {
      styles[key][":hover"] = {
        opacity: "0.9",
      };
    }
  });
  
  export default ProductDetails;
  

