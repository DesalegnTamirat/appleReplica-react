import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import useIphones from "../../hooks/useIphones";

function IphoneDetails() {
  const { product_id } = useParams();
  const {
    products: [product],
    isLoading,
    error,
  } = useIphones(product_id);

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
    <div className="iphone-product-wrapper py-5 text-center">
      <h2 className="iphone-title">{product.product_name}</h2>
      <p className="iphone-brief">{product.product_brief_description}</p>
      <div className="iphone-product row">
        <div className="iphone-wrapper col-md-6">
          <p className="iphone-price">
            Starting at <strong>${product.starting_price}</strong>
          </p>
          <p className="iphone-range">{product.price_range}</p>
          <p className="iphone-full">{product.product_full_description}</p>
        </div>

        <div className="iphone-wrapper col-md-6">
          <div className="iphone-image">
            <img src={product.product_img} alt={product.product_name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IphoneDetails;
