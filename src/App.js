import React, { useState } from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const sortProducts = (event) => {
    const sort = event.target.value;
    console.log(sort);
    setSort(sort);
    setProducts(
      products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        )
    );
  };

  const filterProducts = (event) => {
    const filter = event.target.value;
    if (filter === "") {
      setSize(filter);
      setProducts(data.products);
    } else {
      setSize(filter);
      setProducts(
        data.products.filter(
          (product) => product.availableSizes.indexOf(filter) >= 0
        )
      );
    }
  };

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart App</a>
      </header>
      <main>
        <div className="content">
          <div className="main-content">
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              sortProducts={sortProducts}
              filterProducts={filterProducts}
            />
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
