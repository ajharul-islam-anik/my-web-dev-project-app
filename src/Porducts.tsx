type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type ProductsProps = {
  products: Product[];
  addToStack: (product: Product) => void;
  selectedProducts: Product[];
};

const Products = ({
  products,
  addToStack,
  selectedProducts,
}: ProductsProps) => {
  return (
    <div className="products-container">

      {products.map((product) => {

        const alreadyAdded = selectedProducts.some(
          (item) => item.id === product.id
        );

        return (
          <div
            className={`product-card ${
              alreadyAdded ? "selected-card" : ""
            }`}
            key={product.id}
          >

            <div className="card-top">

              <img
                src={product.icon}
                alt={product.name}
                className="product-icon"
              />

              <span className="badge">
                {product.badge}
              </span>

            </div>

            <h2>{product.name}</h2>

            <p className="description">
              {product.description}
            </p>

            <div className="card-bottom">

              <span className="category">
                {product.category}
              </span>

              <span className="difficulty">
                {product.difficulty}
              </span>

              <span className="rating">
                <span className="star">★</span>
                {product.rating}
              </span>

            </div>

            <button
              className="add-button"
              onClick={() => addToStack(product)}
              disabled={alreadyAdded}
            >
              {alreadyAdded ? "Add to Stack" : "Add to Stack"}
            </button>

          </div>
        );
      })}

    </div>
  );
};

export default Products;