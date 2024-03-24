import StarIcon from "../icon/Rating";
const URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Card = (props) => {
  const { avgRating, name, cuisines, costForTwo, cloudinaryImageId, sla } =
    props?.res?.info || {};

  const { lastMileTravelString = "" } = sla || {};
  return (
    <div className="w-64 p-4 h-full shadow-lg">
      <div className="flex flex-col gap-2">
        <div className="w-full  rounded-lg overflow-hidden">
          <img
            className="w-full rounded-lg object-cover"
            src={URL + cloudinaryImageId}
            alt={name}
          />
        </div>
        <div>
          <div className="text-base font-bold text-ellipsis overflow-hidden text-nowrap">
            {name}
          </div>
          <div className="flex gap-2 text-base font-bold items-center">
            <div>
              <StarIcon />
            </div>
            <div>{avgRating}</div>
            <div>.</div>
            <div>{lastMileTravelString}</div>
            <div>.</div>
          </div>
          <div className="text-ellipsis overflow-hidden text-nowrap">
            {cuisines?.join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
