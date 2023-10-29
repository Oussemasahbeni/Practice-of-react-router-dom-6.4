import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est aperiam
        eos itaque voluptatem sapiente sunt suscipit et perspiciatis ipsa libero
        velit nemo eveniet ullam fuga aliquid, in excepturi? Amet!
      </p>

      <nav>
        <NavLink to={"faq"}>View the FAQ </NavLink>
        <NavLink to={"contact"}> Contact </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
