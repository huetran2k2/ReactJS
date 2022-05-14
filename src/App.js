import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Slide from './component/Slider/Slide';
import Product from './component/Content/Left/Product';
import Ads from './component/Content/Right/Ads';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div>
        <div className="catagories-side-menu">
          {/* Close Icon */}
          <div id="sideMenuClose">
            <i className="ti-close" />
          </div>
          {/*  Side Nav  */}
          <div className="nav-side-menu">
            <div className="menu-list">
              <h6>Categories</h6>
              <ul id="menu-content" className="menu-content collapse out">
                {/* Single Item */}
                <li data-toggle="collapse" data-target="#women" className="collapsed active">
                  <a href="#">Woman wear <span className="arrow" /></a>
                  <ul className="sub-menu collapse" id="women">
                    <li><a href="#">Midi Dresses</a></li>
                    <li><a href="#">Maxi Dresses</a></li>
                    <li><a href="#">Prom Dresses</a></li>
                    <li><a href="#">Little Black Dresses</a></li>
                    <li><a href="#">Mini Dresses</a></li>
                  </ul>
                </li>
                {/* Single Item */}
                <li data-toggle="collapse" data-target="#man" className="collapsed">
                  <a href="#">Man Wear <span className="arrow" /></a>
                  <ul className="sub-menu collapse" id="man">
                    <li><a href="#">Man Dresses</a></li>
                    <li><a href="#">Man Black Dresses</a></li>
                    <li><a href="#">Man Mini Dresses</a></li>
                  </ul>
                </li>
                {/* Single Item */}
                <li data-toggle="collapse" data-target="#kids" className="collapsed">
                  <a href="#">Children <span className="arrow" /></a>
                  <ul className="sub-menu collapse" id="kids">
                    <li><a href="#">Children Dresses</a></li>
                    <li><a href="#">Mini Dresses</a></li>
                  </ul>
                </li>
                {/* Single Item */}
                <li data-toggle="collapse" data-target="#bags" className="collapsed">
                  <a href="#">Bags &amp; Purses <span className="arrow" /></a>
                  <ul className="sub-menu collapse" id="bags">
                    <li><a href="#">Bags</a></li>
                    <li><a href="#">Purses</a></li>
                  </ul>
                </li>
                {/* Single Item */}
                <li data-toggle="collapse" data-target="#eyewear" className="collapsed">
                  <a href="#">Eyewear <span className="arrow" /></a>
                  <ul className="sub-menu collapse" id="eyewear">
                    <li><a href="#">Eyewear Style 1</a></li>
                    <li><a href="#">Eyewear Style 2</a></li>
                    <li><a href="#">Eyewear Style 3</a></li>
                  </ul>
                </li>
                {/* Single Item */}
                <li data-toggle="collapse" data-target="#footwear" className="collapsed">
                  <a href="#">Footwear <span className="arrow" /></a>
                  <ul className="sub-menu collapse" id="footwear">
                    <li><a href="#">Footwear 1</a></li>
                    <li><a href="#">Footwear 2</a></li>
                    <li><a href="#">Footwear 3</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="wrapper">
          {/* ****** Header Area Start ****** */}
         <Header></Header>
          {/* ****** Header Area End ****** */}
          {/* ****** Top Discount Area Start ****** */}
         <Slide></Slide>
          {/* ****** Quick View Modal Area End ****** */}
          {/* ****** New Arrivals Area Start ****** */}
          <Product></Product>
          {/* ****** New Arrivals Area End ****** */}
          {/* ****** Offer Area Start ****** */}
          <Ads></Ads>
          {/* ****** Offer Area End ****** */}
          {/* ****** Popular Brands Area Start ****** */}
         
          {/* ****** Popular Brands Area End ****** */}
          {/* ****** Footer Area Start ****** */}
          <Footer></Footer>
          {/* ****** Footer Area End ****** */}
        </div>
        {/* /.wrapper end */}
      </div>
  );
}

export default App;
