// import React, { useState } from 'react';
import React from 'react'
// import Button from 'react-bootstrap/Button';
import Button_Cart from "./Button_Cart"
import Button_SU from "./Button_SU"
import { Link } from 'react-router-dom';
// import * as Icons from "react-icons/fa";
import './Navbar.css';
import { navItems } from "./NavItems";
// import Dropdown from "./Dropdown";


// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <nav className='navbar'>
//         <div className='navbar-container'>
//           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//             A and A
//             <i class='fab fa-typo3' />
//           </Link>
//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
            
//             <li className='nav-item'>
//               <Link
//                 to='/products'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Products
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to='/sign-up'
//                 className='nav-links-mobile'
//                 onClick={closeMobileMenu}
//               >
//                 Sign Up
//               </Link>
//             </li>
//           </ul>
//           {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
//         </div>
//       </nav>
//     </>
//   );
// }

function Navbar() {
  // const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <nav className="navbar">
      <div class='navbar-logo'>
            <Link to='/' className='menu-icon'>
              <h2>A and A
              <i class='fab fa-typo3' /></h2>
            </Link>
          </div>
        <ul className="nav-items">
          {navItems.map((item) => {
            // if (item.title === "Products") {
            //   return (
            //     <li
            //       key={item.id}
            //       className={item.cName}
            //       onMouseEnter={() => setDropdown(true)}
            //       onMouseLeave={() => setDropdown(false)}
            //     >
            //       <Link to={item.path}>{item.title}</Link>
            //       {dropdown && <Dropdown />}
            //     </li>
            //   );
            // }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button_Cart/>
        <Button_SU/>
        {/* <Button variant='info' href="/cart" >Cart</Button>{' '}
        <Button variant='warning' href="/signup">Sign Up/<br/>Log In</Button> */}
      </nav>
    </>
  );
}

export default Navbar;
