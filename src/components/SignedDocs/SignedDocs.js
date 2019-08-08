import React, { Component } from "react";
import ListingContractSignedIndividualDocs from '../ListingContractSignedIndividualDocs/ListingContractSignedIndividualDocs';
import PurchaseAgreementSignedIndividualDocs from '../PurchaseAgreementSignedIndividualDocs/PurchaseAgreementSignedIndividualDocs';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#173F5F' },
        secondary: { main: '#3CAEA3' },
    },
});

const styles = {
    button: {
        color: 'white',
    },
};

class SignedDocuments extends Component {
    state = {
        listing: true,
    }

    handleClickListing = () => {
        this.setState({
            listing: true,
        });
        this.props.dispatch({type:'FETCH_LISTING', payload:this.props.reduxState.activeUserReducer.id})
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
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="lg">
                        <br/>
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
                                style={styles.button}
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
                </ThemeProvider>
            </div>
        )
    }
}
export default SignedDocuments;