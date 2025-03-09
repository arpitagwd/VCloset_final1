// import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';


// const styles = {
//   navbar: {
//     backgroundColor: "#C0BFBD ",
//     padding: "25px 20px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     borderBottom: "2px solid #D3D3D3",
//   },
//   icon: {
//     fontSize: "28px",
//     textDecoration: "none",
//     color: "#fff",
//   },

//   brand: {
//     fontSize: "28px",
//     fontWeight: "bold",
//     fontFamily: "serif",
//     color: "#8B8000",
//   },
//   navLinks: {
//     display: "flex",
//     gap: "40px",
//     fontSize: "18px",
//     fontWeight: "600",
//     textDecoration: "none",
//     color: "black",
//   },
//   searchContainer: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//   },
//   searchInput: {
//     padding: "5px 10px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     width: "200px",
//   },
//   productContainer: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "40px",
//     marginTop: "100px",
//     flexWrap: "wrap", 

//   },
//   productCard: {
//     // backgroundColor: "#918450",
//     backgroundColor: "#e4e4e7",
//     padding: "50px",
//     borderRadius: "10px",
//     textAlign: "center",
//     width: "200px",
//     color: "white",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",

//     flex: "0 1 200px", 

//   },
//   productImage: {
//     width: "100%",
//     height: "300px",
//     objectFit: "contain",
//     marginBottom: "0px",
//   },
//   productTitle: {
//     fontSize: "18px",
//     fontWeight: "600",
//     color:"#1A1919",
//   },
// };

// const Navbar = () => {
//   return (
//     <nav style={styles.navbar}>
//       {/* <div style={styles.brand}>VCLOSET</div> */}
//       <img src="/logo.png" alt="Logo" width="200" />

//       <div style={styles.searchContainer}>
//         <div style={styles.navLinks}>
//           <Link to="/" style={styles.link}>Home</Link>
//           <Link to="/men" style={styles.link}>Men</Link>
//           <Link to="/women" style={styles.link}>Women</Link>
//           <Link to="/help" style={styles.link}>Help</Link>
//         </div>
//         <div style={styles.searchContainer}>
//           {/* <input type="text" placeholder="Search for items" style={styles.searchInput} />
//           <Link to="/search" style={styles.icon}>🔍</Link>
//           <Link to="/favourites" style={styles.icon}>❤️</Link> */}
//           <Link to="/cart" style={styles.icon}>🛒</Link>
//           <Link to="/profile" style={styles.icon}>👤</Link>
//         </div>


//       </div>
//     </nav>
//   );
// };

// const ProductCard = ({ image, name,price }) => {
//   const imageUrl = `http://localhost:5000${image}`; // Ensure full URL

//   return (
//     <div style={styles.productCard}>
//         <img src={imageUrl} alt={name} style={styles.productImage} />

//       {/* <img src={image} alt={name} style={styles.productImage} /> */}
//       <h2 style={styles.productTitle}>{name}</h2>
//       <h3 style={{color:"black"}}>₹{price}</h3>

//     </div>
//   );
// };

// const WomenClothing = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/products/category/women");
//         const data = await response.json();
//         if (Array.isArray(data)) {
//           setProducts(data);
//         } else {
//           console.error("Expected an array but got:", data);
//           setProducts([]);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setProducts([]);
//       }
//     };
//     fetchProducts();
//   }, []);
  
//     return (
//         <div style={{ backgroundColor: "#ffff", minHeight: "100vh", padding: "20px" }}>
//           <Navbar />
//           <div> <h2> Welcome to Women's Clothing Section... </h2></div>

//           <div style={styles.productContainer}>
            
//             {products.map((product) => (
//               <Link to={`/product/${product._id}`} key={product._id}>
//                     <ProductCard key={product._id} image={product.image} name={product.name} price={product.price}/>
//               </Link>
    
//             ))}
    
//           </div>
//         </div>
//       );
    
// };

// export default WomenClothing;


//below working


import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const styles = {
    navbar: {
      backgroundColor: "#C0BFBD ",
      padding: "25px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "2px solid #D3D3D3",
    },
    icon: {
      fontSize: "28px",
      textDecoration: "none",
      color: "#fff",
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
    searchInput: {
      padding: "5px 10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "200px",
    },
    productContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      marginTop: "100px",
      flexWrap: "wrap", 
  
    },
    productCard: {
      // backgroundColor: "#918450",
      backgroundColor: "#e4e4e7",
      padding: "50px",
      borderRadius: "10px",
      textAlign: "center",
      width: "200px",
      color: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  
      flex: "0 1 200px", 
  
    },
    productImage: {
      width: "100%",
      height: "300px",
      objectFit: "contain",
      marginBottom: "0px",
    },
    productTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color:"#1A1919",
    },
  };
  
  const Navbar = () => {
    return (
      <nav style={styles.navbar}>
        {/* <div style={styles.brand}>VCLOSET</div> */}
        <img src="/logo.png" alt="Logo" width="200" />
  
        <div style={styles.searchContainer}>
          <div style={styles.navLinks}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/men" style={styles.link}>Men</Link>
            <Link to="/women" style={styles.link}>Women</Link>
            <Link to="/help" style={styles.link}>Help</Link>
          </div>
          <div style={styles.searchContainer}>
            {/* <input type="text" placeholder="Search for items" style={styles.searchInput} />
            <Link to="/search" style={styles.icon}>🔍</Link>
            <Link to="/favourites" style={styles.icon}>❤️</Link> */}
            <Link to="/cart" style={styles.icon}>🛒</Link>
            <Link to="/profile" style={styles.icon}>👤</Link>
          </div>
  
  
        </div>
      </nav>
    );
  };
  
  const ProductCard = ({ image, name,price }) => {
    const imageUrl = `http://localhost:5000${image}`; // Ensure full URL
    return (
        <div style={styles.productCard}>
            <img src={imageUrl} alt={name} style={styles.productImage} />
    
          {/* <img src={image} alt={name} style={styles.productImage} /> */}
          <h2 style={styles.productTitle}>{name}</h2>
          <h3 style={{color:"black"}}>₹{price}</h3>
    
        </div>
      );
    };
    
  

const WomenClothing = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/products/category/women");

                const data = await response.json();


                if (Array.isArray(data)) {
                    setProducts(data);
                } else {
                    console.error("Expected an array but got:", data);
                    setProducts([]);
                    setError("Failed to fetch products");
                }
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Failed to load products");
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error}</h2>;

    return (
        <div style={{ backgroundColor: "#ffff", minHeight: "100vh", padding: "20px" }}>
          <Navbar />
          <div> <h2> Welcome to Women's Clothing Section... </h2></div>
          <div style={styles.productContainer}>
            {products.length > 0 ? (
            products.map((product) => (
                        <Link to={`/product/${product._id}`} key={product._id}>
                            <ProductCard key={product._id} image={product.image} name={product.name} price={product.price}/>
                        </Link>
                    ))
                ) : (
                    <h3>No products available</h3>
                )}
            </div>
        </div>
    );
};

export default WomenClothing;
