import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Parking from "./routes/Parking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/parking",
    element: <Parking />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
