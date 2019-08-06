import React, {Component} from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router';


class PurchaseCategory9 extends Component {
    render () {
        return (
            <>
                This will hold Category 9 questions
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({reduxState})
export default connect (mapReduxStateToProps)(withRouter(PurchaseCategory9));