import { useLoaderData, Link } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();
  console.log(careers);
  // useLoaderData() is a hook that returns the data passed from the loader function.
  return (
    <div className="careers">
      {careers.map((career) => {
        return (
          <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p> based in{career.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

//loader    function

export const careerLoader = async () => {
  const res = await fetch("  http://localhost:4000/careers");
  if (!res.ok) {
    throw Error("Could not fetch the list of careers");
  }
  return res.json();
};

export default Careers;
