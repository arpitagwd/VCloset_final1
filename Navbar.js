// import React from "react";
// // import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// function Navbar(){
//     return (
//       <div>
//         <div className="w-full py-5 flex justify-between items-center bg-white ">
//           <div className="mb-2 w-[20vh] h-10">
//           <img src="/logo.png" alt="Logo" />
//           </div>
//           <div>
//             <ul className="flex gap-30 text-xl justify-center font font-semibold">
//               <li><a to='/' className="text-black transition hover:text-gray-400 after:block after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full">Home</a></li>
//               <li><a className="text-black transition hover:text-gray-400 after:block after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full" href="">Men</a></li>
//               <li><a className="text-black transition hover:text-gray-400 after:block after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full" href="">Women</a></li>
//               <li><a className="text-black transition hover:text-gray-400 after:block after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-full" href="">About</a></li>
//             </ul>
//           </div>
  
//           <div className="relative pr-55 transition-colors hov">
//             <input type="text"  placeholder="Search" className="h-8 w-40 pl-7 border-2 rounded-2xl border-zinc-500"/>
//             <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  className="absolute ml-1.5 justify-start top-2 items-center w-4 h-4 " viewBox="0 0 16 16">
//                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
//             </svg>
//             <div><a href="">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  className="absolute justify-center items-center top-1 ml-50 w-5.5 h-5.5" viewBox="0 0 16 16">
//               <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
//             </svg></a>
//             </div>
//             <div><a href="">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  className="absolute justify-center items-center top-1 ml-80 w-6 h-6" viewBox="0 0 16 16">
//                 <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/> 
//               </svg></a>
//             </div>
//             <i className="bi bi-heart"><a href="">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute justify-center items-center top-[6px] ml-65 w-5 h-5" viewBox="0 0 16 16">
//                 <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
//             </svg></a>
//             </i>
//           </div>
//         </div>
  
  
// </div>

// );

// }
// export default Navbar;


import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const styles = {
    // navbar: {
    //   width: "100%",
    //   padding: "10px 20px",
    //   display: "flex",
    //   marginTop:"14px",
    //   justifyContent: "space-between",
    //   alignItems: "center",
    //   backgroundColor: "white",
    // },

    navbar: {
      backgroundColor: "#C0BFBD ",
      padding: "25px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "2px solid #D3D3D3",
    },
  
    logoContainer: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      width: "120px", // Adjust width for proper size
      height: "auto", // Maintain aspect ratio
    },
    navList: {
      display: "flex",
      gap: "30px",
      fontSize: "20px",
      fontWeight: "600",
      listStyle: "none",
    },
    navLink: {
      color: "black",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    navLinkHover: {
      color: "gray",
    },
    searchContainer: {
      position: "relative",
      paddingRight: "55px",
    },
    searchInput: {
      height: "32px",
      width: "160px",
      paddingLeft: "28px",
      border: "2px solid #737373",
      borderRadius: "16px",
    },
    icon: {
      position: "absolute",
      top: "8px",
      left: "5px",
      width: "16px",
      height: "16px",
    },
    iconContainer: {
      display: "flex",
      gap: "20px",
    },
    iconStyle: {
      width: "24px",
      height: "24px",
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
  
    searchInput: {
      padding: "5px 10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      width: "200px",
    },
  
  };

//   return (
//     <div>
//       <div style={styles.navbar}>
//         <div style={styles.logoContainer}>
//           <img src="/logo.png" alt="Logo"style={styles.logo}/>
//         </div>
//         <ul style={styles.navList}>
//           <li><a href="/" style={styles.navLink}>Home</a></li>
//           <li><a href="#" style={styles.navLink}>Men</a></li>
//           <li><a href="#" style={styles.navLink}>Women</a></li>
//           <li><a href="#" style={styles.navLink}>About</a></li>
//         </ul>
//         <div style={styles.searchContainer}>
//           <input type="text" placeholder="Search" style={styles.searchInput} />
//           <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={styles.icon} viewBox="0 0 16 16">
//             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
//           </svg>
//         </div>
//         <div style={styles.iconContainer}>
//           <a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={styles.iconStyle} viewBox="0 0 16 16">
//             <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
//           </svg></a>
//           <a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={styles.iconStyle} viewBox="0 0 16 16">
//             <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
//           </svg></a>
//           <a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style={styles.iconStyle} viewBox="0 0 16 16">
//             <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
//           </svg></a>
//         </div>
//       </div>
//     </div>
//   );
// }
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


export default Navbar;