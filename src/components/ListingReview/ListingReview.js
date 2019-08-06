import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


//material UI
import Grid from '@material-ui/core/Grid';
// import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
// import { TextField } from '@material-ui/core';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Button from '@material-ui/core/Button';


class ListingReview extends Component {
    render() {
        return (
            <>
                <div>
                    <Container component="main">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <center>
                                    <h2>Listing Review</h2>
                                </center>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingReview));