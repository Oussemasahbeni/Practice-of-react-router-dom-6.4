import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { careerLoader } from "./pages/careers/careers";
import { careerDetailsLoader } from "./pages/careers/careerDetails";

//pages
import Home from "./pages/home";
import About from "./pages/about";
import RootLayout from "./layouts/rootLayout";
import HelpLayout from "./layouts/helpLayout";
import Faq from "./pages/help/faq";
import Contact, { contactAction } from "./pages/help/contact";
import NotFound from "./NotFound";
import CareerLayout from "./layouts/careerLayout";
import Careers from "./pages/careers/careers";
import CareerDetails from "./pages/careers/careerDetails";
import CareerError from "./pages/careers/careerError";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq></Faq>} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path="careers"
        element={<CareerLayout />}
        errorElement={<CareerError />}
      >
        <Route index element={<Careers />} loader={careerLoader}></Route>
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        ></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
