import React, { Component } from "react";
// import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

//Material UI
// import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ListingCategory1 from "../PurchaseAgreementQuestions/PurchaseCategory1";

const styles = {
    title: {
        // textAlign: 'center',
        // fontSize: '20px',
        margin: '25px 0px 25px 40px',
        // marginTop: '40px',
    },
};

class ListingContract extends Component {
    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <Container component="main" maxWidth="lg">
                    <center>
                        <p>Please answer the following questions pertaining to the Listing Offer.</p>
                    </center>
                    <Card>
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>General Information</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                                <ListingCategory1 />
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card>
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>MLS Data Feed Options</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card>
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>Listed for Lease</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card>
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>Broker's Compensation</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card>
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>Compensation Disclosure</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card>
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>Closing Service</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card>
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>Foreign Investment in Real Property Tax Act (FIRPTA)</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                    <br />
                    <Card>
                        <Grid item xs={12} container spacing={3}>
                            <Grid item xs={10}>
                                <div style={styles.title}>
                                    <h5>Agency Representation</h5>
                                </div>
                            </Grid>
                            <Grid
                                item xs={2}
                                className="arrow"
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <i className="material-icons">arrow_forward_ios</i>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>
            </div>
        )
    }
}


const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingContract));
