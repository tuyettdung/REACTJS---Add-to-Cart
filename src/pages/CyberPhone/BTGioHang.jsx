import React, { Component } from 'react'
import {connect} from 'react-redux'
import DanhSachSanPham from './DanhSachSanPham'
import ModalGioHang from './ModalGioHang'

 class BTGioHang extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='text-danger text-center py-3'>BÀI TẬP GIỎ HÀNG REDUX </h3>
        <ModalGioHang />
        <DanhSachSanPham />
      </div>
    )
  }
}


const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps)(BTGioHang)