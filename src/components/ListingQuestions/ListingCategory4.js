import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class ListingCategory4 extends Component {
    render() {
        return (
            <>
                This will hold category4 questions
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory4));