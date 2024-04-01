import { useState, useEffect } from "react";
import Card from "../Card/Card";

const Body = ({ isSearchClick }) => {
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      const resData = await checkJsonData(json);
      setResData(resData);
      setFilteredData(resData);
    } catch (error) {
      console.log(error);
    }
  }

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

  return (
    <div>
      {isSearchClick && (
        <div className="flex gap-3 p-5">
          <input
            type="text"
            placeholder="search..."
            value={searchText}
            onChange={handleChange}
            className="p-2 rounded-sm"
          />
          <button onClick={handleClick}>search</button>
        </div>
      )}
      <div className="flex flex-wrap gap-3 px-2 py-5">
        {filteredData.map((res) => (
          <Card res={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
