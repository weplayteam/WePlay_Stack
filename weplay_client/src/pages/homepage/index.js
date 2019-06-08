import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HomePage extends Component {
    static propTypes = {
        user: PropTypes.object
    }

    render() {

        const { user } = this.props;
 
        return (
            <div>
                <p>User: {user.name}</p>
            </div>
        )
    }
}
