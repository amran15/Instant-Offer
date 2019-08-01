import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


class ListingContract extends Component {
    render() {
        return (
           <>
           </>

        )
    }
}


const mapReduxStateToProps = reduxState => ({reduxState});

export default connect(mapReduxStateToProps)(ListingContract);
