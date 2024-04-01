import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body/Body";

const AppLayout = () => {
  const [isSearchClick, setSearchClick] = useState(false);

  const handleSearchClick = () => {
    setSearchClick(!isSearchClick);
  };

  return (
    <div>
      <Header handleSearchClick={handleSearchClick} />
      <Body isSearchClick={isSearchClick} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
