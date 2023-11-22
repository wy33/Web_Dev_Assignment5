import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="navbar"> 
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/weather">Weather</Link></li>
                    <li><Link to="/animequote">Anime</Link></li>
                    <li><Link to="/articlelist">Article</Link></li>
                    <li><Link to="/image">Image</Link></li>
                </ul>
            </nav>
        </header>
    );
}