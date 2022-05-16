// import logo from './logo.svg';
// import './App.css';
// import Header from './component/Header/Header';
// import Slide from './component/Slider/Slide';
// import Product from './component/Content/Left/Product';
// import Ads from './component/Content/Right/Ads';
// import Footer from './component/Footer/Footer';

// function App() {
//   return (
//     <div>
//         <div className="catagories-side-menu">
//           {/* Close Icon */}
//           <div id="sideMenuClose">
//             <i className="ti-close" />
//           </div>
//           {/*  Side Nav  */}
//           <div className="nav-side-menu">
//             <div className="menu-list">
//               <h6>Categories</h6>
//               <ul id="menu-content" className="menu-content collapse out">
//                 {/* Single Item */}
//                 <li data-toggle="collapse" data-target="#women" className="collapsed active">
//                   <a href="#">Woman wear <span className="arrow" /></a>
//                   <ul className="sub-menu collapse" id="women">
//                     <li><a href="#">Midi Dresses</a></li>
//                     <li><a href="#">Maxi Dresses</a></li>
//                     <li><a href="#">Prom Dresses</a></li>
//                     <li><a href="#">Little Black Dresses</a></li>
//                     <li><a href="#">Mini Dresses</a></li>
//                   </ul>
//                 </li>
//                 {/* Single Item */}
//                 <li data-toggle="collapse" data-target="#man" className="collapsed">
//                   <a href="#">Man Wear <span className="arrow" /></a>
//                   <ul className="sub-menu collapse" id="man">
//                     <li><a href="#">Man Dresses</a></li>
//                     <li><a href="#">Man Black Dresses</a></li>
//                     <li><a href="#">Man Mini Dresses</a></li>
//                   </ul>
//                 </li>
//                 {/* Single Item */}
//                 <li data-toggle="collapse" data-target="#kids" className="collapsed">
//                   <a href="#">Children <span className="arrow" /></a>
//                   <ul className="sub-menu collapse" id="kids">
//                     <li><a href="#">Children Dresses</a></li>
//                     <li><a href="#">Mini Dresses</a></li>
//                   </ul>
//                 </li>
//                 {/* Single Item */}
//                 <li data-toggle="collapse" data-target="#bags" className="collapsed">
//                   <a href="#">Bags &amp; Purses <span className="arrow" /></a>
//                   <ul className="sub-menu collapse" id="bags">
//                     <li><a href="#">Bags</a></li>
//                     <li><a href="#">Purses</a></li>
//                   </ul>
//                 </li>
//                 {/* Single Item */}
//                 <li data-toggle="collapse" data-target="#eyewear" className="collapsed">
//                   <a href="#">Eyewear <span className="arrow" /></a>
//                   <ul className="sub-menu collapse" id="eyewear">
//                     <li><a href="#">Eyewear Style 1</a></li>
//                     <li><a href="#">Eyewear Style 2</a></li>
//                     <li><a href="#">Eyewear Style 3</a></li>
//                   </ul>
//                 </li>
//                 {/* Single Item */}
//                 <li data-toggle="collapse" data-target="#footwear" className="collapsed">
//                   <a href="#">Footwear <span className="arrow" /></a>
//                   <ul className="sub-menu collapse" id="footwear">
//                     <li><a href="#">Footwear 1</a></li>
//                     <li><a href="#">Footwear 2</a></li>
//                     <li><a href="#">Footwear 3</a></li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div id="wrapper">
//           {/* ****** Header Area Start ****** */}
//          <Header></Header>
//           {/* ****** Header Area End ****** */}
//           {/* ****** Top Discount Area Start ****** */}
//          <Slide></Slide>
//           {/* ****** Quick View Modal Area End ****** */}
//           {/* ****** New Arrivals Area Start ****** */}
//           <Product></Product>
//           {/* ****** New Arrivals Area End ****** */}
//           {/* ****** Offer Area Start ****** */}
//           <Ads></Ads>
//           {/* ****** Offer Area End ****** */}
//           {/* ****** Popular Brands Area Start ****** */}
         
//           {/* ****** Popular Brands Area End ****** */}
//           {/* ****** Footer Area Start ****** */}
//           <Footer></Footer>
//           {/* ****** Footer Area End ****** */}
//         </div>
//         {/* /.wrapper end */}
//       </div>
//   );
// }

