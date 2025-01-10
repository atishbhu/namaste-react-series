import { useState, useEffect } from "react";
import Card from "../Card/Card";
import SearchBox from "../Search";
import useResturants from "../../Hooks/useResturant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { resData } = useResturants();

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
