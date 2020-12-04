import React from 'react';
import {useParams} from "react-router-dom";

import SideBar from './SideBar'
import Carousel from './Carousel'
import ShoppingCart from './ShoppingCart';
import DanhSachSanPhamFilter from './DanhSachSanPhamFilter';

export default function TypeProduct() {
    let { type } = useParams();
    return (
        <div>
          <div className="row">
                    <div className="col-sm-3"> <SideBar /> </div>
                    <div className="col-sm-7">
                        <Carousel />
                        <h3 className="text-center"> Loai {type} </h3>
                        <ShoppingCart />
                        <DanhSachSanPhamFilter type={type}/>
                    </div>
                    <div className="col-2"></div>
                </div>
        </div>
    )
}
