import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="container menu">
            <div className="row1">
              <div className="col">
                <div>
                  <img className="bg-img" src="./Images/bg.jpg" alt="" />
                </div>
                <h4 className="card-title1">
                  Giải pháp gỡ “điểm nghẽn” thu phí điện tử không dừng
                </h4>
                <ul className="list item-third articles-list d-none d-md-block">
                  <li className="article ">
                    <a className="title" href="/the-thao/thu-thach-nao-cho-don-hlv-gong-oh-kyun-trong-ngay-ra-mat-u23-viet-nam-post946485.vov">
                      Thử thách nào chờ đón HLV Gong Oh Kyun trong ngày ra mắt U23 Việt Nam?
                    </a>
                  </li>
                  <li className="article-list list-item ">
                    <a className="title" href="/chinh-tri/quang-ninh-tim-giai-phap-cai-thien-pci-khong-chi-la-cuoc-dua-ve-thu-hang-post946422.vov">
                      Quảng Ninh tìm giải pháp cải thiện PCI: Không chỉ là cuộc đua về thứ hạng
                    </a>
                  </li>
                  <li className="article-list list-item ">
                    <a className="title" href="/xa-hoi/tin-24h/thoi-tiet-ngay-275-mien-bac-chieu-toi-va-dem-co-mua-co-noi-mua-rat-to-post946534.vov">
                      Thời tiết ngày 27/5: Miền Bắc chiều tối và đêm có mưa, có nơi mưa rất to
                    </a>
                  </li>
                  <li className="article-list list-item ">
                    <a className="title" href="/kinh-te/thi-truong/gia-vang-trong-nuoc-tang-nguoc-chieu-voi-gia-vang-the-gioi-post946523.vov">
                      Giá vàng trong nước tăng "ngược chiều" với giá vàng thế giới
                    </a>
                  </li>
                  <li className="article-list list-item ">
                    <a className="title" href="/the-gioi/nga-cong-bo-ban-do-di-chuyen-an-toan-cho-tau-thuyen-tu-cac-cang-ukraine-post946533.vov">
                      Nga công bố bản đồ di chuyển an toàn cho tàu thuyền từ các cảng Ukraine
                    </a>
                  </li>
                  <li className="article-list list-item ">
                    <a className="title" href="/xa-hoi/tin-24h/lan-chiem-via-he-o-tphcm-van-tiep-dien-du-duoc-yeu-cau-hoan-tra-post946451.vov">
                      Lấn chiếm vỉa hè ở TP.HCM vẫn tiếp diễn dù được yêu cầu hoàn trả
                    </a>
                  </li>
                  <li className="article-list list-item ">
                    <a className="title" href="/kinh-te/loi-giai-cho-dau-ra-ben-vung-cua-nong-san-tay-bac-post946441.vov">
                      Lời giải cho đầu ra bền vững của&nbsp;nông sản Tây Bắc
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <div className="img1">
                  <img className="img" src="./Images/img1.jpg" alt="" />
                  <h3 className="card-title">Nên có quy định cụ thể buộc cán bộ sai phạm phải từ chức</h3>
                </div>
                <div className="img1">
                  <img className="img" src="./Images/img1.jpg" alt="" />
                  <h3 className="card-title">Nên có quy định cụ thể buộc cán bộ sai phạm phải từ chức</h3>
                </div>
                <div className="img1">
                  <img className="img" src="./Images/img1.jpg" alt="" />
                  <h3 className="card-title">Nên có quy định cụ thể buộc cán bộ sai phạm phải từ chức</h3>
                </div>
              </div>
              <div className="col">
                <div>
                  <a href="/tin-moi-cap-nhat"><h4 className="home-events-config-block-title">Mới cập nhật</h4></a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Menu;