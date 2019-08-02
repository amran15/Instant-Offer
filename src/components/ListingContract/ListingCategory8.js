import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';




class ListingCategory8 extends Component {
    render() {
        return (
            <>
                This will hold category 8 questions
                
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory8));