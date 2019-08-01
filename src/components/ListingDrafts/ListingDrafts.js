import React, { Component } from "react";
// import { connect } from 'react-redux';
import ListingDraftsIndividualDocs from "../ListingDraftsIndividualDocs/ListingDraftsIndividualDocs";

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

class ListingDrafts extends Component {
    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <Container component="main" maxWidth="lg">
                    <br />
                    <center>
                        <Button>Listing Contract</Button>
                        <Button>Purchase Agreement</Button>
                    </center>
                    <br />
                    <br />
                    <ListingDraftsIndividualDocs />
                </Container>
            </div>
        )
    }
}
export default ListingDrafts;