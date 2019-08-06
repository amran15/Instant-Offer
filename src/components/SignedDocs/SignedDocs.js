import React, { Component } from "react";
import ListingContractSignedIndividualDocs from '../ListingContractSignedIndividualDocs/ListingContractSignedIndividualDocs';
import PurchaseAgreementSignedIndividualDocs from '../PurchaseAgreementSignedIndividualDocs/PurchaseAgreementSignedIndividualDocs';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

class SignedDocuments extends Component {
    state = {
        listing: true,
    }

    handleClickListing = () => {
        this.setState({
            listing: true,
        });
    }

    handleClickPurchase = () => {
        this.setState({
            listing: false,
        });
    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <Container component="main" maxWidth="lg">
                    <center>
                        <h2>Signed Documents</h2>
                    </center>
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
                        <ListingContractSignedIndividualDocs />
                        :
                        <PurchaseAgreementSignedIndividualDocs />
                    }
                </Container>
            </div>
        )
    }
}
export default SignedDocuments;