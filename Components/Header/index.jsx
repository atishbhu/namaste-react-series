import Logo from "../icon/logo";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between p-5 shadow-xl">
        <div>
          <div>
            <Logo />
          </div>
        </div>
        <div>
          <div className="flex gap-4">
            <div>Search</div>
            <div>Offers</div>
            <div>About Us</div>
            <div>Sign in</div>
            <div>Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
