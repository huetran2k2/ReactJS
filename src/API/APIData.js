import React, { useState, useEffect } from "react";
// import "./../assets/css/Product.css";
import swal from "sweetalert";
const axios = require("axios").default;

const successAlert = (name) => {
  swal({
    title: "Thank you!",
    text: `You bought a ${name}! Your order is processing!`,
    icon: "success",
  });
};
const Product = (props) => {
  return (
    <div className="product col-3 mt-4 text-center">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <div className="price">
        <div>
          Price: <span className="text-danger">{props.price} VND</span>
        </div>
        <div className="text-muted text-decoration-line-through">
          {props.oldPrice === undefined ? <br/>: props.oldPrice + " VND"}
        </div>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => successAlert(props.name)}
      >
        Add to cart
      </button>
    </div>
  );
};

const NewProducts = () => {
  const [data, setData] = useState({
    productList: [],
    categoryList: [],
    isLoaded: false
  });
  const [categoryId, setCategoryId] = useState("0");
  const getData = async () => {
    if (!data.isLoaded) {
      //get categoryList from API
      var res = await axios(
        "https://61bec846b25c3a00173f4b70.mockapi.io/Categories"
      );
      var categoryList = await res.data;
      //get productList from API
      res = await axios(
        "https://61bec846b25c3a00173f4b70.mockapi.io/Products"
      );
      var productList = await res.data;

      setData({ categoryList, productList, isLoaded: true });
    }
  };

  useEffect(() => {
    getData(); // eslint-disable-next-line
  }, []);

  if (data.isLoaded) {
    var newProductComponents =
      categoryId === "all"
        ? data.productList.map((product) => (
            <Product
              key={product.Id}
              img={product.Image}
              name={product.Name}
              price={product.Price}
              oldPrice={product.OldPrice}
            />
          ))
        : data.productList
            .filter((product) => product.CategoryID === categoryId)
            .map((product) => (
              <Product
                key={product.Id}
                img={product.Image}
                name={product.Name}
                price={product.Price}
                oldPrice={product.OldPrice}
              />
            ));
    var categoryComponents = data.categoryList.map(category =>
          <button key={category.Id} onClick={() => setCategoryId(category.Id)} className={category.Id === category ? "active" : ""}>{category.Name}</button>
        )
    return (
      <section className="new-products">
        <h1 className="text-center mb-3">New Products in NDK Shop</h1>
        <div className="button-nav">
          {categoryComponents}
        </div>
        <div className="row container mx-3">{newProductComponents}</div>
      </section>
    );
  }
  return <div>Loading...</div>;
};
export { Product, NewProducts as default };
