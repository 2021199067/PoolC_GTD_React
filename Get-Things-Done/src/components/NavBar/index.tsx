import { Link } from 'react-router-dom';
import './index.css';
const NavBar = () => {
    return (
        <nav id="navbar">
            <ul>
                <li>
                    <Link to='/'>Inbox</Link>
                </li>
                <li>
                    <Link to='/calendar'>Calendar</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
