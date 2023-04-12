import { FaHome, FaUserCircle, FaXbox, FaPlaystation } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";

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
];
