import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';

class PurchaseCategory1 extends Component {
    
    componentDidMount() {
    const answer_id = this.props.match.params.id
    console.log(answer_id)
    this.props.dispatch(
        { type: 'PURCHASE_ANSWERS', payload: answer_id }
    )
}

    state = {
        id: this.props.match.params.id,
        answers: {
            DATE: (typeof this.props.purchaseAnswers.DATE === 'undefined') ? null : this.props.purchaseAnswers.DATE,
            L3: (typeof this.props.purchaseAnswers.L3 === 'undefined') ? null : this.props.purchaseAnswers.L3,
            L6A: (typeof this.props.purchaseAnswers.L6A === 'undefined') ? null : this.props.purchaseAnswers.L6A,
            L6B: (typeof this.props.purchaseAnswers.L6B === 'undefined') ? null : this.props.purchaseAnswers.L6B,
            L7A: (typeof this.props.purchaseAnswers.L7A === 'undefined') ? null : this.props.purchaseAnswers.L7A,
            L7B: (typeof this.props.purchaseAnswers.L7B === 'undefined') ? null : this.props.purchaseAnswers.L7B,
            L12: (typeof this.props.purchaseAnswers.L12 === 'undefined') ? null : this.props.purchaseAnswers.L12,
            L13A: (typeof this.props.purchaseAnswers.L13A === 'undefined') ? null : this.props.purchaseAnswers.L13A,
            L13B: (typeof this.props.purchaseAnswers.L13B === 'undefined') ? null : this.props.purchaseAnswers.L13B,
            L14: (typeof this.props.purchaseAnswers.L14 === 'undefined') ? null : this.props.purchaseAnswers.L14,
            L29: (typeof this.props.purchaseAnswers.L29 === 'undefined') ? null : this.props.purchaseAnswers.L29,
            L32: (typeof this.props.purchaseAnswers.L32 === 'undefined') ? null : this.props.purchaseAnswers.L32,
        }
    }



    handleChangeForGeneralInformation = (propertyName) => (event) => {
        this.setState({
            generalInformation:{
                ...this.state.generalInformation, [propertyName]:event.target.value,
            }
        })
    }



    handleClick = () => {
        this.props.history.push('/PurchaseAgreement')
    }

    handleClickNext = () => {
        this.props.history.push('/PurchaseCategory2')
    }

    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>General Information</h2>
                            </center>
                            <h4>Date</h4>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                                value={this.props.purchaseAnswers.DATE}
                                onChange={this.handleChangeForGeneralInformation('DATE')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Buyer's Name</h4>
                            <TextField
                                id="buyers_name"
                                fullWidth
                                variant="outlined"
                                value={this.props.purchaseAnswers.L3}
                                onChange={this.handleChangeForGeneralInformation('L3')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Buyer's earnest money in the amount of</h4>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                value={this.props.purchaseAnswers.L6A}
                                onChange={this.handleChangeForGeneralInformation('L6A')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.props.purchaseAnswers.L6B}
                                onChange={this.handleChangeForGeneralInformation('L6B')}
                            />
                            <h4>shall be delivered to listing broker, or if checked, to</h4>
                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                        value={this.props.purchaseAnswers.L7A}
                                        onChange={this.handleChangeForGeneralInformation('L7A')}
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    <TextField
                                        id="brokers_name"
                                        fullWidth
                                        variant="outlined"
                                        value={this.props.purchaseAnswers.L7B}
                                        onChange={this.handleChangeForGeneralInformation('L7B')}
                                    />
                                </Grid>
                            </Grid>
                            <h4>no later than two (2) Business Days after Final Acceptance Date of this Purchase Agreement.</h4>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Property Address</h4>
                            <TextField
                                id="street_address"
                                label="Street Address"
                                fullWidth
                                variant="outlined"
                                value={this.props.purchaseAnswers.L12}
                                onChange={this.handleChangeForGeneralInformation('L12')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="City"
                                id="city"
                                fullWidth
                                variant="outlined"
                                value={this.props.purchaseAnswers.L13A}
                                onChange={this.handleChangeForGeneralInformation('L13A')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="County"
                                id="county"
                                fullWidth
                                variant="outlined"
                                value={this.props.purchaseAnswers.L13B}
                                onChange={this.handleChangeForGeneralInformation('L13B')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Legal description of property</h4>
                            <TextField
                                id="legal_description"
                                fullWidth
                                variant="outlined"
                                value={this.props.purchaseAnswers.L14}
                                onChange={this.handleChangeForGeneralInformation('L14')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Built-Ins and the following personal property shall be transferred with no additional monetary value, and free and clear of all liens and encumbrances:</h4>
                            <TextField
                                id="built_ins"
                                fullWidth
                                variant="outlined"
                                value={this.props.purchaseAnswers.L29}
                                onChange={this.handleChangeForGeneralInformation('L29')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>The following item(s) are excluded from the purchase:</h4>
                            <TextField
                                id="excluded_items"
                                fullWidth
                                variant="outlined"
                                value={this.props.purchaseAnswers.L32}
                                onChange={this.handleChangeForGeneralInformation('L32')}
                            />
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
                                    onClick={this.handleClickNext}
                                >
                                    Next
                </Button>

                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </div >
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory1));