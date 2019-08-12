import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import { Button, RadioGroup, Radio, } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';


class PurchaseCategory4 extends Component {
    state = {
        id: this.props.match.params.id,
        answers: {
            L49: (typeof this.props.listingAnswers.L49 === 'undefined') ? null : this.props.listingAnswers.L49,
            L53A: (typeof this.props.listingAnswers.L53A === 'undefined') ? null : this.props.listingAnswers.L53A,
            L53B: (typeof this.props.listingAnswers.L53B === 'undefined') ? null : this.props.listingAnswers.L53B,
            L145B: (typeof this.props.listingAnswers.L54 === 'undefined') ? null : this.props.listingAnswers.L54,
            L55: (typeof this.props.listingAnswers.L55 === 'undefined') ? null : this.props.listingAnswers.L55,
            L57: (typeof this.props.listingAnswers.L57 === 'undefined') ? null : this.props.listingAnswers.L57,
            L58: (typeof this.props.listingAnswers.L58 === 'undefined') ? null : this.props.listingAnswers.L58,
            L59: (typeof this.props.listingAnswers.L59 === 'undefined') ? null : this.props.listingAnswers.L59,
            L60: (typeof this.props.listingAnswers.L60 === 'undefined') ? null : this.props.listingAnswers.L60,
            L61: (typeof this.props.listingAnswers.L61 === 'undefined') ? null : this.props.listingAnswers.L61,
            L62A: (typeof this.props.listingAnswers.L62A === 'undefined') ? null : this.props.listingAnswers.L62A,
            L62B: (typeof this.props.listingAnswers.L62B === 'undefined') ? null : this.props.listingAnswers.L62B,
            L63: (typeof this.props.listingAnswers.L63 === 'undefined') ? null : this.props.listingAnswers.L63,
            L64: (typeof this.props.listingAnswers.L64 === 'undefined') ? null : this.props.listingAnswers.L64,
            L70: (typeof this.props.listingAnswers.L70 === 'undefined') ? null : this.props.listingAnswers.L70,
            L73A: (typeof this.props.listingAnswers.L73A === 'undefined') ? null : this.props.listingAnswers.L73A,
            L73B: (typeof this.props.listingAnswers.L73B === 'undefined') ? null : this.props.listingAnswers.L73B,
            L76: (typeof this.props.listingAnswers.L76 === 'undefined') ? null : this.props.listingAnswers.L76,
            L77: (typeof this.props.listingAnswers.L77 === 'undefined') ? null : this.props.listingAnswers.L77,
            L114: (typeof this.props.listingAnswers.L114 === 'undefined') ? null : this.props.listingAnswers.L114,
            L115: (typeof this.props.listingAnswers.L115 === 'undefined') ? null : this.props.listingAnswers.L115,
            L118: (typeof this.props.listingAnswers.L118 === 'undefined') ? null : this.props.listingAnswers.L118,
            L127A: (typeof this.props.listingAnswers.L127A === 'undefined') ? null : this.props.listingAnswers.L127A,
            L127B: (typeof this.props.listingAnswers.L127B === 'undefined') ? null : this.props.listingAnswers.L127B,
            L133: (typeof this.props.listingAnswers.L133 === 'undefined') ? null : this.props.listingAnswers.L133,
            L141: (typeof this.props.listingAnswers.L141 === 'undefined') ? null : this.props.listingAnswers.L141,
            L145A: (typeof this.props.listingAnswers.L145A === 'undefined') ? null : this.props.listingAnswers.L145A,
            L145B: (typeof this.props.listingAnswers.L145B === 'undefined') ? null : this.props.listingAnswers.L145B,
            L145C: (typeof this.props.listingAnswers.L145C === 'undefined') ? null : this.props.listingAnswers.L145C,
            L146: (typeof this.props.listingAnswers.L146 === 'undefined') ? null : this.props.listingAnswers.L146,
            L156: (typeof this.props.listingAnswers.L156 === 'undefined') ? null : this.props.listingAnswers.L156,
        }
    }



