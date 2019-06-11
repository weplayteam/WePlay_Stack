import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from "./../../components/CheckoutForm";

export default class P2PPage extends Component {

    render() {
        return (
            <div>
                <p className={`text-4xl`}>Purchase of 25$: </p>
                <p className={``}>Credit or Debit card</p>
                <StripeProvider apiKey={`pk_test_bEa1MzXESTbRKCAgrpCjmHH000IrRQU0TB`} className={`pt-16`}>
                    <Elements>
                        <CheckoutForm price="25"/>
                    </Elements>
                </StripeProvider>
            </div>
        )
    }
}
