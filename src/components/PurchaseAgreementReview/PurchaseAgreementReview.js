import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


//material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';



class PurchaseAgreementReview extends Component {
    render() {
        return (
            <>
                <div>
                    <Container component="main">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <center>
                                    <h2>Purchase Agreement Review</h2>
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
export default connect(mapReduxStateToProps)(withRouter(PurchaseAgreementReview));