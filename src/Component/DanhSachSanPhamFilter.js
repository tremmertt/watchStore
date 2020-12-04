
import React,{useEffect,useState} from 'react';
import ProductItem from './ProductItem';
import {useSelector,useDispatch} from "react-redux"


export default function DanhSachSanPhamFilter(props) {
    const mangSanPham = useSelector(state => state.gioHangReducer.danhSachSanPhamFilter);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: "LOC_DANH_SACH",
            loaiSanPham: props.type
        })
    }, [props.type])
   const renderSanPham = () => {
                return mangSanPham?.map((sanPham,index) =>{
                    return <div key={index} className="col-4">
                        <ProductItem sanPham={sanPham}/>
                    </div>
                })
            }
    return (
        <div className='row'>
             {renderSanPham()}
        </div>
    )
}
