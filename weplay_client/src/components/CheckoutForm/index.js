import React, { Component } from 'react'
import {
    CardElement, injectStripe,
    CardNumberElement, CardExpiryElement, CardCVCElement,
    PostalCodeElement, PaymentRequestButtonElement,
    Elements
} from 'react-stripe-elements'

class CheckoutForm extends Component {

    onPaymentSubmitClcik(ev) {
        console.log("payment submission started!");
    }

    render() {

        const {
            price,
            paymentRequest
        } = this.props;

        return (
            <form action="/charge" method="POST">
                {/* <CardNumberElement />
                <CardExpiryElement />
                <CardCVCElement /> */}
                <label className={`text-indigo-600`}>Debit or Credit card</label>
                <div className={`py-4 px-2 mt-2 border-solid border rounded-sm border-indigo-600 shadow-inner shadow-lg`}>
                    <CardElement />
                </div>
                <hr />
                {
                    !paymentRequest.canMakePayment() ?
                        <PaymentRequestButtonElement paymentRequest={paymentRequest} /> : <div />
                }
                <br />
                <button className={`btn btn-indigo  px-4`} type="submit" onClick={this.onPaymentSubmitClcik}>
                    <span className={`mx-6`}>Pay ${price}</span>
                </button>

            </form>
        )
    }
}

export default injectStripe(CheckoutForm);
