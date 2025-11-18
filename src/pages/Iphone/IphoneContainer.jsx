import "./iphone.css";
import IphoneDisplayer from "./IphoneDisplayer";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import useIphones from "../../hooks/useIphones";
function IphoneContainer() {
  const {products, isLoading, error} = useIphones();

  if (isLoading)
    return (
      <div className="my-5 py-5">
        <Spinner />
      </div>
    );
  if (error)
    return (
      <div className="my-5 py-5">
        <Error message={error} />;
      </div>
    );

  return (
    <div className="container py-5 text-center iphone-product-wrapper">
      <h3 className="mb-5 fw-bold text-primary">Explore iPhone Models</h3>

      {products?.map((product, i) => (
        <IphoneDisplayer key={i} i={i} product={product} />
      ))}
    </div>
  );
}

export default IphoneContainer;
