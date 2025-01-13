import { useState, useEffect } from "react";
import Card from "../Card/Card";
import SearchBox from "../Search";
import useResturants from "../../Hooks/useResturant";
import useOnlineStatus from "../../Hooks/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { resData } = useResturants();
  const { onlineStatus } = useOnlineStatus();

  useEffect(() => {
    if (resData) {
      setFilteredData(resData);
    }
  }, [resData]);

  const handleChange = (e) => {
    const val = e.target.value;
    setSearchText(val);
  };

  const handleClick = () => {
    const filteredNewData = resData.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredNewData);
  };

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline. Please check you internet connnection</h1>
    );
  console.log("res", filteredData);

  return (
    <div>
      <SearchBox
        searchText={searchText}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <div className="flex flex-wrap gap-3 px-2 py-5">
        {filteredData.map((res, idx) => (
          <Link key={idx} to={`/resturants/${res?.info?.id}`}>
            <Card res={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
