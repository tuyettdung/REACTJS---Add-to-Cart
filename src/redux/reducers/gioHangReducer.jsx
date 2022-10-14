const stateGioHang = {
    gioHang: [
        {
        maSP:45,
        tenSP:'Iphone ',
        hinhAnh:'./img/applephone.jpg',
        soLuong:1,
        giaBan: 5000,
        thanhTien: 5000
    }
]
}

export const gioHangReducer = (state = stateGioHang, action) => {
    switch(action.type){
        case 'THEM_GIO_HANG':{
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            if (index !== -1){
                gioHangCapNhat[index].soLuong += 1;

            }else {
                gioHangCapNhat.push(action.spGioHang);
            }
            state.gioHang = gioHangCapNhat
            return {...state}
        }
    }
  return {...state}
}
