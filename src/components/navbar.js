import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link to="/">
            <h1>LOGO NAVBAR</h1>
            </Link>
            <ul>
                <Link to="/">
                    <li>Beranda</li>
                </Link>
                <Link>
                    <li>Histori Movie</li>
                </Link>
                <Link>
                    <li>login</li>
                </Link>
            </ul>
        </div>
    )
}
export default Navbar