
import {useEffect, useState} from "react";
import {ProductCard} from "./components/ProductCard";
import "./index.css"

function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json))
        .finally(() => setLoading(false));

  }, []);



  return (
    <div className="app">
      <h1>Fake Store</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};


export default App;



//   return (
//     <div>
//       {loading && <div>Loading...</div>}
//       {products.map((product) => (
//         <ProductCard data={product} />
//       ))}
//     </div>
//   )
// }







// const defaultValue = [
//   {
//     id: 0,
//     name: "Product 1",
//     price: 100,
//     category: "Category 1",
//     image: "https://hips.hearstapps.com/hmg-prod/images/magical-halloween-night-the-full-moon-illuminates-royalty-free-image-1729099355.jpg"
//   },
//   {
//     id: 1,
//     name: "Product 2",
//     price: 200,
//     category: "Category 1",
//     image: "https://www.astronomy.com/uploads/2023/09/underfullmoon.jpeg"

//   }
// ]

// function App() {
//   return (
//     <div>
//       {
//         products.map((product) => 
//           <ProductCard data={product} />
//         )}
//     </div>
//   );
// }


// function App() {

//   const [products, setProducts] = useState(defaultValue);


//   useEffect(()=> {
//     console.log("Component updated!")
//   }, []);


//   return (
//     <div>
//       <button onClick ={() => setProducts([])}>Click</button>
//       {products.map((product) => 
//           <ProductCard data={product} />
//         )}
//     </div>
//   );
// }