import { useParams } from "react-router-dom";
import useResturants from "../../Hooks/useResturant";
import { useEffect, useState } from "react";
import "./style.css";

function MenuDetails() {
  const { resData } = useResturants();
  const [menuData, setMenuData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const filter = resData?.filter((res) => res?.info?.id === id);
    setMenuData(filter);
  }, [resData]);

  console.log("menu data", menuData);

  const {
    name,
    avgRatingString,
    costForTwo,
    cuisines,
    sla,
    totalRatingsString,
    aggregatedDiscountInfoV3,
  } = menuData?.[0]?.info || {};
  //   console.log('name', menuData[0]?.info )
  const DealsData = [
    {
      title: "10% off Up to 150",
      code: "#SDWEHJ",
    },
    {
      title: "10% off Up to 150",
      code: "#SDWEHJ",
    },
    {
      title: "10% off Up to 150",
      code: "#SDWEHJ",
    },
  ];

  return (
    <div className="details-container">
      <div className="flex flex-col gap-14">
        {/* <div className="flex-col"> */}
        <div className="text-3xl font-black">{name}</div>
        <div className="box-sh">
          <div className="flex flex-col gap-2 border-2 border-slate-300 rounded-lg p-4">
            <div className="flex gap-4 items-center">
              <div class="w-2 h-2 bg-black rounded-full"></div>
              <div>
                {avgRatingString}({totalRatingsString})
              </div>
              <div class="w-2 h-2 bg-black rounded-full"></div>
              <div>{costForTwo}</div>
            </div>
            <div className="text-orange-600 text-xs font-bold">
              {cuisines?.join(",")}
            </div>
            <div class="flex items-center space-x-4">
              <div class="flex flex-col items-center">
                <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div class="h-8 w-px bg-gray-300"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>

              <div>
                <div className="flex item-center gap-4">
                  <div class="text-black font-semibold">Outlet</div>
                  <div class="text-gray-500 text-sm">Parasia Road</div>
                </div>
                <p class="text-black font-bold mt-1">50–55 mins</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <div className="text-lg font-extrabold">Deals For you</div>
            <div></div>
          </div>
          <div>
            <div>
              <div className="flex gap-6">
                {DealsData.map((item) => (
                  <div className="border-2 border-slate-400 rounded-lg p-4 flex">
                    <div>
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/12/31/d075ff47-bfa2-4e30-a268-6416ee4ddb30_HSBC.png" width={"60px"} height={"60px"}/>
                    </div>
                    <div>
                    <div className="text-lg font-extrabold">{item.title}</div>
                    <div>{item.code}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default MenuDetails;
