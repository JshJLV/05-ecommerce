import { Link } from "react-router-dom";
import { FaXbox, FaPlaystation, FaHeadphones, FaBoxOpen } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { MdCatchingPokemon } from "react-icons/md";
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
      category: "Accesorios",
      imgCategory: <FaHeadphones />,
      path: "/products/Accesorios",
    },
    {
      category: "Coleccionables",
      imgCategory: <MdCatchingPokemon />,
      path: "/products/coleccionables",
    },
    {
      category: "Todos los productos",
      imgCategory: <FaBoxOpen />,
      path: "/products",
    },
  ];

  return (
    <div className="flex flex-wrap w-11/12 m-auto mt-8 gap-2">
      <div className="p-4">
        <p className="text-2xl xl:text-4xl">Explora las categorias</p>
      </div>
      <IconContext.Provider
        value={{
          color: "#1f618d",
          size: "5rem",
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
  );
}

export default Categories;
