import React, { Component } from "react";
import "./changeGlasses.css";
import model from "../assets/image/model.jpg";
import v1 from "../assets/image/v1.png";
import v2 from "../assets/image/v2.png";
import v3 from "../assets/image/v3.png";
import v4 from "../assets/image/v4.png";
import v5 from "../assets/image/v5.png";
import v6 from "../assets/image/v6.png";
import v7 from "../assets/image/v7.png";
import v8 from "../assets/image/v8.png";
import v9 from "../assets/image/v9.png";


export class ChangeGlasses extends Component {
  state = {
    cardImg: "",
    carName: "",
    carDes: "",
    carPrice: "",
  };
  changeGlasses = (img,name,des,price) => {
      document.getElementById('info').style.display="block";
    this.setState({
      cardImg: img,
      carName: name,
      carDes: des,
      carPrice: price,
    });
  };
  renderProducts = () => {
    const glasses1 = [
      {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: v1,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: v2,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: v3,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 4,
        price: 70,
        name: "DIOR D6005U",
        url: v4,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 5,
        price: 40,
        name: "PRADA P8750",
        url: v5,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 6,
        price: 60,
        name: "PRADA P9700",
        url: v6,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 7,
        price: 80,
        name: "FENDI F8750",
        url: v7,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 8,
        price: 100,
        name: "FENDI F8500",
        url: v8,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 9,
        price: 60,
        name: "FENDI F4300",
        url: v9,
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    ];

    const productHTMLs = glasses1.map((item) => {
      return (
        <div className="col-2">
          <div className="item card">
            <div
              key={item.id}
              className="show"
              onClick={() => this.changeGlasses(item.url,item.name,item.desc,item.price)}
            >
              <img src={item.url}></img>
              <p>{item.name}</p>
            </div>
          </div>
        </div>
      );
    });
    return productHTMLs;
  };
  render() {
    return (
      <div className="glasses">
        <div className="container">
          <div>
            <div>
              <h1>Change Glasses</h1>
            </div>
            <div className="image">
              <img src={model} />
              <div className="see">
                <img src={this.state.cardImg} />
                <div id="info" className="info">
                  <h3>{this.state.carName}</h3>
                  <p>{this.state.carDes}</p>
                  <p>PRICE:{this.state.carPrice}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="groupGlasses">
            <div className="row">{this.renderProducts()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeGlasses;
