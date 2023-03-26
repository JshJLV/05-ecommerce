import { SideBarData } from "./SideBarData";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./sidebar.css";

function SideBar(props) {
  const { state, propFunction } = props;

  return (
    <ul
      className={state ? "sidebar-active" : "sidebar-active sidebar-hidden"}
      onClick={propFunction}
    >
      <li>
        <button className="flex justify-end w-full items-center mt-4 p-4 ">
          <MdClose className="w-9 h-9" />
        </button>
      </li>
      {SideBarData.map((item, index) => {
        return (
          <li key={index} className="my-2">
            <Link to={item.path} className="flex items-center p-4">
              {item.icon}
              <span className="ml-4 text-white">{item.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SideBar;
