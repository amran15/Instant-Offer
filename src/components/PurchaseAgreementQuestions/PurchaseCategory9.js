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

class PurchaseCategory9 extends Component {
    state = {
        id: this.props.match.params.id,
        answers: {
            L250: (typeof this.props.listingAnswers.L250 === 'undefined') ? null : this.props.listingAnswers.L250,
            L257A: (typeof this.props.listingAnswers.L257A === 'undefined') ? null : this.props.listingAnswers.L257A,
            L257B: (typeof this.props.listingAnswers.L257B === 'undefined') ? null : this.props.listingAnswers.L257B,
            L257C: (typeof this.props.listingAnswers.L257C === 'undefined') ? null : this.props.listingAnswers.L257C,
            L257D: (typeof this.props.listingAnswers.L257D === 'undefined') ? null : this.props.listingAnswers.L257D,
            L258: (typeof this.props.listingAnswers.L258 === 'undefined') ? null : this.props.listingAnswers.L258,
            L263: (typeof this.props.listingAnswers.L263 === 'undefined') ? null : this.props.listingAnswers.L263,
            L265: (typeof this.props.listingAnswers.L265 === 'undefined') ? null : this.props.listingAnswers.L265,
            L270: (typeof this.props.listingAnswers.L270 === 'undefined') ? null : this.props.listingAnswers.L270,
            L271A: (typeof this.props.listingAnswers.L271A === 'undefined') ? null : this.props.listingAnswers.L271A,
            L271B: (typeof this.props.listingAnswers.L271B === 'undefined') ? null : this.props.listingAnswers.L271B,
            L359: (typeof this.props.listingAnswers.L359 === 'undefined') ? null : this.props.listingAnswers.L359,
            L360: (typeof this.props.listingAnswers.L360 === 'undefined') ? null : this.props.listingAnswers.L360,
            L371A: (typeof this.props.listingAnswers.L371A === 'undefined') ? null : this.props.listingAnswers.L371A,
            L371B: (typeof this.props.listingAnswers.L371B === 'undefined') ? null : this.props.listingAnswers.L371B,
            L373: (typeof this.props.listingAnswers.L373 === 'undefined') ? null : this.props.listingAnswers.L373,
            L377: (typeof this.props.listingAnswers.L377 === 'undefined') ? null : this.props.listingAnswers.L377,
            L379: (typeof this.props.listingAnswers.L379 === 'undefined') ? null : this.props.listingAnswers.L379,
            L388A: (typeof this.props.listingAnswers.L388A === 'undefined') ? null : this.props.listingAnswers.L388A,
            L388B: (typeof this.props.listingAnswers.L388B === 'undefined') ? null : this.props.listingAnswers.L388B,
            L389A: (typeof this.props.listingAnswers.L389A === 'undefined') ? null : this.props.listingAnswers.L389A,
            L389B: (typeof this.props.listingAnswers.L389B === 'undefined') ? null : this.props.listingAnswers.L389B,
            L390: (typeof this.props.listingAnswers.L390 === 'undefined') ? null : this.props.listingAnswers.L390,
            L394A: (typeof this.props.listingAnswers.L394A === 'undefined') ? null : this.props.listingAnswers.L394A,
            L395: (typeof this.props.listingAnswers.L395 === 'undefined') ? null : this.props.listingAnswers.L395,
            L394B: (typeof this.props.listingAnswers.L394B === 'undefined') ? null : this.props.listingAnswers.L394B,
            L394C: (typeof this.props.listingAnswers.L394C === 'undefined') ? null : this.props.listingAnswers.L394C,
            L394D: (typeof this.props.listingAnswers.L394D === 'undefined') ? null : this.props.listingAnswers.L394D,
            L394E: (typeof this.props.listingAnswers.L394E === 'undefined') ? null : this.props.listingAnswers.L394E,
            L396A: (typeof this.props.listingAnswers.L396A === 'undefined') ? null : this.props.listingAnswers.L396A,
            L397: (typeof this.props.listingAnswers.L397 === 'undefined') ? null : this.props.listingAnswers.L397,
            L396B: (typeof this.props.listingAnswers.L396B === 'undefined') ? null : this.props.listingAnswers.L396B,
            L396C: (typeof this.props.listingAnswers.L396C === 'undefined') ? null : this.props.listingAnswers.L396C,
            L396D: (typeof this.props.listingAnswers.L396D === 'undefined') ? null : this.props.listingAnswers.L396D,
            L396E: (typeof this.props.listingAnswers.L396E === 'undefined') ? null : this.props.listingAnswers.L396E,
            L403: (typeof this.props.listingAnswers.L403 === 'undefined') ? null : this.props.listingAnswers.L403, 
            L404: (typeof this.props.listingAnswers.L404 === 'undefined') ? null : this.props.listingAnswers.L404, 
            L454: (typeof this.props.listingAnswers.L454 === 'undefined') ? null : this.props.listingAnswers.L454, 
            L494: (typeof this.props.listingAnswers.L494 === 'undefined') ? null : this.props.listingAnswers.L494, 
        }
    }
    handleChangeForAdditionalProvision = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            answers: {
                ...this.state.answers, [propertyName]: event.target.value,
            }
        })
    }

    handleClickBack = () => {
        this.props.history.push(`/PurchaseCategory8/${this.state.id}`)
    }

    handleSaveButton = () => {
        this.props.history.push(`/PurchaseAgreement/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Additional Provisions</h2>
                            </center>
                            <center>
                                <h3>Previously Written Purchase Agreement</h3>
                            </center>
                            <h4>Is this Purchase Agreement subjecto to cancellation of a previously written Purchase Agreement?</h4>
                            <RadioGroup
                                value={this.state.answers.L250}
                                onChange={this.handleChangeForAdditionalProvision('L250')}>
                                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio />} label="No" />
                            </RadioGroup>
                            <h4>Date of the previously written purchase agreement:</h4>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                                value={this.props.purchaseAnswers.L251}
                                onChange={this.handleChangeForAdditionalProvision('L251')}
                            />
                            <h4>If yes, said cancellation shall be obtained no later than:</h4>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                                value={this.props.purchaseAnswers.L252}
                                onChange={this.handleChangeForAdditionalProvision('L252')}
                            />
                            <center>
                                <h3>Deed/Marketable Title</h3>
                            </center>
                            <h4>Upon performance by Buyer, Seller shall deliver a: <i>(Check one)</i></h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L257A}
                                            onChange={this.handleChangeForAdditionalProvision('L257A')}
                                            color="primary"
                                        />}
                                    label="Warranty Deed"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L257B}
                                            onChange={this.handleChangeForAdditionalProvision('L257B')}
                                            color="primary"
                                        />}
                                    label="Personal Representative's Deed"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L257C}
                                            onChange={this.handleChangeForAdditionalProvision('L257C')}
                                            color="primary"
                                        />}
                                    label="Contract for Deed"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L257D}
                                            onChange={this.handleChangeForAdditionalProvision('L257D')}
                                            color="primary"
                                        />}
                                    label="Trustee's Deed"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L258}
                                            onChange={this.handleChangeForAdditionalProvision('L258')}
                                            color="primary"
                                        />}
                                    label="Other Deed:"
                                />
                            </Grid>
                            <TextField
                                id="deed"
                                fullWidth
                                variant="outlined"
                            />
                            <p>joined in by spouse, if any, conveying marketable title, subject to </p>
                            <p>(a) building and zoning laws, ordinances, and state and federal regulations;</p>
                            <p>(b) restrictions relating to use or improvement of the Property withouth effective forfeiture provisions;</p>
                            <p>(c) reservation of any mineral rights by the State of Minnesota</p>
                            <p>(d) utility and drianage easements which do not interfere with existing improvemens;</p>
                            <p>(e) rights of tenants as follows (unless specified, not subject to tenancies):</p>
                            <TextField
                                value={this.state.answers.L263}
                                onChange={this.handleChangeForAdditionalProvision('L263')}
                                id="tenant_rights"
                                fullWidth
                                variant="outlined"
                            />
                            <p>(f) others (must be specified in writing):</p>
                            <TextField
                                value={this.state.answers.L265}
                                onChange={this.handleChangeForAdditionalProvision('L265')}
                                id="tenant_rights_other"
                                fullWidth
                                variant="outlined"
                            />
                            <center>
                                <h3>Possession</h3>
                            </center>
                            <h4>Seller shall deliver possession of the Property: <i>(Check one)</i></h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L270}
                                            onChange={this.handleChangeForAdditionalProvision('L270')}
                                            color="primary"
                                        />}
                                    label="Immediately after closing"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L271A}
                                            onChange={this.handleChangeForAdditionalProvision('L271A')}
                                            color="primary"
                                        />}
                                    label="Other:"
                                />
                            </Grid>
                            <TextField
                                value={this.state.answers.L271B}
                                onChange={this.handleChangeForAdditionalProvision('L271B')}
                                id="tenant_rights"
                                fullWidth
                                variant="outlined"
                            />
                            <Grid item xs={12}>
                                <h4>Buyer has received:<i>(Check any that apply)</i></h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L359}
                                            onChange={this.handleChangeForAdditionalProvision('L359')}
                                            color="primary"
                                        />}
                                    label="Disclosure statement: seller's property discloser statement form"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L360}
                                            onChange={this.handleChangeForAdditionalProvision('L360')}
                                            color="primary"
                                        />}
                                    label="Disclosure statement: seller's disclosure alternatives form"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <h4>Seller warrants that the property is either directly or indirectly connected to:</h4>
                                <h4>City Sewer</h4>
                                <RadioGroup
                                    value={this.state.answers.L371A}
                                    onChange={this.handleChangeForAdditionalProvision('L371A')}>
                                    <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                    <FormControlLabel value='false' control={<Radio />} label="No" />
                                </RadioGroup>
                                <h4>City Water</h4>
                                <RadioGroup
                                    value={this.state.answers.L371B}
                                    onChange={this.handleChangeForAdditionalProvision('L371B')}>
                                    <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                    <FormControlLabel value='false' control={<Radio />} label="No" />
                                </RadioGroup>
                                <h4>Does the seller know of a subsurface sewage treatment system on or serving the property?</h4>
                                <RadioGroup
                                    value={this.state.answers.L373}
                                    onChange={this.handleChangeForAdditionalProvision('L373')}>
                                    <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                    <FormControlLabel value='false' control={<Radio />} label="No" />
                                </RadioGroup>
                                <h4>Does the seller know of a well on or serving the property?</h4>
                                <RadioGroup
                                    value={this.state.answers.L377}
                                    onChange={this.handleChangeForAdditionalProvision('L377')}>
                                    <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                    <FormControlLabel value='false' control={<Radio />} label="No" />
                                </RadioGroup>
                                <h4>Is this Purchase Agreement subject to an Addendum to Purchase Agreement?</h4>
                                <RadioGroup
                                    value={this.state.answers.L379}
                                    onChange={this.handleChangeForAdditionalProvision('L379')}>
                                    <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                    <FormControlLabel value='false' control={<Radio />} label="No" />
                                </RadioGroup>
                                <center>
                                    <h3>Home Protection/Warranty Plan</h3>
                                </center>
                                <h4>Is there a home protection/warranty plan?</h4>
                                <RadioGroup
                                    value={this.state.answers.L388A}
                                    onChange={this.handleChangeForAdditionalProvision('L388A')}>
                                    <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                    <FormControlLabel value='false' control={<Radio />} label="No" />
                                </RadioGroup>
                                <h4>If yes, which party will obtain the home protection/warranty plan?</h4>
                                <RadioGroup
                                    value={this.state.answers.L388B}
                                    onChange={this.handleChangeForAdditionalProvision('L388B')}>
                                    <FormControlLabel value='true' control={<Radio />} label="Buyer" />
                                    <FormControlLabel value='false' control={<Radio />} label="Seller" />
                                </RadioGroup>
                                <h4>If yes, which party will pay for the home protection/warranty plan and who will issue it?</h4>
                                <RadioGroup
                                    value={this.state.answers.L389A}
                                    onChange={this.handleChangeForAdditionalProvision('L389A')}>
                                    <FormControlLabel value='true' control={<Radio />} label="Buyer" />
                                    <FormControlLabel value='false' control={<Radio />} label="Seller" />
                                </RadioGroup>
                                <h4>Issued by:</h4>
                                <TextField
                                    value={this.state.answers.L389B}
                                    onChange={this.handleChangeForAdditionalProvision('L389B')}
                                    id="home_protection_issuer"
                                    fullWidth
                                    variant="outlined"
                                />
                                <h4>The home protectoin/warranty plan will not exceed:</h4>
                                <TextField
                                    value={this.state.answers.L390}
                                    onChange={this.handleChangeForAdditionalProvision('L390')}
                                    id="home_protection_max_cost"
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                />
                                <center>
                                    <h3>Agency Notice</h3>
                                </center>
                                <h4>Licensee</h4>
                                <TextField
                                    value={this.state.answers.L394A}
                                    onChange={this.handleChangeForAdditionalProvision('L394A')}
                                    id="Licensee"
                                    fullWidth
                                    variant="outlined"
                                />
                                <h4>Real Estate Company Name</h4>
                                <TextField
                                    value={this.state.answers.L395}
                                    onChange={this.handleChangeForAdditionalProvision('L395')}
                                    id="Licensee"
                                    fullWidth
                                    variant="outlined"
                                />
                                <h4>The licensee is the:</h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L394B}
                                            onChange={this.handleChangeForAdditionalProvision('L394B')}
                                            color="primary"
                                        />}
                                    label="Seller's Agent"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L394C}
                                            onChange={this.handleChangeForAdditionalProvision('L394C')}
                                            color="primary"
                                        />}
                                    label="Buyer's Agent"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L394D}
                                            onChange={this.handleChangeForAdditionalProvision('L394D')}
                                            color="primary"
                                        />}
                                    label="Dual Agent"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L394E}
                                            onChange={this.handleChangeForAdditionalProvision('L394E')}
                                            color="primary"
                                        />}
                                    label="Facilitator"
                                />
                                <h4>Licensee</h4>
                                <TextField
                                    value={this.state.answers.L396A}
                                    onChange={this.handleChangeForAdditionalProvision('L396A')}
                                    id="Licensee"
                                    fullWidth
                                    variant="outlined"
                                />
                                <h4>Real Estate Company Name</h4>
                                <TextField
                                    value={this.state.answers.L397}
                                    onChange={this.handleChangeForAdditionalProvision('L397')}
                                    id="Licensee"
                                    fullWidth
                                    variant="outlined"
                                />
                                <h4>The licensee is the:</h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L396B}
                                            onChange={this.handleChangeForAdditionalProvision('L396B')}
                                            color="primary"
                                        />}
                                    label="Seller's Agent"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L396C}
                                            onChange={this.handleChangeForAdditionalProvision('L396C')}
                                            color="primary"
                                        />}
                                    label="Buyer's Agent"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L396D}
                                            onChange={this.handleChangeForAdditionalProvision('L396D')}
                                            color="primary"
                                        />}
                                    label="Dual Agent"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L396E}
                                            onChange={this.handleChangeForAdditionalProvision('L396E')}
                                            color="primary"
                                        />}
                                    label="Facilitator"
                                />
                                <center>
                                    <h3>Dual Agency Representation</h3>
                                </center>
                                <h4>Please check one of the following:</h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L403}
                                            onChange={this.handleChangeForAdditionalProvision('L403')}
                                            color="primary"
                                        />}
                                    label="Dual Agency representation DOES NOT apply in this transaction."
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value={this.state.answers.L404}
                                            onChange={this.handleChangeForAdditionalProvision('L404')}
                                            color="primary"
                                        />}
                                    label="Dual Agency representation DOES apply in this transaction."
                                />
                                <center>
                                    <h3>Other</h3>
                                </center>
                                <TextField
                                    value={this.state.answers.L454}
                                    onChange={this.handleChangeForAdditionalProvision('L454')}
                                    id="other"
                                    fullWidth
                                    variant="outlined"
                                />
                                <center>
                                    <h3>FIRPTA</h3>
                                </center>
                                <h4>Seller represents and warrants, under penalty of perjury, that Seller IS/IS NOT a foreign persion (i.e., a non-resident alien individual, foreign corporation, foreign partnership, foreign trust, or foreign estate for purposes of income taxation.</h4>
                                <RadioGroup
                                    value={this.state.answers.L494}
                                    onChange={this.handleChangeForAdditionalProvision('L494')}>
                                    <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                    <FormControlLabel value='false' control={<Radio />} label="No" />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <br />
                <Container component="main">
                    <Grid container spacing={2}>
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
                                    onClick={this.handleSaveButton}
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

const mapReduxStateToProps = reduxState => reduxState
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory9));