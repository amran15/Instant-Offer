import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class PurchaseCategory6 extends Component {
    render() {
        return (
            <>
                This will hold Category 6 questions
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory6));