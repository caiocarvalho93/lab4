import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    //isAuth is user logged in?
    //same as const auth = useAuth();
    //const isAuthenticated = auth.isAuthenticated;
    //const logout = auth.logout;

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            {isAuthenticated ? (
                <>
                    <Link to="/">Home</Link>
                    <button onClick={logout}>Log Out</button>
                </>
            ) : (
                <Link to="/login">Log In</Link>
            )}
        </nav>
    );
};


export default Navbar;

//based on login so conditional here:
