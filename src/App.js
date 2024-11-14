import {ProductCard} from "./components/ProductCard";

const products = [
  {
    id: 0,
    name: "Product 1",
    price: 100,
    category: "Category 1",
    image: "https://hips.hearstapps.com/hmg-prod/images/magical-halloween-night-the-full-moon-illuminates-royalty-free-image-1729099355.jpg"
  },
  {
    id: 1,
    name: "Product 2",
    price: 200,
    category: "Category 1",
    image: "https://www.astronomy.com/uploads/2023/09/underfullmoon.jpeg"

  }
]

function App() {
  return (
    <div>
      {
        products.map((product) => 
          <ProductCard data={product} />
        )}
    </div>
  );
}

export default App;
