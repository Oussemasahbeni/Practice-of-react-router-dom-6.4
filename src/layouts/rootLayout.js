import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>A ROUTER</h1>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={"help"}>Help</NavLink>
          <NavLink to={"careers"}>Careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
