export var getData = (type)=>{
    var data = [
        {
        "id": "1",
         "name": "Jeans midi cocktail dress",
         "price": "2,999,000",
         "img": "https://dulichviet.com.vn/images/bandidau/NOI-DIA/Phu-Quoc/combo-du-lich-phu-quoc-gia-tot-du-lich-viet(6).jpg"
        },
        {
        "id": "2",
         "name": "Jeans midi cocktail dress",
         "price": "3,899,000",
         "img": "https://dulichviet.com.vn/images/bandidau/NOI-DIA/Quy-Nhon/combo-du-lich-quy-nhon-gia-tot-du-lich-viet(1).jpg"
        },
        {
        "id": "3",

         "name": "Jeans midi cocktail dress",
         "price": "4,099,000",
         "img": "https://dulichviet.com.vn/images/bandidau/NOI-DIA/Quy-Nhon/combo-du-lich-quy-nhon-gia-tot-du-lich-viet-2(1).jpg"
        },
        {
        "id": "4",

         "name": "Jeans midi cocktail dress",
         "price": "2,399,000",
         "img": "https://dulichviet.com.vn/images/bandidau/NOI-DIA/Quy-Nhon/combo-du-lich-quy-nhon-du-lich-viet.jpg"
        },
        {
        "id": "1",

         "name": "Jeans midi cocktail dress",
        
         "price": "1,999,000",
         "img": "https://dulichviet.com.vn/images/bandidau/NOI-DIA/Quy-Nhon/combo-qu-lich-quy-nhon-khach-san-muong-thanh-du-lich-viet.jpg"
        },
        {
        "id": "2",

         "name": "Jeans midi cocktail dress",
        
         "price": "2,399,000",
         "img": "https://dulichviet.com.vn/images/bandidau/NOI-DIA/Quy-Nhon/combo-du-lich-quy-nhon-gia-re-du-lich-viet(2).jpg"
        },
        {
        "id": "3",

         "name": "Jeans midi cocktail dress",
        
         "price": "2,099,000",
         "img": "https://dulichviet.com.vn/images/bandidau/NOI-DIA/Quy-Nhon/combo-du-lich-quy-nhon-gia-tot-du-lich-viet(10).jpg"
        },
        {
        "id": "4",

         "name": "Jeans midi cocktail dress",
        
         "price": "2,399,000",
         "img": "https://dulichviet.com.vn/images/bandidau/NOI-DIA/Quy-Nhon/combo-du-lich-quy-nhon-du-lich-viet(1).jpg"
        },
        {
        "id": "1",

         "name": "Jeans midi cocktail dress",
        
         "price": "2,099,000",
         "img": "https://dulichviet.com.vn/images/bandidau/NOI-DIA/Quy-Nhon/combo-du-lich-quy-nhon-du-lich-viet(2).jpg"
        },
        {
        "id": "5",

         "name": "Jeans midi cocktail dress",
        
         "price": "2,199,000",
         "img": "https://dulichviet.com.vn/images/bandidau/NOI-DIA/Quy-Nhon/combo-du-lich-quy-nhon-gia-tot-du-lich-viet(18).jpg"
        },
        {
        "id": "3",

         "name": "Jeans midi cocktail dress",
         
         "price": "2,799,000",
         "img": "https://dulichviet.com.vn/images/bandidau/NOI-DIA/Quy-Nhon/combo-du-lich-quy-nhon-gia-tot-du-lich-viet(22).jpg"
        },
        {
        "id": "4",

         "name": "Jeans midi cocktail dress",
       
         "price": "3,199,000",
         "img": "https://dulichviet.com.vn/images/bandidau/NOI-DIA/Quy-Nhon/combo-du-lich-quy-nhon-gia-tot-du-lich-viet(26).jpg"
        },
        {
        "id": "2",

         "name": "Jeans midi cocktail dress",
        
         "price": "4,499,000",
         "img": "https://dulichviet.com.vn/images/bandidau/NOI-DIA/Phu-Quoc/du-lich-free-and-easy-kham-pha-phu-quoc-du-lich-viet.jpg"
        },
        {
        "id": "1",

         "name": "Jeans midi cocktail dress",
         
         "price": "4,499,000",
         "img": "https://dulichviet.com.vn/images/bandidau/images/NHA%20TRANG/du-lich-free-and-easy-nha-trang-gia-tot.jpg"
        },
        {
        "id": "3",

         "name": "Jeans midi cocktail dress",
      
         "price": "2,585,000",
         "img": "https://dulichviet.com.vn/images/bandidau/TOUR%20FREE%20%26%20EASY/HINH-DAI-DIEN/combo-singapore-zoo-river-safari.jpg"
        },
        {
        "id": "1",

         "name": "Jeans midi cocktail dress",
         
         "price": "846,000",
         "img": "https://dulichviet.com.vn/images/bandidau/TOUR%20FREE%20%26%20EASY/HINH-DAI-DIEN/combo-cong-vien-merlion-vuon-lan-quoc-gia.jpg"
        },
        {
        "id": "1",

         "name": "Jeans midi cocktail dress",
         
         "price": "2,397,000",
         "img": "https://dulichviet.com.vn/images/bandidau/TOUR%20FREE%20%26%20EASY/HINH-DAI-DIEN/combo-night-safari-va-river-safari-singapore.jpg"
        }
       ]

    var categories = [
        {
         "name": "WOMAN",
         "id": "1"
        },
        {
         "name": "MAN",
         "id": "2"
        },
        {
         "name": "ACCESSORIES",
         "id": "3"
        },
        {
         "name": "SHOES",
         "id": "4"
        },
        {
            "name": "KIDS",
            "id": "5"
        },
        {
            "name": "ALL",
            "id": "0"
        }
       ]
    var categoriesFul = [{id : true, name:"Tất cả các sản phẩm" }]
    switch (type) {
        case "full":
            return data; 
        case "1":
            return categoriesFul;   
        default:
            return categories;
    }
}
