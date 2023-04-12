import { Link } from "react-router-dom";

function CardSmall(props) {
  const { item } = props;

  return (
    <div
      className="
      w-52 
      xl:w-40
      border-2 
      border-gray-300 
      overflow-hidden 
      bg-gray-50 
      rounded-lg
      "
    >
      <Link to={item.link}>
        <div className="p-4">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="mt-2 p-2 border-t-2 border-t-gray-500-500">
          <p className="text-lg xl:text-base">{item.title}</p>
          <p className="text-base">${item.price}</p>
          <p className="text-base xl:text-sm">{item.brand}</p>
        </div>
      </Link>
    </div>
  );
}

export default CardSmall;
