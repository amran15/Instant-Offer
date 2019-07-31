import React, { Component } from "react";
import {connect} from 'react-redux';
import '../ListingButton/ListingButton.css';
import {withRouter} from 'react-router';



class ListingButton extends Component {
    
    //this will push us to the ListingContract page
    handleClickForListingDocuments = () => {
        this.props.history.push('/ListingContract')
        console.log('our listing documents go here in  a drop down')
    }
    
    
    render() {
        return (
            <div className="ListingDiv">
                <p>
                    <button onClick={this.handleClickForListingDocuments} id="listingDocButton">Listing</button>
                </p>
            </div>
        )
    }
}

// bringing redux store so we can have access to it
const mapReduxStateToProps = reduxState => ({reduxState})
export default connect (mapReduxStateToProps)(withRouter(ListingButton));


