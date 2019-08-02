import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';




class ListingCategory3 extends Component {
    render() {
        return (
            <>
                This will hold category 3 questions
                
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory3));