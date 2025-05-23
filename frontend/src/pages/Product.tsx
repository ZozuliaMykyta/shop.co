import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch, RootState } from "../app/store";
import { useEffect } from "react";
import { fetchProducts } from "../features/productsSlice";
import Details from "../components/Product/Details";
import About from "../components/Product/About";

const Product = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();

  const { items, status, error } = useSelector(
    (state: RootState) => state.products
  );

  const product = items.find((item) => item._id === id);

  useEffect(() => {
    if (!product && status === "idle") {
      dispatch(fetchProducts());
    }
  }, [product, status, dispatch]);

  if (!product && status === "loading") {
    return (
      <div className="error__container container">
        <h2 className="customers__title title">our happy customers</h2>
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <>
      <Details />
      <About />
    </>
  );
};

export default Product;
