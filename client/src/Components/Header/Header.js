import {Link, Outlet, useNavigate} from "react-router-dom";
import "./header.css";
import Logo from "../Logo/Logo";
import {useEffect} from "react";

function Header() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/");
    }, []);
    let redirect = () => {
        navigate("/");
    };
    return (
        <>
            <nav className='nav-bar'>

                <Logo redirect={redirect}/>

                <div style={{marginRight:"250px"}}>
                    <ul className="right-side">
                        <li>
                            <Link to="/addArticle" className="link">Add Article</Link>
                        </li>
                        <li className="empty-link">
                            <Link to="/" className="link">About</Link>
                        </li>
                        <li className="empty-link">
                            <Link to="/" className="link">Security</Link>
                        </li>
                        <li className="empty-link">
                            <Link to="/" className="link">Services</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </>
    )
};
export default Header;