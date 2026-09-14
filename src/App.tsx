import { useEffect, useState } from "react";
import Products from "./Porducts";
import Nav from "./Nav"
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

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

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetch("/Products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  const addToStack = (product: Product) => {
    const alreadyAdded = selectedProducts.some(
      (item) => item.id === product.id
    );

    if (!alreadyAdded) {
      setSelectedProducts([...selectedProducts, product]);

      showToast(`${product.name} added to your stack ✓`);
    }
  };

  const removeFromStack = (id: string) => {
    const product = selectedProducts.find(
      (item) => item.id === id
    );

    const remainingProducts = selectedProducts.filter(
      (product) => product.id !== id
    );

    setSelectedProducts(remainingProducts);

    if (product) {
      showToast(`${product.name} removed from your stack`);
    }
  };

  const removeAll = () => {
    setSelectedProducts([]);

    showToast("All technologies removed");
  };

  return (

    <div>

      <Nav></Nav>

      <Header></Header>

<div className="app">
 
      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}

      

      <div className="main-content">

        <div className="products-section">

          <h1>
            Explore the{" "}
            <span className="gradient-text">
              Technologies
            </span>
          </h1>

          <p className="para-tag">
            Pick one technology per category to build your ideal stack.
          </p>

          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <Products
              products={products}
              addToStack={addToStack}
              selectedProducts={selectedProducts}
            />
          )}

        </div>

        <div className="stack">

          <h2>Your Stack</h2>

          <p className="stack-count">
            {selectedProducts.length} Technology Selected
          </p>

          {selectedProducts.length === 0 ? (

            <div className="empty-stack">
              Your stack is empty.
            </div>

          ) : (

            <div className="stack-items">

              {selectedProducts.map((product) => (

                <div
                  className="stack-item"
                  key={product.id}
                >

                  <img
                    src={product.icon}
                    alt={product.name}
                  />

                  <div className="stack-info">
                    <strong>{product.name}</strong>
                    <small>{product.category}</small>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() =>
                      removeFromStack(product.id)
                    }
                  >
                    ×
                  </button>

                </div>

              ))}

            </div>

          )}

          <button
            className="remove-all"
            onClick={removeAll}
            disabled={selectedProducts.length === 0}
          >
            Remove All
          </button>

        </div>

      </div>

     

    </div>

    <Footer></Footer>

    </div>
 

    

    
  );
}

export default App;