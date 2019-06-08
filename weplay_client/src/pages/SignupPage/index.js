import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SignupPage extends Component {

    render() {

        return (
            <div className={`my-24`}>
                <div className={`flex flex-row justify-center`}>
                    <form className={`p-12 bg-white rounded shadow-lg rounded`}>
                        <label >{"First name: "}</label>
                        <br />                        
                        <input placeholder={`First name`} className={`w-64 my-6 bg-gray-100 p-4`} type="text"></input>
                        <br />
                        <label>{"Last name: "}</label>
                        <br />
                        <input placeholder={`Last name`} className={`w-64 my-6 bg-gray-100 p-4`} type="text"></input>
                        <br />
                        <label>{"Username/e-mail: "}</label>
                        <br />
                        <input placeholder={`usernmae/e-mail`} className={`w-64 my-6 bg-gray-100 p-4`} type="text"></input>
                        <br />
                        <label>{"Password: "}</label>
                        <br />
                        <input placeholder={`password`} className={`w-64 my-6 bg-gray-100 p-4`} type="password"></input>
                        <br />
                        <button type="submit" className={`btn btn-blue w-full`}>Signup</button>
                    </form>
                </div>
            </div>
        )
    }
}
