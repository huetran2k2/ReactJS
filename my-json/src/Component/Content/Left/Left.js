import React, { useState, useEffect } from "react";
// import "./../assets/css/Product.css";
import swal from "sweetalert";
const axios = require("axios").default;

const Left = (props) => {
    return (
        <ul className="list item-third articles-list d-none d-md-block">
        <li className="article ">
          <a className="title" href="/the-thao/thu-thach-nao-cho-don-hlv-gong-oh-kyun-trong-ngay-ra-mat-u23-viet-nam-post946485.vov">
          {props.title}
          </a>
        </li>
        </ul>
    );
  };
  
  const News = () => {
    const [data, setData] = useState({
      newList: [],
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
        var newList = await res.data;
  
        setData({ categoryList, newList, isLoaded: true });
      }
    };
    useEffect(() => {
      getData(); // eslint-disable-next-line
    }, []);
    if (data.isLoaded) {
      var newProductComponents =
        categoryId === "all"
          ? data.productList.map((product) => (
              <News
                key={product.id}
                img={product.image}
                title={product.title}
              />
            ))
          : data.productList
              .filter((product) => product.CategoryID === categoryId)
              .map((product) => (
                <News
                  key={product.id}
                  img={product.image}
                  name={product.title}
                />
              ));
      var categoryComponents = data.categoryList.map(category =>
            <button key={category.id} onClick={() => setCategoryId(category.id)} className={category.id === category ? "active" : ""}>{category.title}</button>
          )
      return (
       
          <div className="container menu">
            <div className="row1">
            {categoryComponents}
              <div className="col"> {newProductComponents}</div>
              </div>
              </div>
 
      );
    }

  };
  export { Left, News as default };