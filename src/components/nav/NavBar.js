import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/upload"><li>Upload</li></Link>
                <Link to="/login"><li>Login</li></Link>
                <Link to="signup"><li>SignUp</li></Link>
            </ul>
        </nav>
    );
}

export default NavBar;