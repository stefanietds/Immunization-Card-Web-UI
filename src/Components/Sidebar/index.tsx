import { NavLink } from "react-router-dom";
import './index.css';
import Logo from '../../../public/vacina.svg';
import { Image } from "antd";

const sidebarItems = [
  { label: "Pessoa", path: "/" },
  { label: "Vacina", path: "/vaccine" },
  { label: "Cartão de Vacinação", path: "/card" },
];

const Sidebar = () => {
  return (
    <div className="container-sidebar">
      <div className="container-sidebar-header">
        <Image width={70} height={70} src={Logo} alt="Logo" className="sidebar-logo" />
        <h2 className="container-sidebar__sidebar-title">
          Immunization Card
        </h2>
      </div>
      {sidebarItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end
          className={({ isActive }) =>
            isActive ? "sidebar-button active" : "sidebar-button"
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
