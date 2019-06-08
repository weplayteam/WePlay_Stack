import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LoginPage extends Component {

    render() {
        return (
            <div className={`my-24`}>
                <div className={`flex flex-row justify-center`}>
                    <form className={`p-12 bg-white rounded shadow-lg rounded`}>
                        <label className={`my-6`}>{"Username or e-mail"}</label>
                        <br />
                        <input className={`w-64 my-6 bg-gray-100 p-4`} placeholder={`username/email`} type="text"></input>
                        <br />
                        <label className={`my-6`}>{"Password"}</label>
                        <br />
                        <input className={`w-64 my-6 bg-gray-100 p-4`} placeholder={`password`} type="text"></input>
                        <br />
                        <button type="submit" className={`btn btn-blue w-full`}>login</button>
                    </form>
                </div>
            </div>
        )
    }
}
