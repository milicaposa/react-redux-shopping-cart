import React, { useState } from "react";
import Products from "./components/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart App</a>
      </header>
      <main>
        <div className="content">
          <div className="main-content">
            <Products products={products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All rigthts reserved</footer>
    </div>
  );
}

export default App;

// class AppClass extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        products: data.products,
//        size: "",
//        sort: ""
//     }
//   }

//   render() {
//     return (
//       <div className="grid-container">
//         <header>
//           <a href="/">React Shopping Cart App</a>
//         </header>
//         <main>Product List</main>
//         <footer>All rigthts reserved</footer>
//       </div>
//     );
//   }
// }

// export default AppClass;
