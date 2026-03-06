import { NavLink } from "react-router-dom";
import './index.css';

const sidebarItems = [
  { label: "Pessoa", path: "/" },
  { label: "Vacina", path: "/vaccine" },
  { label: "Cartão", path: "/card" },
];

const Sidebar = () => {
  return (
    <div className="container-sidebar">
      <h2 className="container-sidebar__sidebar-title">Immunization Card</h2>
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
