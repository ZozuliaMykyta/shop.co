import { register } from "swiper/element";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

register();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/details/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
