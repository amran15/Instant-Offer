import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI 
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import { TextField } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';



class ListingCategory8 extends Component {
    handleClick = () =>{ 
        this.props.history.push('/ListingContract')
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Agency Representation</h2>
                            </center>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                    <h4>Seller will agree to dual agency and will consider offers made by buyers represented by broker?</h4>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="No"
                            />
                        </Grid>
                        <h4>Seller will not agree to dual agency and not consider offers made by buyers represented by broker?</h4>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="Yes"
                            />
                               <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="No"
                            />
                        </Grid>
                        <p>Real Estate Company Name:</p>
                        <TextField
                            id="name_real_estate"
                            fullWidth
                            variant="outlined"
                        />
                        <Grid item xs={12}>
                    <h4>Electronic Signatures:</h4> <p>The parties agree the electronic signature of any party on any document related to this transaction constitute valid, binding signatures.</p>

                    <h4>Consent for communication:</h4> <p>Seller authorizes Broker and its representatives to contract Seller by mail, phone, fax, email or other means of communication during the term of this Contract and anytime thereafter.</p>
                    <h4>Other:</h4>
                    <TextField
                            id="other_communication_options"
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    </Grid>
                    <br/>
                    <br/>
                </Container>
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
                                    onClick={this.handleSave}
                                >
                                    Save
                        </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory8));