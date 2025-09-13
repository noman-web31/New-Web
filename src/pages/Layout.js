import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <div className="container">
                    <Link to="/" className="logo">Portfolio</Link>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                             <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/blogs">Blogs</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                           
                        </ul>
                    </nav>
                </div>
            </header>


            <Outlet />
        </>
    )
};

export default Layout;