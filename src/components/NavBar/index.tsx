import { Link } from 'react-router-dom';
import './index.css';

const NavBar = () => {
    return (
        <nav id="navbar">
            <ul>
                <li>
                    <Link to='/'>Inbox</Link>
                </li>
                <br></br>
                <li>
                    <Link to='/today'>Today</Link>
                </li>
                <li>
                    <Link to='/calendar'>Calendar</Link>
                </li>
                <li>
                    <Link to='/someday'>Someday</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
