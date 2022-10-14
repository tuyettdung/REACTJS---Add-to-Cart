import React, { Component } from 'react'
import {connect} from 'react-redux'

 class ModalGioHang extends Component {

  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang,index)=>{
      return <tr key={index}>
        <td>{spGioHang.maSP}</td>
        <td>{spGioHang.tenSP}</td>
        <td> <img style={{width:'50px'}} src={spGioHang.hinhAnh} alt="" /></td>
        <td>{spGioHang.giaBan.toLocaleString()}</td>
        <td>{spGioHang.soLuong}</td>
        <td>{(spGioHang.soLuong*spGioHang.giaBan).toLocaleString()}</td>
      </tr>
    })
  }
  render() {
    // console.log(this.props.gioHang);
    return (
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình ảnh</th>
              <th>Gía bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {this.renderGioHang()}
          </tbody>
        </table>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
return {
  gioHang: state.gioHangReducer.gioHang


}
}


export default connect(mapStateToProps,null)(ModalGioHang)