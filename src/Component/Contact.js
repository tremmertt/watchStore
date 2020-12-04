import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="container text-justify">
                <h3 className="mt-4"> HÃY LIÊN HỆ VỚI CHÚNG TÔI </h3>
                <p style={{ lineHeight:"2.5", fontSize:"20px" }} className="mt-4">
                    <strong>Store : </strong> Watch Store
                    <br/>
                    <strong> Hotline : </strong> +0933108554
                    <br/>
                    <strong> Website : </strong> greenwich.edu.vn
                    <br/>
                    <strong> Address 1 : </strong> 144 Phạm Phú Thứ, Quận 6, Thành Phố Hồ Chí Minh
                    <br/>
                    <strong> Address 2 : </strong> 205 Nguyễn Xí, Phường 26, Bình Thạnh, Thành Phố Hồ Chí Minh.
                </p>
            </div>
        )
    }
}
