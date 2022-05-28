import React, { useState, useEffect } from "react";
// import "./../assets/css/Product.css";
// import swal from "sweetalert";
const axios = require("axios").default;
const Product = (props) => {
    console.log(props.categoryList)
    return (
   <div>
       <div class="row">
        <div className="col-5">
                    <img className="mua" src={props.img} alt="" />
                  </div>
                  <div className="col-7">
                    <p>{props.title}</p>
                  </div>
                  </div>
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
          "https://61bec846b25c3a00173f4b70.mockapi.io/Category"
        );
        var categoryList = await res.data;
        //get productList from API
        res = await axios(
          "https://61bec846b25c3a00173f4b70.mockapi.io/News"
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
          ? data.productList.map((News) => (
              <Product
                key={News.id}
                img={News.image}
                title={News.title}
              />
            ))
          : data.productList
              .filter((News) => News.idCategory === categoryId)
              .map((News) => (
                <Product
                  key={News.id}
                  img={News.image}
                  title={News.title}
                />
              ));
      var categoryComponents = data.categoryList.map(category =>
            <button key={category.id} onClick={() => setCategoryId(category.id)} className={category.id === category ? "active" : ""}>{category.Category}</button>
          )
      return (
      <div>
          <div >
            {categoryComponents}
          </div>
          <div >{newProductComponents}</div>
          </div>
      );
    }
    return <div>Loading...</div>;
  };
  export { Product, NewProducts as default };
  