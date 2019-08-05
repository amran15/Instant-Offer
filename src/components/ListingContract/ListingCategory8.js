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
    state = {
        agencyRep: {
            sellerAgree: '',
            sellerDoesNotAgree: '',
            companyName: '',
            consent: '',
        }
    }

    

    //this will handle the yes checkbox for seller will not agree
    handleClickCheckbox = (propertyName) => (event) => {
        this.setState({
            agencyRep: {
                ...this.state.agencyRep, [propertyName]: true,
            }
        })
    }

    //this will handle the No checkbox for seller will agree
    handleClickCheckNo = (propertyName) => (event) => {
            this.setState ({
                agencyRep: {
                    ...this.state.agencyRep, [propertyName]: false,
                }
            })
        }

        

    handleChangeForInputs = (propertyName) => (event) => {
        this.setState({
            agencyRep: {
                ...this.state.agencyRep, [propertyName]: event.target.value
            }
        })
    }


    handleClickBack = () => {
        this.props.history.push('/ListingContract')
    }

    handleSaveButton = () => {
        this.props.dispatch({ type: 'POST_AGENCY_REPRESENTATION', payload: this.state.agencyRep })
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
                                        id="checkedB"
                                        value={this.state.agencyRep.sellerAgree}
                                        color="primary"
                                        onClick={this.handleClickCheckbox('sellerAgree')} />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id="checkedB"
                                        onClick={this.handleClickCheckNo('sellerAgree')}
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
                                        color="primary"
                                        onClick={this.handleClickCheckbox('sellerDoesNotAgree')} />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                        onClick={this.handleClickCheckNo('sellerDoesNotAgree')} />
                                }
                                label="No"
                            />
                        </Grid>
                        <p>Real Estate Company Name:</p>
                        <TextField
                            id="name_real_estate"
                            fullWidth
                            variant="outlined"
                            onChange={this.handleChangeForInputs('companyName')}
                        />
                        <Grid item xs={12}>
                            <h4>Electronic Signatures:</h4> <p>The parties agree the electronic signature of any party on any document related to this transaction constitute valid, binding signatures.</p>

                            <h4>Consent for communication:</h4> <p>Seller authorizes Broker and its representatives to contract Seller by mail, phone, fax, email or other means of communication during the term of this Contract and anytime thereafter.</p>
                            <h4>Other:</h4>
                            <TextField
                                id="other_communication_options"
                                fullWidth
                                variant="outlined"
                                onChange={this.handleChangeForInputs('consent')}
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                </Container>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div align="left" className="Button">
                                <Button
                                    onClick={this.handleClickBack}
                                    variant="contained"
                                    color="primary"
                                    onChange={this.handleChangeForInputs}
                                >
                                    Back
                        </Button>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div align="right" className="Button">
                                <Button
                                    onClick={this.handleSaveButton}
                                    variant="contained"
                                    color="primary"
                                // onClick={this.handleSave}
                                >
                                    Save
                        </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory8));