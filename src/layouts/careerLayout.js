import { Outlet } from "react-router-dom";

const CareerLayout = () => {
  return (
    <div>
      <h1>Career Layout</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolor
        eveniet voluptates voluptate!
      </p>
      <Outlet />
    </div>
  );
};

export default CareerLayout;
