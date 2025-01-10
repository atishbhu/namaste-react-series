import { useState, useEffect } from "react";
import Card from "../Card/Card";
import SearchBox from "../Search";

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

  console.log("dummy");

  return (
    <div>
      <SearchBox
        searchText={searchText}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <div className="flex flex-wrap gap-3 px-2 py-5">
        {filteredData.map((res) => (
          <Card res={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
