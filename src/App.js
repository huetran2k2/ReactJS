// import React, { Component } from 'react';
// import Product from './API/APIData';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Product/>
//             </div>
//         );
//     }
// }

// export {App};

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

export  {App};

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




// import React,{Component} from "react";
// class MediumScore extends Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             HK1: 0,
//             HK2: 0,
//             Avg: 0,
//             Result: "",
//             Rank: "",
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange = (event) => {
//         let key = event.target.name;
//         let val = event.target.value;
 
//         this.setState({ [key]: val });
//         this.setState((state) => ({
//             Avg: parseFloat((parseFloat(state.HK1) + parseFloat(state.HK2))/2),
//         }));
//         this.setResult();
//         this.setRank();
//     };
//     handleSubmit = (event) => {
//         event.preventDefault();
//         alert("B???n l?? h???c sinh " + this.state.Rank);
//     };
//     setResult = () => {
//         if (this.state.Avg > 3.5) this.setState({Result: "???????c l??n l???p"});
//         else this.setState({Result: "??? l???i l???p"});
//     };
//     setRank = () => {
//         if (this.state.Avg <3.5) this.setState({Rank: "Y???u"});
//         else if (this.state.Avg <6.5) this.setState({Rank: "Trung B??nh"});
//         else if (this.state.Avg <=8) this.setState({Rank: "Kh??"});
//         else (this.setState ({Rank: "Gi???i"}));
//     };
//     render() {
//         return (
//             <div className="container">
//                 <h3>K???t qu??? h???c t???p</h3>
//                 <form onSubmit={this.handleSubmit} className="was-validated">
//                     <div className="form-group">
//                         <label htmlFor="HK1">??i???m HK1: </label>
//                         <input
//                             type="number"
//                             className="form-control"
//                             id="HK1"
//                             name="HK1"
//                             max={10}
//                             min={0}
//                             defaultValue={0}
//                             required
//                             onChange={this.handleChange}
//                         />
//                         <div className="invalid-feedback">??i???m kh??ng h???p l???</div>
//                     </div>
//                     <div className="form-group">
//                     <label htmlFor="HK2">??i???m HK2: </label>
//                         <input
//                             type="number"
//                             className="form-control"
//                             id="HK2"
//                             name="HK2"
//                             max={10}
//                             min={0}
//                             defaultValue={0}
//                             required
//                             onChange={this.handleChange}
//                         />
//                         <div className="invalid-feedback">??i???m kh??ng h???p l???</div>
//                     </div>
//                     <div className="form-group">
//                     <label htmlFor="HK2">??i???m Trung B??nh: </label>
//                         <input
//                             type="number"
//                             className="form-control"
//                             readOnly
//                             value={this.state.Avg}
//                         />
//                         <div className="invalid-feedback">??i???m kh??ng h???p l???</div>
//                     </div>
//                     <div className="form-group">
//                     <label htmlFor="HK2">K???t qu???: </label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             defaultValue={0}
//                             readOnly
//                             value={this.state.Result}
//                         />
//                     </div>
//                     <div className="form-group">
//                     <label htmlFor="HK2">X???p lo???i: </label>
//                         <input
//                             type="text"
//                             className="form-control"
//                             defaultValue={0}
//                             readOnly
//                             value={this.state.Rank}
//                         />
//                     </div>
//                     <button type="submit" value="Submit" className="btn btn-primary">Xem k???t qu???</button>
//                 </form>
//             </div>
//         );
//     }
// }

// class App extends Component {
//    render()
//    {
//      return (
//        <div>
//          <MediumScore></MediumScore>
//        </div>
//     );
//    }
//  }
//  export default App;



// import React, { Component } from 'react';

// class App extends Component {
//     constructor (props){
//         super (props);
//         this.state = {
//            hk1: 0,
//            hk2: 0,
//            MediumScore: '',
//            academicPower: '',
//            KQ: ''
//        };
//     }
//     myChangeHandler=(event) => {
//         let key = event.target.name; // lay gia tri cua the input
//         let value = event.target.value; // lay gia tri cua the input
//         this.setState ({
//             //firstName: event.target.value,
//             //password: event.target.value // cho phep lay gia tri cacoinput type=text
//             [key]: value
//         });
//     }
//     mySubmitHandler=(event) => {
//             event.preventDefault();
//             let hk1 = this.state.hk1;
//             let hk2 = this.state.hk2;
//             let Medium = 0;
//             if (!Number (hk1) || !Number (hk2)){
//                 alert ("Score semester must beanumber");
//             }else{
//                 Medium= (parseFloat(hk1) + parseFloat(hk2))/2;
//                 this.setState ({MediumScore:Medium});
//             if (Medium >= 9){
//                 this.setState ({KQ: "HSG"});
//                 this.setState ({academicPower: "???????c l??n l???p"});
//             }
//             else if (Medium>=7 && Medium<9){
//                 this.setState ({KQ: "HSK"});
//                 this.setState ({academicPower: "???????c l??n l???p"});
//             }
//             else if (Medium>=5 && Medium<7){
//                 this.setState ({KQ: "HSTB"});
//                 this.setState ({academicPower: "???????c l??n l???p"});
//             }
//             else{
//                 this.setState({KQ: "HSY"});
//                 this.setState({academicPower: "Kh??ng ???????c l??n l???p"});
//             }
//         }
//         console.log (event);
//     }
//     render(){
//         return(
//             <form name="form1" onSubmit={this.mySubmitHandler}>
//                 <table width={670} height={177} border={0} align="center" bgcolor="#ffcccc">
//                     <tbody>
//                         <tr bgcolor>
//                             <td colSpan={2} align="center" bgcolor="ff0099">
//                                 <font color size={5}>
//                                     <b>K???T QU??? H???C T???P</b>
//                                 </font>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td width={125}><span>??i???m HK1: </span></td>
//                             <td width={261}>
//                                 <label>
//                                     <input name="hk1" type="number" min="0" max="10" size={20} onChange={this.myChangeHandler} />
//                                 </label>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td width={125}><span>??i???m HK2: </span></td>
//                             <td width={261}>
//                                 <label>
//                                     <input name="hk2" type="number" min="0" max="10" onChange={this.myChangeHandler} />
//                                 </label>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td><span>??i???m trung b??nh: </span></td>
//                             <td width={261}>
//                                 <label>
//                                     <input name="MediumScore" type="text" readOnly value={this.state.MediumScore} onChange={this.myChangeHandler} />
//                                 </label>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td><span>K???t qu???: </span></td>
//                             <td>
//                                 <label>
//                                     <input name="ketqua" type="text" value={this.state.KQ} />
//                                 </label>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td><span>X???p lo???i h???c l???c</span></td>
//                             <td>
//                                 <label>
//                                     <input name="x" type="text" value={this.state.academicPower} />
//                                 </label>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td colSpan={2} align="center">
//                                 <input type="submit" defaultValue="Xem k???t qu???" />
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </form>
//         );
//     }
// }



//CAFE SHOP
// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         drink:0,
//         price:0,
//         money:0
//     }
//     this.HandlerChage = this.HandlerChage.bind(this);
//     this.HandlerSubmit = this.HandlerSubmit.bind(this);
// }
// HandlerChage = (event) =>{
//     let key = event.target.name;
//     let val = event.target.value
//     if(key=="drink"){
//       if(val=="C?? ph?? s???a"){
//         this.setState({price: 12000})
//       }
//       else if (val =="C?? ph?? ????"){
//         this.setState({price: 10000})
//       }
//       else if (val =="Sting d??u"){
//         this.setState({price: 8000})
//       }
//       else if (val =="Tr?? ????"){
//         this.setState({price: 2000})
//       }
//     }
    
//     this.setState({[key]:val});
    
// }
// HandlerSubmit = (event) =>{
//     event.preventDefault();
//     this.CheckOrder();
    
// }
// CheckOrder = () =>{
//   if(this.state.money == 0 || this.state.money < this.state.price  ){
//     alert("Kh??ng ????? ti???n b???n ??i????");
//   }
//   else if(this.state.drink ==""){
//     alert("Ch???n ????? u???ng ?????");
//   }
//   else alert("????? u???ng c???a b???n l??: "+ this.state.drink + " v?? s??? ti???n d?? l??:  "+ ((this.state.money)-(this.state.price)))
// }
// render() {
//     return (
//       <form onSubmit={this.HandlerSubmit} name="" method="" className="form1">  
//       <table width={700} className="tbl">
//         <tbody><tr>
//             <td colSpan={2} id="td">Menu</td>
//           </tr>
//           <tr>
//             <td id="tui">C?? ph?? s???a...........................12.000??</td>
//           </tr>
//           <tr>
//             <td id="tui">C?? ph?? ????.............................10.000??</td>
//           </tr>
//           <tr>
//             <td id="tui">Sting d??u.............................8.000??</td>
//           </tr>
//           <tr>
//             <td id="tui">Tr?? ????.............................2.000??</td>
//           </tr>
//         </tbody></table>
//       <table width={700} className="tbl">
//         <tbody><tr>
//             <td colSpan={2} id="td">M???I B???N NH???P</td>
//           </tr>
//           <tr>
//             <td>Nh???p s??? ti???n v?? ch???n th???c u???ng</td>
//             <td>
//               <input onChange={this.HandlerChage} type="number" name="money" id="money" defaultValue="" />
//             <select onChange={this.HandlerChage} name="drink" id="cars" value="">
//                 <option selected hidden>????? u???ng</option>
//                 <option value={"C?? ph?? s???a"}>C?? ph?? s???a</option>
//                 <option value={"C?? ph?? ????"}>C?? ph?? ????</option>
//                 <option value={"Sting d??u"}>Sting d??u</option>
//                 <option value={"Tr?? ????"}>Tr?? ????</option>
//             </select>
//             </td>
//           </tr>
//           <tr>
//             <td>K???t qu???:</td>
//             <td>
//               <label>
//                 <span>{this.state.drink}</span>
//               </label>
//             </td>
//           </tr> 
//           <tr>
//             <td>Ti???n th???a:</td>
//             <td>
//               <label>
//                 <span >{((this.state.money)-(this.state.price))}</span>
//               </label>
//             </td>
//           </tr>
//           <tr>
//             <td colSpan={2} align="center">
//               <label><input type="submit" name="Submit" defaultValue="?????t m??n" /></label>
//             </td>
//           </tr>
//         </tbody></table>
//     </form>
//     );
//     }
// }

// export default App;

//REDUCE
// import React, { Component } from 'react';

// class App extends Component {
//     students = [
//         {
//           id: "11",
//           marks: 31
//         },
//         {
//           id: "12",
//           marks: 80
//         },
//         {
//           id: "3",
//           marks: 98
//         }
//       ];
//       render() {
//         let total = this.students.reduce(function(prev, current) {
//           return prev + current.marks;}, 0);

//         return <h1>Total Marks: {total}</h1>;
//       }
//     }
// export default App;

