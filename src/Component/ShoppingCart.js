import React, { Component } from 'react';
import {connect} from "react-redux"

 class ShoppingCart extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((spGH, index) => {
            return <tr className="col-12" key={index}>
                <td>{spGH.maSP}</td>
                <td>
                    <img src={spGH.hinhAnh} style={{ width: 50, height: 50 }} />
                </td>
                <td className="ml-4">{spGH.tenSP}</td>
                <td className="ml-4">{spGH.gia.toLocaleString()}</td>
                <td className="ml-4">
                    <button className="ml-2" onClick={()=>{
                        this.props.tangGiamSoLuong(spGH.maSP,true)
                    }}>+</button>
                    {spGH.soLuong}
                    <button onClick={()=>{
                        this.props.tangGiamSoLuong(spGH.maSP,false)
                    }}>-</button>
                </td>
                <td>{(spGH.gia * spGH.soLuong).toLocaleString()}</td>
                <td>
                    <button className="btn btn-danger"  onClick={()=>{
                        this.props.xoaGioHang(spGH.maSP)
                    }}>Xóa</button>
                </td>
            </tr>

        })
    }
    render() {
        return (
            <div>
                <div>
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Giỏ hàng</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Mã sản phẩm</th>
                                                <th>Hình ảnh</th>
                                                <th>Tên sản phẩm</th>
                                                <th>Đơn giá</th>
                                                <th>Số lượng</th>
                                                <th>Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderGioHang()}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td>
                                                    Tổng tiền
                                                </td>
                                                <td>
                                                    {
                                                        this.props.gioHang.reduce((tongTien,spGH,index)=>{
                                                            return tongTien += spGH.gia * spGH.soLuong
                                                        },0).toLocaleString()
                                                    }
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="modal-footer">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {gioHang: state.gioHangReducer.gioHang}
};
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            dispatch({
                type: "XOA_GIO_HANG",
            
                maSP: maSP
            })
        },
        tangGiamSoLuong: (maSP, status) => {
            dispatch({
                type: "TANG_GIAM_SO_LUONG",
                status: status,
                maSP: maSP
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ShoppingCart)