import React, { Component } from "react";
import { connect } from "react-redux";
import SanPham from "./SanPham";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
    soLuong: 1,
 
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
    soLuong: 1
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
    soLuong: 1
  },
];

class DanhSachSanPham extends Component {
  renderSanPham = () => {
    return data.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham sanPham={sanPham} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container py-3">
        <h2 className="text-success text-center pt-5 pb-3">Danh sách sản phẩm</h2>
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(DanhSachSanPham);
