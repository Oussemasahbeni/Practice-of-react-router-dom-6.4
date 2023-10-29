import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
  const career = useLoaderData();
  //console.log(careerDetail);
  useParams();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed
          sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!
        </p>
      </div>
    </div>
  );
};

// params is an object that contains the dynamic segments of the URL
// react-router-dom gives access to the params object through the useParams hook
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);
  if (!res.ok) {
    throw Error("ID NOT FOUND");
  }

  return res.json();
};
export default CareerDetails;
