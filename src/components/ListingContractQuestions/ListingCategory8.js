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
        id: this.props.reduxState.activeUserReducer.id,
        answers: {
            L196: null,
            L198: null,
            COMPANY: null,
            L237: null,
            BUYER_1_ADDRESS: null,
            BUYER_1_PHONE: null,
            BUYER_1_EMAIL: null,
        }
    }

    handleClickForCheckbox = (propertyName, event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: event,
            }
        })
    }

    handleChangeForInputs = (propertyName) => (event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: event.target.value
            }
        })
    }

    handleClickBack = () => {
        this.props.history.push('/ListingCategory7')
    }

    handleSaveButton = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS', payload: this.state })
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
                            <h4>Seller will agree to dual agency and will consider offers made by buyers represented by broker?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.state.answers.L196 === true}
                                    value="checkedB"
                                    color="primary"
                                    onClick={() => { this.handleClickForCheckbox('L196', true) }}
                                />
                            }
                            label="Yes"
                        />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.state.answers.L196 === false}
                                    value="checkedB"
                                    color="primary"
                                    onClick={() => { this.handleClickForCheckbox('L196', false) }}
                                />
                            }
                            label="No"
                        />
                            <h4>Seller will not agree to dual agency and not consider offers made by buyers represented by broker?</h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={this.state.answers.L198 === true}
                                        value="checkedB"
                                        color="primary"
                                        onClick={() => { this.handleClickForCheckbox('L198', true) }}
                                    />
                                }
                                label="Yes"
                            />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={this.state.answers.L198 === false}
                                        value="checkedB"
                                        color="primary"
                                        onClick={() => { this.handleClickForCheckbox('L198', false) }}
                                    />
                                }
                                label="No"
                                />
                            </Grid>
                            <h4>Real Estate Company Name:</h4>
                            <TextField
                                id="name_real_estate"
                                fullWidth
                                variant="outlined"
                                onChange={this.handleChangeForInputs('COMPANY')}
                            />
                            <Grid item xs={12}>
                                <h4>Electronic Signatures:</h4> <p>The parties agree the electronic signature of any party on any document related to this transaction constitute valid, binding signatures.</p>

                                <h4>Consent for communication:</h4> <p>Seller authorizes Broker and its representatives to contract Seller by mail, phone, fax, email or other means of communication during the term of this Contract and anytime thereafter.</p>
                                <h4>Other:</h4>
                                <TextField
                                    id="other_communication_options"
                                    fullWidth
                                    variant="outlined"
                                    onChange={this.handleChangeForInputs('L237')}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h2>SELLER'S INFORMATION</h2>
                            </center>
                            <Grid item xs={12}>
                                <h4>Seller's Address <i>(street address, city, state, zip code)</i></h4>
                                <TextField
                                    id="sellers_address"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.answers.BUYER_1_ADDRESS}
                                    onChange={this.handleChangeForInputs('BUYER_1_ADDRESS')}
                                />
                                <h4>Seller's Phone</h4>
                                <TextField
                                    id="sellers_phone"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.answers.BUYER_1_PHONE}
                                    onChange={this.handleChangeForInputs('BUYER_1_PHONE')}
                                />
                                <h4>Seller's Email</h4>
                                <TextField
                                    id="sellers_Email"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.answers.BUYER_1_EMAIL}
                                    onChange={this.handleChangeForInputs('BUYER_1_EMAIL')}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <br />
                <br />
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div align="left" className="Button">
                                <Button
                                    onClick={this.handleClickBack}
                                    variant="contained"
                                    color="primary"
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
            </div >
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory8));