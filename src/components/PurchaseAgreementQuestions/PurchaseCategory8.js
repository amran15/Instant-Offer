import React, {Component} from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router';


class PurchaseCategory8 extends Component {
    render () {
        return (
            <>
                This will hold Category 8 questions
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({reduxState})
export default connect (mapReduxStateToProps)(withRouter(PurchaseCategory8));