import Logo from "../icon/logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between p-5 shadow-xl">
        <div>
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            <Link to="/about">
              <div>About Us</div>
            </Link>
            <Link to="/contact">
              <div>Contact Us</div>
            </Link>
            <div>Sign in</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
