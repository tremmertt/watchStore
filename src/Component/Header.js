import React, { Component } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "../Carousel.css";
import { connect } from "react-redux";

import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import ShoppingCart from './ShoppingCart';
class Header extends Component {
    tinhTongSoLuong = () => {
        return this.props.gioHang?.reduce((soLuong, sp, index) => {
            return soLuong += sp.soLuong
        },0)
    }
    render() {
        return (
            <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container">
                            <NavLink exact className="navbar-brand" to="/home">Watch Store</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" 
                            aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto m-3">
                                    <li className="nav-item active">
                                        <NavLink exact className="nav-link" to="/home" activeClassName="activeMenuItem" activeStyle={{fontWeight:'bold'}}>Home  </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about" activeClassName="activeMenuItem" activeStyle={{fontWeight:'bold'}}>About </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact" activeClassName="activeMenuItem" activeStyle={{fontWeight:'bold'}}>Contact</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login" activeClassName="activeMenuItem" activeStyle={{fontWeight:'bold'}}>Login</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form> 
                            <ShoppingCartIcon 
                            className="icon-cart" 
                            focusable={true} 
                            style={{color:"white",marginLeft:"20px",fontSize:"35", cursor:"pointer"}} 
                            data-toggle="modal" 
                            data-target="#modelId" 
                        />
                            <span>{this.tinhTongSoLuong()}
                            </span>
                        </div>
                    </nav>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {gioHang: state.gioHangReducer.gioHang}
}
export default connect(mapStateToProps, null) (Header)
