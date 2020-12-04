import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class DetailProduct extends Component {
    state = {
        sanPhamChiTiet: {
            "maSP": 1, "tenSP": "Daniel Wellington DW00100021", "thuongHieu": "Daniel Wellington", "xuatXu": "Thụy Điển", "may": "Quartz (Pin)", "kinh": "Mineral Crystal (Kính Cứng)", "baoHanh": "2 năm", "duongKinhMatSo": "40 mm", "beDayMatSo": "6 mm", "nieng" : "Thép Không Gỉ", "dayDeo": "Dây da Chính Hãng", "mauMatSo": "Trắng" ,"gia": 5300000, "hinhAnh": "./img/Product/product1.jpg"
        }
    }
    renderSanPham = () => {
        return this.props.mangSP?.map((sanPham, index) => {
            return <div className="col-3" key={index}>
               <ProductItem sp={sanPham}  xemChiTiet={this.xemChiTiet}/>
            </div>
        })
    }

    xemChiTiet = (spClick) =>{
        console.log('spClick',spClick)
        this.setState({
            sanPhamChiTiet:spClick
        })
    }
    render() {
        let { maSP, tenSP, hinhAnh, thuongHieu, xuatXu, may, kinh, baoHanh, duongKinhMatSo, beDayMatSo, nieng, dayDeo, mauMatSo, gia } = this.state.sanPhamChiTiet;
        return (
            <div className="container mt-3 mb-4">
                <h3>Chi Tiết Sản Phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>

                <div className="row">
                    <div className="col-4 mt-3 ">
                        <h3 className="text-center font-weight-bold">{tenSP}</h3>
                        <img style={{height:"300px",width:"300px", margin: "0 auto"}} src={hinhAnh} alt={hinhAnh}/>
                    </div>

                    <div className="col-8 mt-3">
                        <h3 className="font-weight-bold">Thông số kỹ thuật</h3>
                        <table className="table mt-3">
                            <thead>
                                <tr>
                                    <th>Tên Sản Phẩm</th>
                                    <td>{tenSP}</td>
                                </tr>
                                <tr>
                                    <th>Thương Hiệu</th>
                                    <td>{thuongHieu}</td>

                                </tr>
                                <tr>
                                    <th>Xuất Xứ</th>
                                    <td>{xuatXu}</td>
                                </tr>
                                <tr>
                                    <th>Máy</th>
                                    <td>{may}</td>
                                </tr>
                                <tr>
                                    <th>Kính</th>
                                    <td>{kinh}</td>
                                </tr>
                                <tr>
                                    <th>Bảo Hành</th>
                                    <td>{baoHanh}</td>
                                </tr>
                                <tr>
                                    <th>Đường Kính Mặt Số</th>
                                    <td>{duongKinhMatSo}</td>
                                </tr>
                                <tr>
                                    <th>Bề Dày Mặt Số</th>
                                    <td>{beDayMatSo}</td>
                                </tr>
                                <tr>
                                    <th>Niềng</th>
                                    <td>{nieng}</td>
                                </tr>
                                <tr>
                                    <th>Dây Đeo</th>
                                    <td>{dayDeo}</td>
                                </tr>
                                <tr>
                                    <th>Màu Mặt Số</th>
                                    <td>{mauMatSo}</td>
                                </tr>
                                <tr>
                                    <th>Giá</th>
                                    <td>{gia}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}