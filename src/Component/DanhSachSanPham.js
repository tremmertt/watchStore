import React, { Component } from 'react'
import ProductItem from './ProductItem';
import {connect} from "react-redux"


class DanhSachSanPham extends Component {


    renderSanPham =() =>{
        return this.props.mangSanPham?.map((sanPham,index) =>{
            return <div key={index} className="col-4">
                <ProductItem sanPham={sanPham}/>
            </div>
        })
    }

    render() {
        return (
                <div className="row" >
                    {this.renderSanPham()}
                </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {mangSanPham: state.gioHangReducer.mangSanPham}
}
export default connect(mapStateToProps, null)(DanhSachSanPham)
