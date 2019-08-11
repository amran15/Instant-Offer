import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';

class PurchaseCategory4 extends Component {
    state = {
        morgtageFinancing: {
            financingProvisions: '',
            firstMortgage: '',
            subordinateFinancing: '',
            loanAssistance: '',
            loanAssistanceInput: '',
            conventional: '',
            dvaGuarantee: '',
            FHA: '',
            privatelyInsure: '',
            USDA: '',
            other: '',
            otherInput: '',
            mortgagePeriod: '',
            initialInterestRate: '',
            contingent: '',
            refundedToBuyer: '',
            forfeitedToSeller: '',
            writtenStatement: '',
            date: '',
            lockWithinFive: '',
            lockAnytime: '',
            repairCost: '',
            seller: '',
            buyer: '',
            appraisedPropertyValue: '',
            lenderProcessingFee: '',
            dvaFundingFee: '',
            paidByBuyer: '',
            atClosing: '',
            addedMortgage: '',
            paidBySeller: '',
            otherMortgageItems: '',
        }
    }



    handleChangeForMortgageFinancing = (propertyName) => (event) => {
        this.setState({
            morgtageFinancing: {
                ...this.state.morgtageFinancing, [propertyName]: event.target.value
            }
        })
    }

    handleChangeForCheckbox = (propertyName) => (event) => {
        this.setState({
            morgtageFinancing: {
                ...this.state.morgtageFinancing, [propertyName]: true,
            }
        })
    }

    handleChangeForCheckboxNo = (propertyName) => (event) => {
        this.setState({
            morgtageFinancing: {
                ...this.setState.morgtageFinancing, [propertyName]: false,
            }
        })
    }

    handleClick = () => {
        this.props.history.push('/PurchaseAgreement')
    }

