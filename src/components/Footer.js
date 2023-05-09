import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_top">
                <div className="footer_top_left">
                    <p>PRODUCTS</p>
                    <hr></hr>
                </div>
                <div className="footer_top_middle-left">
                    <p>NEED HELP?</p>
                    <hr></hr>
                </div>
                <div className="footer_top_middle-right">
                    <p>About US</p>
                    <hr></hr>
                </div>
                <div className="footer_top_right">
                    <button>Where to Buy Generic Procuts</button>
                </div>
            </div>
            <div className="footer_bottom">
                <p className="rights">© 2023 by Generic. All rights reserved.</p>
                <div className="footer_bottom_right">
                    <Link className="nav-item-footer nav-link" to="/">Legal &nbsp;|</Link>
                    <Link className="nav-item-footer nav-link" to="/"> &nbsp;Patent &nbsp;|</Link>
                    <Link className="nav-item-footer nav-link" to="/"> &nbsp;&nbsp;Safety Notices &nbsp;|</Link>
                    <Link className="nav-item-footer nav-link" to="/">&nbsp; Privacy Preferences &nbsp;|</Link>
                    <Link className="nav-item-footer nav-link" to="/">&nbsp; Privacy &nbsp;|</Link>
                    <Link className="nav-item-footer nav-link" to="/">&nbsp; Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;