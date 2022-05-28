import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                 <div className="container-header">
          <div className="container">
            <div className="row-header">
              <div className="col-auto">
                <img className="img-logo" src="./Images/logo.svg" alt="Home" />
              </div>
              <div className="col-auto">
                <p>Thứ Sáu, ngày 27 tháng 5 năm 2022</p>
              </div>
              <div className="col-auto ">
                <a className="menu-social mx-1" href="https://www.facebook.com/baodientuvov.vn/">
                  <i className="vovvn-icon vovvn-icon-facebook" />
                </a>
                <a className="menu-social mx-1" href="https://www.tiktok.com/@baodientuvov">
                  <i className="fa-brands fa-tiktok" />
                </a>
                <a className="menu-social mx-1" href="https://www.youtube.com/channel/UCHCos7l5Nol2OZfFFkDXckg/featured?disable_polymer=true">
                  <i className="fa-brands fa-youtube" />
                </a>
                <a className="menu-social mx-1" href="https://zalo.me/baodientuvov">
                  <i className="fa-brands fa-instagram" />
                </a>
              </div>
              <div className="col-auto ">
                <a href="/player" target="_blank"> Listen &amp; Watch <i className="vovvn-icon vovvn-icon-lwplay ms-1" /></a>
              </div>
              <div className="col-auto ">
                <a href="https://vov.vn/" className="language-link">Tiếng Việt</a>
              </div>
              <div className="col-auto my-auto d-none d-xl-block">
                <div className="search-box">
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid ">
            <nav className="navbar-expand-lg navbar-dark ">
              <div className=" containe-fluid collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Chính trị</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Kinh tế</a>
                  </li>
                  <li className="nav-item active dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Thể thao
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link " href="#">Văn hóa</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link " href="#">Xã hội</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link " href="#">Văn hóa</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link " href="#">Giải trí</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link " href="#">Pháp luật</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link " href="#">Giáo dục</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Sức khỏe</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Đời sống</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Chính trị</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Đăng nhập</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          </div>
            </div>
        );
    }
}

export default Header;