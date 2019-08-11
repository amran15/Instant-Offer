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

class PurchaseCategory8 extends Component {
    handleClick = () => {
        this.props.history.push('/PurchaseAgreement')
    }

    handleClickNext = () => {
        this.props.history.push('/PurchaseCategory9')
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
                            <center>
                                <h3>Real Estate Taxes</h3>
                            </center>
                            <Grid item xs={12}>
                            <h4>Seller shall pay on the date of closing all real estate taxes due and payable in all prior years including all penalties and interest.</h4>
                                <h4>Buyer shall pay: <i>(Check one)</i></h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Prorated from day of closing"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="All"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="None"
                                />
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={1}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="checkedB"
                                                color="primary"
                                            />}

                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        id="buyer_real_estate_tax"
                                    />/12ths of real estate taxes due and payable in the year of closing.
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <h4>Seller shall pay: <i>(Check one)</i></h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Prorated from day of closing"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="All"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="None"
                                />
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={1}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="checkedB"
                                                color="primary"
                                            />}
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        id="buyer_real_estate_tax"
                                    />/12ths of real estate taxes due and payable in the year of closing.
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <h4>If the property tax status is a part-or non-homested classification in the year of closing, will the Seller pay the difference between the homestead and non-homestead?</h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="No"
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <center>
                                <h3>Deferred Taxes/Special Assessments</h3>
                            </center>
                            <h4>Who will pay on date of closing any deferred real estate taxes (e.g., Green Acres) or special assessments, payment of which is required as a result o the closing of this sale?</h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Buyer shall pay"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Seller shall pay"
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Who will pay all installments of special assessments certified for payment, with the real estate taxes due and payable in the year of closing?</h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Buyer and Seller shall prorate as of the date of closing"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Seller shall pay on date of closing"
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Who will pay on date of closing all other special assessments levied as of the date of this Purchase Agreement?</h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Buyer shall assume"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Seller shall pay"
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Who will provide for payment of special assessments pending as of the date of this Purchase Agreement for improvements that have been ordered by any assessing authorities?</h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Buyer shall assume"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Seller shall provide for payment"
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>As of the date of this Purchase Agreement, has the Seller received a notice regarding any new improvement project from any assessing authorities, the costs of which project may be assessed aginast the Property?</h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Yes"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="No"
                                />
                            </Grid>
                        </Grid>
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
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory8));
