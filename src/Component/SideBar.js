import React, { Component } from 'react';
import {connect} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useParams
  } from "react-router-dom";

 class SideBar extends Component {
    render() {
        return (
            <div>
               <h1 className="text-uppercase my-1"> Category </h1> 
               <div> 
                    <ul className="list-side-bar text-justify mt-3 mb-3 lead">
                        <NavLink style={{cursor:"pointer"}} to="/nu" className="d-flex"> Đồng hồ nữ </NavLink>
                        <NavLink style={{cursor:"pointer"}} to="/nam" className="d-flex"> Đồng hồ nam </NavLink>
                        <NavLink style={{cursor:"pointer"}} to="/couple" className="d-flex"> Đồng hồ couple </NavLink>
                        <NavLink style={{cursor:"pointer"}} to="/phuKien" className="d-flex"> Phụ kiện </NavLink>
                    </ul>
                </div>
            </div>
        )
    }
}
export default connect()(SideBar)
