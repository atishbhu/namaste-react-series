import Logo from "../icon/logo"
import './style.css'

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="logo-container">
                    <div className="logo">
                        <Logo />
                    </div>
                </div>
                <div className="navitem-container">
                    <div className="nav-items">
                        <div className="nav-item">
                            Search
                        </div>
                        <div className="nav-item">
                            Offers
                        </div>
                        <div className="nav-item">
                            About Us
                        </div>
                        <div className="nav-item">
                            Sign in
                        </div>
                        <div className="nav-item">
                            Cart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