// export default App;

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         usenrame: '',
//         age:null,
//     };
// }
// myChangeHandler = (event) =>{
//     let nam = event.target.name;
//     let val = event.target.value;
//     this.setState({[nam]:val});
// }
// render() {
//     return (
//         <form>
//              <p>Enter your name:</p>
//             <input
//                 type='text'
//                 name='username'
//                 onChange={this.myChangeHandler}
//             />
//              <p>Enter your age:</p>
//             <input
//                 type='text'
//                 name='age'
//                 onChange={this.myChangeHandler}
//             />
//             <h1>Hello {this.state.username} {this.state.age}</h1>
//         </form>
//     );
// }
// }
// export default App;



// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         usenrame: '',
//         age:null,
//     };
// }
// myChangeHandler = (event) =>{
//     let nam = event.target.name;
//     let val = event.target.value;
//     this.setState({[nam]:val});
// }
// render() {
//     return (
//         <form>
//              <p>Enter your name:</p>
//             <input 
//                 type='text'
//                 name='username'
//                 onChange={this.myChangeHandler}
//             />
//              <p>Enter your age:</p>
//             <input 
//                 type='text'
//                 name='age'
//                 onChange={this.myChangeHandler}
//             />
//             <h1>Hello {this.state.username} {this.state.age}</h1>
           
//         </form>
//     );
// }
// }
// export default App;


//VIDU3
// import React, { Component } from 'react';

// class App extends Component {
//   constructor (props){
//     super(props);
//     this.state = {
//       data: "Initial data..."
//     }
//     this.updateState=this.updateState.bind(this);
//     };
//    updateState(e){
//       this.setState({data: e.target.value});
//     }

//   render() {
//     return (
//       <div>
//         <Content myDataProp = {this.state.data}
//         updateStateProp = {this.updateState}></Content>
//       </div>
//     );
//   }
// }
// class Content extends Component {
//   render() {
//     return (
//       <div>
//         <input type="text" value={this.props.myDataProp} onChange = {this.props.updateStateProp}/>
//         <h3> {this.props.myDataProp}</h3>
//       </div>
//     );
//   }
// }
// export default App;




import React,{Component} from "react";
class MediumScore extends Component {
    constructor(props){
        super(props);
        this.state ={
            HK1: 0,
            HK2: 0,
            Avg: 0,
            Result: "",
            Rank: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        let key = event.target.name;
        let val = event.target.value;
 
        this.setState({ [key]: val });
        this.setState((state) => ({
            Avg: parseFloat((parseFloat(state.HK1) + parseFloat(state.HK2))/2),
        }));
        this.setResult();
        this.setRank();
    };
    handleSubmit = (event) => {
        event.preventDefault();
        alert("Bạn là học sinh " + this.state.Rank);
    };
    setResult = () => {
        if (this.state.Avg > 3.5) this.setState({Result: "Được lên lớp"});
        else this.setState({Result: "Ở lại lớp"});
    };
    setRank = () => {
        if (this.state.Avg <3.5) this.setState({Rank: "Yếu"});
        else if (this.state.Avg <6.5) this.setState({Rank: "Trung Bình"});
        else if (this.state.Avg <=8) this.setState({Rank: "Khá"});
        else (this.setState ({Rank: "Giỏi"}));
    };
    render() {
        return (
            <div className="container">
                <h3>Kết quả học tập</h3>
                <form onSubmit={this.handleSubmit} className="was-validated">
                    <div className="form-group">
                        <label htmlFor="HK1">Điểm HK1: </label>
                        <input
                            type="number"
                            className="form-control"
                            id="HK1"
                            name="HK1"
                            max={10}
                            min={0}
                            defaultValue={0}
                            required
                            onChange={this.handleChange}
                        />
                        <div className="invalid-feedback">Điểm không hợp lệ</div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="HK2">Điểm HK2: </label>
                        <input
                            type="number"
                            className="form-control"
                            id="HK2"
                            name="HK2"
                            max={10}
                            min={0}
                            defaultValue={0}
                            required
                            onChange={this.handleChange}
                        />
                        <div className="invalid-feedback">Điểm không hợp lệ</div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="HK2">Điểm Trung Bình: </label>
                        <input
                            type="number"
                            className="form-control"
                            readOnly
                            value={this.state.Avg}
                        />
                        <div className="invalid-feedback">Điểm không hợp lệ</div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="HK2">Kết quả: </label>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={0}
                            readOnly
                            value={this.state.Result}
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="HK2">Xếp loại: </label>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={0}
                            readOnly
                            value={this.state.Rank}
                        />
                    </div>
                    <button type="submit" value="Submit" className="btn btn-primary">Xem kết quả</button>
                </form>
            </div>
        );
    }
}

class App extends Component {
   render()
   {
     return (
       <div>
         <MediumScore></MediumScore>
       </div>
    );
   }
 }
 export default App;