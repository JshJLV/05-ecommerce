import { Link } from "react-router-dom";
import { FaXbox, FaPlaystation, FaBoxOpen } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { IconContext } from "react-icons";

function Categories() {
  const categoriesArr = [
    {
      category: "Xbox",
      imgCategory: <FaXbox />,
      path: "/products/xbox",
    },
    {
      category: "Playstation",
      imgCategory: <FaPlaystation />,
      path: "/products/playstation",
    },
    {
      category: "Nintendo",
      imgCategory: <SiNintendoswitch />,
      path: "/products/nintendo",
    },
    {
      category: "Todos los productos",
      imgCategory: <FaBoxOpen />,
      path: "/products",
    },
  ];

  return (
    <div className="w-11/12 m-auto mt-8 gap-2">
      <div className="p-4">
        <p className="text-2xl xl:text-4xl">Explora las categorias</p>
      </div>
      <div className="flex flex-wrap justify-around gap-2">
        <IconContext.Provider
          value={{
            color: "#1f618d",
            size: "80px",
            className: "m-auto p-2",
          }}
        >
          {categoriesArr.map((item, index) => {
            return (
              <Link to={item.path} key={index}>
                <div className="w-40 bg-white flex-1 rounded-lg">
                  <div>{item.imgCategory}</div>
                  <div>
                    <h4 className="text-center">{item.category}</h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Categories;
