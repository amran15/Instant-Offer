import React, { Component } from "react";
import {connect} from 'react-redux';
import './ListingContractButton.css'
import {withRouter} from 'react-router';
import Button from '@material-ui/core/Button';



class ListingContractButton extends Component {
    
    //this will push us to the ListingContract page
    handleClickForListingDocuments = () => {
        this.props.history.push('/ListingContract')
        console.log('our listing documents go here in  a drop down')
    }
    
    
    render() {
        return (
            <div className="ListingDiv">
                <p>
                    <Button variant="contained" color="primary" onClick={this.handleClickForListingDocuments} id="listingDocButton">Listing Contract</Button>
                </p>
            </div>
        )
    }
}

// bringing redux store so we can have access to it
const mapReduxStateToProps = reduxState => ({reduxState})
export default connect (mapReduxStateToProps)(withRouter(ListingContractButton));


