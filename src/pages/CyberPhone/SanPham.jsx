import React, { Component } from "react";
import { connect } from "react-redux";

class SanPham extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div className="container">
        <div className="card text-dark bg-light">
          <img className="card-img-top" src={sanPham.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <p className="card-text">{sanPham.giaBan}</p>
            <button className="card-text bg-success text-white" onClick={()=>{
              this.props.themGioHang(sanPham)
            }}>Thêm giỏ hàng</button>
          </div>
          
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPham) => {
      const spGioHang = {
        maSP:sanPham.maSP,
        tenSP:sanPham.tenSP,
        soLuong:sanPham.soLuong,
        hinhAnh:sanPham.hinhAnh,
        giaBan: sanPham.giaBan
      }
      const action = {
        type:'THEM_GIO_HANG',
        spGioHang: spGioHang,
      }
      // console.log(action)
      dispatch(action)
    }
  }
};

export default connect(null,mapDispatchToProps)(SanPham);
