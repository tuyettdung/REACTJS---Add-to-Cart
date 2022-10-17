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
        <td><button onClick={()=>{
          this.props.tangGiamSoLuong(index,false)
        }}>-</button>{spGioHang.soLuong}<button onClick={()=>{
          this.props.tangGiamSoLuong(index,true)
        }}>+</button></td>
        <td>{(spGioHang.soLuong*spGioHang.giaBan).toLocaleString()}</td>
        <td><button className='btn btn-danger' onClick={()=>{
          this.props.xoaGioHangIndex(index)
        }}>Xóa</button></td>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderGioHang()}
          </tbody>
          <tfoot>
            <td colSpan="5"></td>
          </tfoot>
        </table>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
return {
  gioHang: state.gioHangReducer.gioHang
}
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHangIndex: (index) => {
      const action = {
        type: 'XOA_GIO_HANG',
        index
      }
      dispatch(action)
    },
    tangGiamSoLuong: (index,tangGiam) => {
      const action = {
        type: 'TANG_GIAM_SL',
        index,
        tangGiam
      }
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ModalGioHang)