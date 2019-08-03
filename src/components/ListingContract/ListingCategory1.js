import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextField, InputAdornment } from '@material-ui/core';

class ListingCategory1 extends Component {
    handleClick = () => {
        this.props.history.push('/ListingContract')
    }
    render() {
        return (
            <Container component="main">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <center>
                            <h2>General Information</h2>
                        </center>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <h4>What is the property address?</h4>
                    <TextField
                        id="property_address"
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <h4>Who is the Seller?</h4>
                    <TextField
                        id="seller_name"
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <h4>Who is the Broker?</h4>
                    <TextField
                        id="broker_name"
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <h4>Contract Start Date</h4>
                    <TextField
                        id="start_date"
                        variant="outlined"
                        type="date"
                    />
                </Grid>
                <Grid item xs={12}>
                    <h4>Contract End Date</h4>
                    <TextField
                        id="end_date"
                        variant="outlined"
                        type="date"
                    />
                </Grid>
                <Grid item xs={12}>
                    <h4>What is the property price?</h4>
                    <TextField
                        id="property_price"
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <h4>Additional Terms</h4>
                    <TextField
                        id="following_terms"
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <br />
                <br />
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div align="left" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleClick}
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
                                    onClick={this.handleClick}
                                >
                                    Save
                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory1));