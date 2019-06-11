import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

class CheckoutForm extends Component {
    render() {

        const {
            price
        }  = this.props;

        return (
            <div>
                <CardElement></CardElement>
                <button className={`btn btn-blue  px-4`} type="submit" onClick={async (ev) => {
                    console.log("submitted the request! ")
                    console.log(ev)

                    let { token } = await this.props.stripe.createToken({ name: "Name" });
                    let response = await fetch("/charge", {
                        method: "POST",
                        headers: { "Content-Type": "text/plain" },
                        body: token.id
                    });

                    if (response.ok) console.log("Purchase Complete!")
                }}>
                    <span  className={`mx-6`}>Pay ${price}</span>
                </button>
            </div>
        )
    }
}

export default injectStripe(CheckoutForm);
