import React, { Component } from "react";
import { connect } from 'react-redux';
// import {Link} from 'react-router-dom';
import './PurchaseAgreementButton.css'
import {withRouter} from 'react-router';



class Offer extends Component {


    // on the Onclick of this, we will be routed to the Purchase Agreement page
    handleClickForOfferDocuments = () => {
        this.props.history.push('/PurchaseAgreement')
        console.log('our Offer documents go here in  a drop down')
    }


    render() {
        return (
            <div className="OfferDiv">
                
                <button onClick={this.handleClickForOfferDocuments} id="OfferDocButton">Purchase Agreement</button>
                
            </div>
        )
    }
}

//bring in redux store to access to it and use props
const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(Offer));


