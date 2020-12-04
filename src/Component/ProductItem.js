import React, { Component } from 'react';
import {connect} from "react-redux";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
class ProductItem extends Component {


    render() {
        let {sanPham} = this.props;
        return (
                <div className="card h-100 text-center">
                    <img style={{height:"230px",width:"230px", margin: "0 auto"}} src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                    <div className="card-body lead text-left">
                        <h4 className="card-title text-center">{sanPham.tenSP}</h4>
                        <p style={{fontSize:"16px"}}>{sanPham.desc}</p>
                        <p> <span className="font-weight-bold">Price: </span> {sanPham.gia.toLocaleString()}</p>
                        
                    </div>
                    <div className="card-footer">
                        {/* <button onClick={() => {
                            this.props.xemChiTiet(sanPham)
                        }} className="btn btn-primary">Xem chi tiết</button> */}
                         <NavLink exact to="/chiTietSanPham" className="btn btn-primary">Xem chi tiết</NavLink>
                        <button className="btn btn-success ml-2" onClick={() => {
                            this.props.themGioHang(sanPham)
                        }} >Thêm vào giỏ hàng</button>
                    </div>
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPham) => {
            dispatch( {
                type: "THEM_GIO_HANG",
                sanPham: sanPham
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(ProductItem)