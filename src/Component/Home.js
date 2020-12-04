import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-3"> <SideBar /> </div>
                    <div className="col-sm-7">
                        <Content />
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        )
    }
}
