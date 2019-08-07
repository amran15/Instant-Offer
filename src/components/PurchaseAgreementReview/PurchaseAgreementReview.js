import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


//material UI
//Material UI       
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class ListingReview extends Component {
    handleClickBack = () => {
        this.props.history.push('/PurchaseAgreement')
    }

    handleClickSign = () => {
        this.props.history.push('/Signature')
    }

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
                    <Container component="main">
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <div align="left" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClickBack}
                                >
                                    Back
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div align="right" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClickSign}
                                >
                                    Sign
                                </Button>
                            </div>
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