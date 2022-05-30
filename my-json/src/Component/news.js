import React, { Component } from 'react';
import '../assests/css/style.css';

const LargeNews = ({ data }) => {
  // console.log(data.id);
  return(
        <div className="container menu">
        <div className="row1">
          <div className="col">
            <div>
              <img className="bg-img" src={data.img} alt="" />
            </div>
            <h5 className="card-title1">{data.name}</h5>
        </div>
    </div>
</div>
  )
}

const SmallNews = ({ data }) => {
  return(
    <div className="container menu">
            <div className="row1">
            <div className="col">
                <div className="img1">
                  <img className="img" src={data.img} alt="" />
                  <h3 className="card-title">{data.name}</h3>
                </div>
                  </div>
                  </div>
                  </div>
  )
}

const NewNews = ({ data }) => {
    // console.log(data.id);
    return(
        <div className="container menu">
            <div class="col">
                {/* <div>
                <a href="/tin-moi-cap-nhat"><h4 class="home-events-config-block-title">Mới cập nhật</h4></a>

                </div> */}
                <div class="">
                <div class="">
                    <img className="mua" src={data.img} alt="" />
                </div>
                <div class="">
                    <p>{data.name}</p>
                </div>
            </div>
            </div>
            </div>
    )
  }

  const TitleNews = ({ data }) => {
    // console.log(data.id);
    return(
        <div className="container menu">
        <div className="row1">
          <div className="col">
            <ul className="list item-third articles-list d-none d-md-block">
              <li className="article-list list-item ">
                <a className="title" href="">
                  {data.name}
                </a>
              </li>
              </ul>
              </div>
              </div>
              </div>
    )
  }

const CategoryNews = (props) =>
// { category, list }
{
  // console.log(props.list);
  return(
    <div>
			<h1>{props.category}</h1>
			<div className="rowLSN">
        		<div className="">
					{props.listNews
						.filter((news) => news.size === "large")
						.map((news) => (
							<LargeNews key={news.id} data={news}/>
						))}
                        <div className="smalll">
					{props.listNews
						.filter((news) => news.size === "small")
						.map((news) => (
							<TitleNews key={news.id} data={news} />
						))}
				</div>
				</div>
				<div className=" smalll">
					{props.listNews
						.filter((news) => news.size === "small")
						.map((news) => (
							<SmallNews key={news.id} data={news} />
						))}
				</div>
                <div className=" smalll">
                    <div>
                        <a href="/tin-moi-cap-nhat"><h4 class="home-events-config-block-title">Mới cập nhật</h4></a>

                    </div>
					{props.listNews
						.filter((news) => news.size === "small")
						.map((news) => (
							<NewNews key={news.id} data={news} />
						))}
				</div>
			</div>
		</div>
  )
}

export { CategoryNews };