    handleClickNext = () => {
        this.props.history.push('/PurchaseCategory5')
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
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="Yes"
                                value={this.state.financingProvisions}
                                onChange={this.handleChangeForCheckbox('financingProvisions')}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="No"
                                value={this.state.financingProvisions}
                                onChange={this.handleChangeForCheckboxNo('financingProvisions')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Such mortgage financing shall be: <i>(Check one)</i></h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="First Mortgage only"
                                    value={this.state.firstMortgage}
                                    onChange={this.handleChangeForCheckbox('firstMortgage')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="First morgtage and subordinate financing"
                                    value={this.state.subordinateFinancing}
                                    onChange={this.handleChangeForCheckbox('subordinateFinancing')}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Does financing include a grant, bond program, or other loan assistance program?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="Yes"
                                value={this.state.loanAssistance}
                                onChange={this.handleChangeForCheckbox('loanAssistance')}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="No"
                                value={this.state.loanAssistance}
                                onChange={this.handleChangeForCheckboxNo('loanAssistance')}
                            />
                            <Grid item xs={12}>
                                <h4>If yes, please specify:</h4>
                                <TextField
                                    id="morgtage_loan_assistance"
                                    // value={this.state.song_title}
                                    // onChange={this.handleInputChangeFor('song_title')}
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.loanAssistanceInput}
                                    onChange={this.handleChangeForMortgageFinancing('loanAssistanceInput')}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Buyer shall apply for and secure, at Buyer's expense, a: <i>(Check all that apply)</i></h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Conventional"
                                    value={this.state.conventional}
                                    onChange={this.handleChangeForCheckbox('conventional')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Department of Veteran's Affairs (DVA) Guaranteed"
                                    value={this.state.dvaGuarantee}
                                    onChange={this.handleChangeForCheckbox('dvaGuarantee')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Federal Housing Administration (FHA) Insured"
                                    value={this.state.FHA}
                                    onChange={this.handleChangeForCheckbox('FHA')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Privately Insured Conventional"
                                    value={this.state.privatelyInsure}
                                    onChange={this.handleChangeForCheckbox('privatelyInsure')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="United States Department of Agricultural (USDA) Rural Development"
                                    value={this.state.USDA}
                                    onChange={this.handleChangeForCheckbox('USDA')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Other"
                                    value={this.state.other}
                                    onChange={this.handleChangeForCheckbox('other')}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="morgtage_loan_other"
                                    // value={this.state.song_title}
                                    // onChange={this.handleInputChangeFor('song_title')}
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.otherInput}
                                    onChange={this.handleChangeForMortgageFinancing('otherInput')}
                                />
                            </Grid>
                            <h4>mortgage in the amount stated in this Purchase Agreement, amortized over a period of not more than</h4>
                            <Grid item xs={12}>
                                <TextField
                                    id="amortized_period"
                                    // value={this.state.song_title}
                                    // onChange={this.handleInputChangeFor('song_title')}
                                    fullWidth
                                    variant="outlined"
                                    value={this.state.mortgagePeriod}
                                    onChange={this.handleChangeForMortgageFinancing('mortgagePeriod')}
                                />
                            </Grid>
                            <h4>years, with an initial interest rate at no more than</h4>
                            <Grid item xs={12}>
                                <TextField
                                    id="interest_rate"
                                    // value={this.state.song_title}
                                    // onChange={this.handleInputChangeFor('song_title')}
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                    }}
                                    value={this.state.initialInterestRate}
                                    onChange={this.handleChangeForMortgageFinancing('initialInterestRate')}
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
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="If Buyer cannot secure the financing specified in this Purchase Agreement, and this Purchase Agreement does not close on the closing date specified, this Purchase Agreement is canceled. Buyer and Seller shall immediately sign a Cancellation of Purchase Agreement confirming said cancellation and directing all earnest moeny paid here to be"
                                value={this.state.contingent}
                                onChange={this.handleChangeForCheckbox('contingent')}
                            />
                        </Grid>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange('checkedB')}
                                    value="checkedB"
                                    color="primary"
                                />}
                            label="Refunded to Buyer"
                            value={this.state.refundedToBuyer}
                            onChange={this.handleChangeForCheckbox('refundedToBuyer')}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange('checkedB')}
                                    value="checkedB"
                                    color="primary"
                                />}
                            label="Forfeited to seller"
                            value={this.state.forfeitedToSeller}
                                onChange={this.handleChangeForCheckbox('forfeitedToSeller')}
                        />
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="Buyer shall provide Seller, or licensee representing or assisting Seller, with the Written Statement, on or before"
                                value={this.state.writtenStatement}
                                onChange={this.handleChangeForCheckbox('writtenStatement')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                                value={this.state.date}
                                onChange={this.handleChangeForMortgageFinancing('date')}
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
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="Within five (5) business days of final acceptance date of this purchase agreement" 
                                value={this.state.lockWithinFive}
                                onChange={this.handleChangeForCheckbox('lockWithinFive')}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="At any time prior to closing or as required by lenders(s)" 
                                value={this.state.lockAnytime}
                                onChange={this.handleChangeForCheckbox('lockAnytime')}
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
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.repairCost}
                                onChange={this.handleChangeForMortgageFinancing('repairCost')}
                            />
                        </Grid>
                        <h4>The following party agrees to pay any reinspection fee required by Buyer's lenders(s).</h4>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="Seller" 
                                value={this.state.seller}
                                onChange={this.handleChangeForCheckbox('seller')}
                                />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="Buyer" 
                                value={this.state.buyer}
                                onChange={this.handleChangeForCheckbox('buyer')}
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
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.appraisedPropertyValue}
                                onChange={this.handleChangeForMortgageFinancing('appraisedPropertyValue')}
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
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.lenderProcessingFee}
                                onChange={this.handleChangeForMortgageFinancing('lenderProcessingFee')}
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
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.paidByBuyer}
                                onChange={this.handleChangeForMortgageFinancing('paidByBuyer')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="At closing"
                                value={this.state.atClosing}
                                onChange={this.handleChangeForCheckbox('atClosing')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="Added to mortgage amount"
                                value={this.state.addedMortgage}
                                onChange={this.handleChangeForCheckbox('addedMortgage')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Paid by the Seller</h4>
                            <TextField
                                id="buyers_earnest_money"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.paidBySeller}
                                onChange={this.handleChangeForMortgageFinancing('paidBySeller')}
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
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.otherMortgageItems}
                                onChange={this.handleChangeForMortgageFinancing('otherMortgageItems')}
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

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory4));