    handleChangeForMortgageFinancing = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            answers: {
                ...this.state.answers, [propertyName]: event.target.value,
            }
        })
    }

    handleClick = () => {
        this.props.history.push(`/PurchaseAgreement/${this.state.id}`)
    }

    handleClickNext = () => {
        this.props.history.push(`/PurchaseCategory5/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Mortgage Financing</h2>
                            </center>
                            <h4>Is this Purchase Agreement subject to the mortgage financing provisions below? If yes, complete the mortgage financing section below. If not, proceed to the Seller's Contributions to Buyer's Cost.</h4>
                            <RadioGroup
                                value={this.state.answers.L49}
                                onChange={this.handleChangeForMortgageFinancing('L49')}>
                                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Such mortgage financing shall be: <i>(Check one)</i></h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            label="First Mortgage only"
                                            value={this.state.answers.L53A}
                                            onChange={this.handleChangeForMortgageFinancing('L53A')}
                                        />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            label="First morgtage and subordinate financing"
                                            value={this.state.answers.L53B}
                                            onChange={this.handleChangeForMortgageFinancing('L53B')}
                                        />}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Does financing include a grant, bond program, or other loan assistance program?</h4>
                            <RadioGroup
                                value={this.state.answers.L54}
                                onChange={this.handleChangeForMortgageFinancing('L54')}>
                                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio />} label="No" />
                            </RadioGroup>
                            <Grid item xs={12}>
                                <h4>If yes, please specify:</h4>
                                <TextField
                                    id="morgtage_loan_assistance"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.answers.L55}
                                    onChange={this.handleChangeForMortgageFinancing('L55')}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Buyer shall apply for and secure, at Buyer's expense, a: <i>(Check all that apply)</i></h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            label="Conventional"
                                            value={this.state.answers.L57}
                                            onChange={this.handleChangeForMortgageFinancing('L57')}
                                        />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            label="Department of Veteran's Affairs (DVA) Guaranteed"
                                            value={this.state.answers.L58}
                                            onChange={this.handleChangeForMortgageFinancing('L58')}
                                        />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            label="Federal Housing Administration (FHA) Insured"
                                            value={this.state.answers.L59}
                                            onChange={this.handleChangeForMortgageFinancing('L59')}
                                        />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            label="Privately Insured Conventional"
                                            value={this.state.answers.L60}
                                            onChange={this.handleChangeForMortgageFinancing('L60')}
                                        />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"

                                            label="United States Department of Agricultural (USDA) Rural Development"
                                            value={this.state.answers.L61}
                                            onChange={this.handleChangeForMortgageFinancing('L61')}
                                        />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            label="Other"
                                            value={this.state.answers.L62A}
                                            onChange={this.handleChangeForMortgageFinancing('L62A')}
                                        />}
                                />
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="morgtage_loan_other"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.answers.L62B}
                                    onChange={this.handleChangeForMortgageFinancing('L62B')}
                                />
                            </Grid>
                            <h4>mortgage in the amount stated in this Purchase Agreement, amortized over a period of not more than</h4>
                            <Grid item xs={12}>
                                <TextField
                                    id="amortized_period"
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.answers.L63}
                                    onChange={this.handleChangeForMortgageFinancing('L63')}
                                />
                            </Grid>
                            <h4>years, with an initial interest rate at no more than</h4>
                            <Grid item xs={12}>
                                <TextField
                                    id="interest_rate"
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                    }}
                                    value={this.state.answers.L64}
                                    onChange={this.handleChangeForMortgageFinancing('L64')}
                                />
                            </Grid>
                            <h4>per annum.</h4>
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>Mortgage Financing Contingency</h3>
                            </center>
                        </Grid>
                        <h4>This Purchase Agreement is contingent upon the following and applies to the first mortgage and any subordinate financing. <i>(Check One)</i></h4>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        label="If Buyer cannot secure the financing specified in this Purchase Agreement, and this Purchase Agreement does not close on the closing date specified, this Purchase Agreement is canceled. Buyer and Seller shall immediately sign a Cancellation of Purchase Agreement confirming said cancellation and directing all earnest moeny paid here to be"
                                        value={this.state.answers.L70}
                                        onChange={this.handleChangeForMortgageFinancing('L70')}
                                    />}
                            />
                        </Grid>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="primary"
                                    label="Refunded to Buyer"
                                    value={this.state.answers.L73A}
                                    onChange={this.handleChangeForMortgageFinancing('L73A')}
                                />}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="primary"
                                    label="Forfeited to seller"
                                    value={this.state.answers.L73B}
                                    onChange={this.handleChangeForMortgageFinancing('L73B')}
                                />}
                        />
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        label="Buyer shall provide Seller, or licensee representing or assisting Seller, with the Written Statement, on or before"
                                        value={this.state.answers.L76}
                                        onChange={this.handleChangeForMortgageFinancing('L76')}
                                    />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                                value={this.state.answers.L77}
                                onChange={this.handleChangeForMortgageFinancing('L77')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>Locking of Mortgage Interest Rate</h3>
                            </center>
                        </Grid>
                        <h4>The Rate shall be locked with the lenders(s) by Buyer:<i>(Chck one)</i></h4>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        label="Within five (5) business days of final acceptance date of this purchase agreement"
                                        value={this.state.answers.L114}
                                        onChange={this.handleChangeForMortgageFinancing('L114')}
                                    />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        label="At any time prior to closing or as required by lenders(s)"
                                        value={this.state.answers.L115}
                                        onChange={this.handleChangeForMortgageFinancing('L115')}
                                    />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>Lender Commitment Work Orders</h3>
                            </center>
                        </Grid>
                        <h4>Nothing in this Purchase Agreement shall be construed as a warranty that Seller shall make repairs required by the lender commitment. However, Seller agrees to pay up to the following amount to make repairs as required by the lender commitment.</h4>
                        <Grid item xs={12}>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L118}
                                onChange={this.handleChangeForMortgageFinancing('L118')}
                            />
                        </Grid>
                        <h4>The following party agrees to pay any reinspection fee required by Buyer's lenders(s).</h4>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        label="Seller"
                                        value={this.state.answers.L127A}
                                        onChange={this.handleChangeForMortgageFinancing('L127A')}
                                    />}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="Buyer"
                                value={this.state.answers.L127B}
                                onChange={this.handleChangeForMortgageFinancing('L127B')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>FHA Escape Clause (FHA Financing only)</h3>
                            </center>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Appraised value of the Property</h4>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L133}
                                onChange={this.handleChangeForMortgageFinancing('L133')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>Lender Processing Fees (FHA, DVA Financing Only)</h3>
                            </center>
                        </Grid>
                        <h4>Seller agrees to apy Buyer's closing fees and miscellaneous processing fees which cannot be charged to Buyer, not to exceed the follwing amount.</h4>
                        <Grid item xs={12}>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L141}
                                onChange={this.handleChangeForMortgageFinancing('L141')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>DVA FUNDING FEE (DVA Financing Only)</h3>
                            </center>
                        </Grid>
                        <h4>Pursuant to federal regulations, a one-time Funding Fee must be paid at the closing of this transaction as follows:</h4>
                        <Grid item xs={12}>
                            <h4>Paid by Buyer</h4>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L145A}
                                onChange={this.handleChangeForMortgageFinancing('L145A')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="At closing"
                                value={this.state.answers.L145B}
                                onChange={this.handleChangeForMortgageFinancing('L145B')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="Added to mortgage amount"
                                value={this.state.answers.L145B}
                                onChange={this.handleChangeForMortgageFinancing('L145B')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Paid by the Seller</h4>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L146}
                                onChange={this.handleChangeForMortgageFinancing('L146')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>Other Mortgage Financing Items</h3>
                            </center>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="buyers_earnest_money"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L156}
                                onChange={this.handleChangeForMortgageFinancing('L56')}
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
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => reduxState
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory4));