import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {Link} from "react-router-dom"
// import { v4 as uuidv4 } from 'uuid';
class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: "",
      name: "",
      img: "",
      size: "",
      comment: "",
      time: "",
      IdCategoriesNews: ""
    };
    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
    this.showEditProduct = this.showEditProduct.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      axios({
        method: "GET",
        url: `https://61bec846b25c3a00173f4b70.mockapi.io/News/${id}`,
        data: null
      })
        .then((res) => {
          var data = res.data;
          this.setState({
            id: data.id,
            name: data.name,
            img: data.img,
            size: data.size,
            comment: data.comment,
            time: data.time,
            IdCategoriesNews: data.IdCategoriesNews
          });
        })
        .catch((err) => {});
    }
    axios
      .get("https://61bec846b25c3a00173f4b70.mockapi.io/News")
      .then((res) => {
        this.setState({ products: res.data });
      });
    if (this.state.id == "") {
      document.getElementById("image-edit").style.display = "none";
    } else {
      document.getElementById("image-edit").style.display = "block";
    }
  }
  getProduct = (id) => {
    for (var i = 0; i < this.state.products.length; i++) {
      if (this.state.products[i].id === id) {
        return this.state.products[i];
      }
    }
    return null;
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onChangeImage = (event) => {
    this.setState({
      [event.target.name]: "image/" + event.target.files[0].name
    });
    console.log(event.target.files[0].name);
  };
  showEditProduct = (id) => {
    var product = this.getProduct(id);
    this.setState({
      id: product.id,
      name: product.name,
      img: product.img,
      size: product.size,
      comment: product.comment,
      time: product.time,
      IdCategoriesNews: product.IdCategoriesNews
    });
    document.getElementById("image-edit").style.display = "block";
    alert(id);
  };
  getIndexProducts = (id) => {
    for (var i = 0; i < this.state.products.length; i++) {
      if (this.state.products[i].id === id) {
        return i;
      }
    }
    return -1;
  };
  onSave = (event) => {
    event.preventDefault();
    if (this.state.id == "") {
      if (
        this.state.name !== "" &&
        this.state.img !== "" &&
        this.state.size !== "" &&
        this.state.comment !== "" &&
        this.state.time !== "" &&
        this.state.IdCategoriesNews !== ""
      ) {
        axios({
          method: "POST",
          url: `https://61bec846b25c3a00173f4b70.mockapi.io/News`,
          data: {
            name: this.state.name,
            img: this.state.img,
            size: this.state.size,
            comment: this.state.comment,
            time: this.state.time,
            IdCategoriesNews: this.state.IdCategoriesNews
          }
        }).then((res) => {
          this.componentDidMount();
          alert("Successfully");
        });
      } else {
        alert("Empty something");
      }
    } else {
      axios({
        method: "PUT",
        url: `https://61bec846b25c3a00173f4b70.mockapi.io/News/${this.state.id}`,
        data: {
          name: this.state.name,
          img: this.state.img,
          size: this.state.size,
          comment: this.state.comment,
          time: this.state.time,
          IdCategoriesNews: this.state.IdCategoriesNews
        }
      }).then((res) => {
        this.componentDidMount();
        alert("Successfully");
      });
    }
    this.setState({
      id: "",
      name: "",
      img: "",
      size: "",
      comment: "",
      time: "",
      IdCategoriesNews: ""
    });
  };
  onDelete = (id) => {
    console.log(id);
    axios({
      method: "DELETE",
      url: `https://61bec846b25c3a00173f4b70.mockapi.io/News/${id}`,
      data: null
    }).then((res) => {
      if (res.status === 200) {
        var index = this.getIndexProducts(id);
        if (index !== -1) {
          var products = this.state.products;
          products.splice(index, 1);
        }
        this.setState({
          products: products
        });
        alert(id);
        toast.success("Xóa sản phẩm thành công", {});
      }
    });
  };
  render() {
    return (
      <div className="container">

      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Thêm mới
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form onSubmit={this.onSave}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Category</label>
                      <input
                        type="text"
                        name="IdCategoriesNews"
                        value={this.state.IdCategoriesNews}
                        onChange={this.onChange}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter category"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail2">Size</label>
                      <input
                        type="text"
                        name="size"
                        onChange={this.onChange}
                        value={this.state.size}
                        className="form-control"
                        id="exampleInputEmail2"
                        aria-describedby="emailHelp"
                        placeholder="Enter size"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail2">Comment</label>
                      <input
                        type="text"
                        name="comment"
                        onChange={this.onChange}
                        value={this.state.comment}
                        className="form-control"
                        id="exampleInputEmail2"
                        aria-describedby="emailHelp"
                        placeholder="Enter comment"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail2">Time</label>
                      <input
                        type="text"
                        name="time"
                        onChange={this.onChange}
                        value={this.state.time}
                        className="form-control"
                        id="exampleInputEmail2"
                        aria-describedby="emailHelp"
                        placeholder="Enter time"
                      />
                    </div>
                    <div className="form-group">
                      <label>Image</label>
                      <input
                        type="file"
                        name="img"
                        onChange={this.onChangeImage}
                        className="form-control"
                        placeholder="img"
                      />
                    </div>
                    <div
                      className="form-group"
                      id="image-edit"
                      style={{ display: "none" }}
                    >
                      <label>Image</label>
                      {/* "./" +  */}
                      <img src={"./" + this.state.img} style={{ width: "100px" }} />
                    </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button  type="submit" class="btn btn-primary">Save changes</button>
            </div>
            </form>
            </div>
          </div>
        </div>
      </div>

                <table class="table">
        <thead class="thead-dark">
          <tr>
          <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Comment</th>
            <th scope="col">Time</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {this.state.products.map((product) => (
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{product.name}</td>
            <td>{product.time}</td>
            <td><img
                          className="card-img-top"
                          // "./" +
                          src={"./" + product.img}
                          alt="Card image cap"
                        /></td>
            <td> <button
                            className="btn btn-primary"  data-toggle="modal" data-target="#exampleModal"
                            onClick={() => this.showEditProduct(product.id)}
                          >
                            Edit
                          </button></td>
              <td><button type="button"className="btn btn-danger" onClick={() => this.onDelete(product.id)}>delete</button></td>
          </tr>
        </tbody>

      ))}
      </table>

              </div>
          );
        }
      }

 export default Crud;