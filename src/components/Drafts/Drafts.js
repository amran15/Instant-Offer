import React, { Component } from "react";
// import { connect } from 'react-redux';
import ListingDraftsIndividualDocs from "../ListingDraftsIndividualDocs/ListingDraftsIndividualDocs";
import PurchaseAgreementDraftsIndividualDocs from "../PurchaseAgreementDraftsIndividualDocs/PurchaseAgreementDraftsIndividualDocs";

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

class Drafts extends Component {
    state = {
        listing: true,
    }

    handleClickListing = () => {
        console.log('in handleclick Listing');
        this.setState({
            listing: true,
          });
          console.log(this.state)
    }

    handleClickPurchase = () => {
        console.log('in handleclick Purchase');
        this.setState({
            listing: false,
          });
          console.log(this.state)
    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <Container component="main" maxWidth="lg">
                    <br />
                    <center>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.handleClickListing}
                        >
                            Listing Contract
                            </Button>
                        
                        <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.handleClickPurchase}
                        >Purchase Agreement
                        </Button>
                    </center>
                    <br />
                    <br />
                    {this.state.listing === true ? 
                    <ListingDraftsIndividualDocs />
                    :
                    <PurchaseAgreementDraftsIndividualDocs />
                    }
                </Container>
            </div>
        )
    }
}
export default Drafts;