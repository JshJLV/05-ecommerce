function CardLarge(props) {
  const { item } = props;
  return (
    <div
      className="
      flex 
      border-2
      rounded-lg
      w-full
      mb-4 
      md:w-52
      md:flex-col
      md:justify-center
      "
    >
      <div className="w-32 items md:w-40 p-2 md:m-auto">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="flex flex-col ml-3 md:ml-0 md:border-t-2 border-t-gray-300">
        <p className="mb-2">{item.title}</p>
        <p className="mb-2 text-lg">{item.price}</p>
        <p className="mb-2">{item.brand}</p>
      </div>
    </div>
  );
}

export default CardLarge;
