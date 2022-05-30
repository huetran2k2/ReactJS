import React, { useState, useEffect } from "react";
import { CategoryNews } from "../news";
// import "./../assets/css/Product.css";
// import swal from "sweetalert";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({
    newsList: [],
    categoryList: [],
    adsList: [],
    isLoaded: false,
  });

  useEffect(() => {
    const getData = async () => {
        var res = await axios(
            "https://61bec846b25c3a00173f4b70.mockapi.io/Category"
        );
        // console.log(353);

        var categoryList = await res.data;

        res = await axios(
            "https://61bec846b25c3a00173f4b70.mockapi.io/News"
        );
        var newsList = await res.data;


        setData({ categoryList, newsList, isLoaded: true });
        // console.log(333);
      };
      if (!data.isLoaded) getData(); // eslint-disable-next-line
  }, [data]);

    return (
        <div className="container">
        {data.isLoaded ? (
            <div className="row">
                <div className="col-10">
                    {data.categoryList.map((categories) => (
                        <CategoryNews
                            key={categories.id}
                            category={categories.name}
                            listNews={data.newsList.filter((news) => news.IdCategoriesNews === categories.id)}
                        />
                    ))}
                </div>
            </div>
        ) : (
            <div className="d-flex justify-content-center align-items-center h-100">
                Loading...
            </div>
        )}
    </div>
    );
}
export default Home;