import {
  FaHome,
  FaUserCircle,
  FaXbox,
  FaPlaystation,
  FaHeadphones,
} from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { MdCatchingPokemon } from "react-icons/md";

export const SideBarData = [
  {
    title: "Inicio",
    path: "/",
    icon: <FaHome />,
    classN: "",
  },
  {
    title: "Cuenta",
    path: "/account",
    icon: <FaUserCircle />,
    classN: "",
  },
  {
    title: "Xbox",
    path: "products/xbox",
    icon: <FaXbox />,
    classN: "",
  },
  {
    title: "PlayStation",
    path: "products/playstation",
    icon: <FaPlaystation />,
    classN: "",
  },
  {
    title: "Nintendo",
    path: "products/nintendo",
    icon: <SiNintendoswitch />,
    classN: "",
  },
  {
    title: "Accesorios",
    path: "products/accesorios",
    icon: <FaHeadphones />,
    classN: "",
  },
  {
    title: "Coleccionables",
    path: "products/coleccionables",
    icon: <MdCatchingPokemon />,
    classN: "",
  },
];
