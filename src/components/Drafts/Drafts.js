import React, { Component } from "react";
// import { connect } from 'react-redux';
import ListingDraftsIndividualDocs from "../ListingDraftsIndividualDocs/ListingDraftsIndividualDocs";
import PurchaseAgreementDraftsIndividualDocs from "../PurchaseAgreementDraftsIndividualDocs/PurchaseAgreementDraftsIndividualDocs";

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

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


class Drafts extends Component {
    state = {
        listing: true,
        title: 'Listing Contract Drafts',
    }

    handleClickListing = () => {
        this.setState({
            listing: true,
            title: 'Listing Contract Drafts'
        });
    }

    handleClickPurchase = () => {
        this.setState({
            listing: false,
            title: 'Purchase Agreement Drafts'
        });
    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="lg">
                        <br />
                        <center>
                            <h2>{this.state.title}</h2>
                        </center>
                        <br />
                        <center>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleClickListing}
                                    >
                                        Listing
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        style={styles.button}
                                        onClick={this.handleClickPurchase}
                                    >Purchase
                                    </Button>
                                </Grid>
                            </Grid>
                        </center>
                        <br />
                        <br />
                        {this.state.listing === true ?
                            <ListingDraftsIndividualDocs />
                            :
                            <PurchaseAgreementDraftsIndividualDocs />
                        }
                    </Container>
                </ThemeProvider>
            </div>
        )
    }
}

export default Drafts;