import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class ListingCategory6 extends Component {
    render() {
        return (
            <>
                This will hold ListingCategory6 questions
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory6));