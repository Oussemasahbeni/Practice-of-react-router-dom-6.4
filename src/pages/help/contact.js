import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();
  //   useActionData is a hook that returns the data from the action prop in the route component

  // the action is gonna look for the action prop in the route component
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  console.log(request);
  // request is an object that contains the request info
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  // send the submission to the server
  if (submission.message.length < 10) {
    return { error: "Message must be over 10 chars long." };
  }

  //redirect the user
  return redirect("/");
};
