import React, {useState, useEffect} from 'react';
import './Navbar.css';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
  <>
    <nav className='navbar' id='/#'>
        <div className="navbar-container-a">
            <Link to='/#' className='navbar-logo' onClick={closeMobileMenu}>
                <img src="WholeLogo.png"></img>
            </Link>
        </div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
        <div className='navbar-container-b'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'> 
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'> 
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Bookmark
                    </Link>
                </li>
                <li className='nav-item'> 
                    <Link to='/Profile/#posts' className='nav-links' onClick={closeMobileMenu}>
                        Your posts
                    </Link>
                </li>
                <li className='nav-item'> 
                    <Link to='/NewPost' className='nav-links' onClick={closeMobileMenu}>
                        New Post
                    </Link>
                </li>  
            </ul>
        </div>
        <div className='navbar-container-c'>
            <ul className='nav-profile'>
                <li className='nav-item'> 
                    <Link to='/NewPost' className='nav-links' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>  
            </ul>
        </div>
    </nav>
  </>
  )
}

export default Navbar;