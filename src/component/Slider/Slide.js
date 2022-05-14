import React, { Component } from 'react';

class Slide extends Component {
    render() {
        return (
            <div>
                   <section className="top-discount-area d-md-flex align-items-center">
            {/* Single Discount Area */}
            <div className="single-discount-area">
              <h5>Free Shipping &amp; Returns</h5>
              <h6><a href="#">BUY NOW</a></h6>
            </div>
            {/* Single Discount Area */}
            <div className="single-discount-area">
              <h5>20% Discount for all dresses</h5>
              <h6>USE CODE: Colorlib</h6>
            </div>
            {/* Single Discount Area */}
            <div className="single-discount-area">
              <h5>20% Discount for students</h5>
              <h6>USE CODE: Colorlib</h6>
            </div>
          </section>
          {/* ****** Top Discount Area End ****** */}
          {/* ****** Welcome Slides Area Start ****** */}
          <section className="welcome_area">
            <div className="welcome_slides owl-carousel">
              {/* Single Slide Start */}
              <div className="single_slide height-800 bg-img background-overlay" style={{backgroundImage: 'url(img/bg-img/bg-1.jpg)'}}>
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    <div className="col-12">
                      <div className="welcome_slide_text">
                        <h6 data-animation="bounceInDown" data-delay={0} data-duration="500ms">* Only today we offer free shipping</h6>
                        <h2 data-animation="fadeInUp" data-delay="500ms" data-duration="500ms">Fashion Trends</h2>
                        <a href="#" className="btn karl-btn" data-animation="fadeInUp" data-delay="1s" data-duration="500ms">Shop Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Slide Start */}
              <div className="single_slide height-800 bg-img background-overlay" style={{backgroundImage: 'url(img/bg-img/bg-4.jpg)'}}>
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    <div className="col-12">
                      <div className="welcome_slide_text">
                        <h6 data-animation="fadeInDown" data-delay={0} data-duration="500ms">* Only today we offer free shipping</h6>
                        <h2 data-animation="fadeInUp" data-delay="500ms" data-duration="500ms">Summer Collection</h2>
                        <a href="#" className="btn karl-btn" data-animation="fadeInLeftBig" data-delay="1s" data-duration="500ms">Check Collection</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Slide Start */}
              <div className="single_slide height-800 bg-img background-overlay" style={{backgroundImage: 'url(img/bg-img/bg-2.jpg)'}}>
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    <div className="col-12">
                      <div className="welcome_slide_text">
                        <h6 data-animation="fadeInDown" data-delay={0} data-duration="500ms">* Only today we offer free shipping</h6>
                        <h2 data-animation="bounceInDown" data-delay="500ms" data-duration="500ms">Women Fashion</h2>
                        <a href="#" className="btn karl-btn" data-animation="fadeInRightBig" data-delay="1s" data-duration="500ms">Check Collection</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ****** Welcome Slides Area End ****** */}
          {/* ****** Top Catagory Area Start ****** */}
          <section className="top_catagory_area d-md-flex clearfix">
            {/* Single Catagory */}
            <div className="single_catagory_area d-flex align-items-center bg-img" style={{backgroundImage: 'url(img/bg-img/bg-2.jpg)'}}>
              <div className="catagory-content">
                <h6>On Accesories</h6>
                <h2>Sale 30%</h2>
                <a href="#" className="btn karl-btn">SHOP NOW</a>
              </div>
            </div>
            {/* Single Catagory */}
            <div className="single_catagory_area d-flex align-items-center bg-img" style={{backgroundImage: 'url(img/bg-img/bg-3.jpg)'}}>
              <div className="catagory-content">
                <h6>in Bags excepting the new collection</h6>
                <h2>Designer bags</h2>
                <a href="#" className="btn karl-btn">SHOP NOW</a>
              </div>
            </div>
          </section>
          {/* ****** Top Catagory Area End ****** */}
          {/* ****** Quick View Modal Area Start ****** */}
          <div className="modal fade" id="quickview" tabIndex={-1} role="dialog" aria-labelledby="quickview" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
              <div className="modal-content">
                <button type="button" className="close btn" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                <div className="modal-body">
                  <div className="quickview_body">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-lg-5">
                          <div className="quickview_pro_img">
                            <img src="img/product-img/product-1.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-12 col-lg-7">
                          <div className="quickview_pro_des">
                            <h4 className="title">Boutique Silk Dress</h4>
                            <div className="top_seller_product_rating mb-15">
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                            </div>
                            <h5 className="price">$120.99 <span>$130</span></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?</p>
                            <a href="#">View Full Product Details</a>
                          </div>
                          {/* Add to Cart Form */}
                          <form className="cart" method="post">
                            <div className="quantity">
                              <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true" /></span>
                              <input type="number" className="qty-text" id="qty" step={1} min={1} max={12} name="quantity" defaultValue={1} />
                              <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true" /></span>
                            </div>
                            <button type="submit" name="addtocart" value={5} className="cart-submit">Add to cart</button>
                            {/* Wishlist */}
                            <div className="modal_pro_wishlist">
                              <a href="wishlist.html" target="_blank"><i className="ti-heart" /></a>
                            </div>
                            {/* Compare */}
                            <div className="modal_pro_compare">
                              <a href="compare.html" target="_blank"><i className="ti-stats-up" /></a>
                            </div>
                          </form>
                          <div className="share_wf mt-30">
                            <p>Share With Friend</p>
                            <div className="_icon">
                              <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                              <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                              <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                              <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
        );
    }
}

export default Slide;