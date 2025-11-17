import { Link } from "react-router-dom";

function IphoneDisplayer({ i, product }) {
  return (
    <div className="iphone-product row">
      <div
        className={`iphone-wrapper col-md-6 p-4 ${
          i % 2 === 1 && "order-md-last"
        }`}
      >
        <h2 className="iphone-title">{product.product_name}</h2>
        <p className="iphone-brief">{product.product_brief_description}</p>

        <p className="iphone-price">
          Starting at <strong>${product.starting_price}</strong>
        </p>
        <p className="iphone-range">{product.price_range}</p>
        <Link
          to={`/iphone/${product.product_id}`}
          className="iphone-link text-primary"
        >
          Learn more
        </Link>
      </div>

      <div className="iphone-wrapper col-md-6">
        <div className="iphone-image">
          <img src={product.product_img} alt={product.product_name} />
        </div>
      </div>
    </div>
  );
}

export default IphoneDisplayer;
