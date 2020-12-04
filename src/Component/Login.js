import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
        <form className="container">
            <h3 className="display-4 text-center"> Login</h3>
            <div className="formgroup">
                <p className="text-left"> UserName</p>
                <input name="userName" className="form-control"/>
            </div>
            <div className="formgroup">
                <p className="text-left"> PassWord</p>
                <input name="passWord" className="form-control" />
            </div>
            <div className="formgroup">
                <button className="btn btn-success mt-3" type="submit"> Login </button>
            </div>
        </form>
        )
    }
}
