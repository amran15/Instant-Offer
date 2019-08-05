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

class PurchaseCategory9 extends Component {
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
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="Yes"
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
                            />
                            <h4>Date of the previously written purchase agreement:</h4>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                            />
                            <h4>If yes, said cancellation shall be obtained no later than:</h4>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                            />
                            <center>
                                <h3>Deed/Marketable Title</h3>
                            </center>
                            <h4>Upon performance by Buyer, Seller shall deliver a: <i>(Check one)</i></h4>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Warranty Deed"
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
                                    label="Personal Representative's Deed"
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
                                    label="Contract for Deed"
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
                                    label="Trustee's Deed"
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
                                    label="Warranty Deed"
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
                                    label="Other Deed:"
                                />
                            </Grid>
                            <TextField
                                id="deed"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                            <p>Rights of tenants as follows (unless specified, not subject to tenancies):</p>
                            <TextField
                                id="tenant_rights"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                            <p>Others (must be specifed in writing):</p>
                            <TextField
                                id="tenant_rights"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
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
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Immediately after closing"
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
                                    label="Other:"
                                />
                            </Grid>
                            <TextField
                                id="tenant_rights"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                            <Grid item xs={12}>
                                <h4>Buyer has received:<i>(Check any that apply)</i></h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Disclosure statement: seller's property discloser statement form"
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
                                    label="Disclosure statement: seller's disclosure alternatives form"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <h4>Seller warrants that the property is either directly or indirectly connected to:</h4>
                                <h4>City Sewer</h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Yes"
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
                                />
                                <h4>City Water</h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Yes"
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
                                />
                                <h4>Does the seller know of a subsurface sewage treatment system on or serving the property?</h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Yes"
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
                                />
                                <h4>Does the seller know of a well on or serving the property?</h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Yes"
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
                                />
                                <h4>Is this Purchase Agreement subject to an Addendum to Purchase Agreement?</h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Yes"
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
                                />
                                <center>
                                    <h3>Home Protection/Warranty Plan</h3>
                                </center>
                                <h4>Is there a home protection/warranty plan?</h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Yes"
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
                                />
                                <h4>If yes, which party will obtain the home protection/warranty plan?</h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Buyer"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Seller"
                                />
                                <h4>If yes, which party will pay for the home protection/warranty plan and who will issue it?</h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Buyer"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Seller"
                                />
                                <h4>Issued by:</h4>
                                <TextField
                                    id="home_protection_issuer"
                                    // value={this.state.song_title}
                                    // onChange={this.handleInputChangeFor('song_title')}
                                    fullWidth
                                    variant="outlined"
                                />
                                <h4>The home protectoin/warranty plan will not exceed:</h4>
                                <TextField
                                    id="home_protection_max_cost"
                                    // value={this.state.song_title}
                                    // onChange={this.handleInputChangeFor('song_title')}
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
                                    id="Licensee"
                                    // value={this.state.song_title}
                                    // onChange={this.handleInputChangeFor('song_title')}
                                    fullWidth
                                    variant="outlined"
                                />
                                <h4>Real Estate Company Name</h4>
                                <TextField
                                    id="Licensee"
                                    // value={this.state.song_title}
                                    // onChange={this.handleInputChangeFor('song_title')}
                                    fullWidth
                                    variant="outlined"
                                />
                                <h4>The licensee is the:</h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Seller's Agent"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="Buyer's Agent"
                                        />}
                                    label="Seller"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Dual Agent"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Facilitator"
                                />
                                <h4>Licensee</h4>
                                <TextField
                                    id="Licensee"
                                    // value={this.state.song_title}
                                    // onChange={this.handleInputChangeFor('song_title')}
                                    fullWidth
                                    variant="outlined"
                                />
                                <h4>Real Estate Company Name</h4>
                                <TextField
                                    id="Licensee"
                                    // value={this.state.song_title}
                                    // onChange={this.handleInputChangeFor('song_title')}
                                    fullWidth
                                    variant="outlined"
                                />
                                <h4>The licensee is the:</h4>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Seller's Agent"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="Buyer's Agent"
                                        />}
                                    label="Seller"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Dual Agent"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
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
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Dual Agency representation DOES NOT apply in this transaction."
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Dual Agency representation DOES apply in this transaction."
                                />
                                <center>
                                    <h3>Other</h3>
                                </center>
                                <TextField
                                    // label="Song Title"
                                    id="other"
                                    // value={this.state.song_title}
                                    // onChange={this.handleInputChangeFor('song_title')}
                                    fullWidth
                                    variant="outlined"
                                />
                                <center>
                                    <h3>FIRPTA</h3>
                                </center>
                             <h4>Seller represents and warrants, under penalty of perjury, that Seller IS/IS NOT a foreign persion (i.e., a non-resident alien individual, foreign corporation, foreign partnership, foreign trust, or foreign estate for purposes of income taxation.</h4>
<FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Is"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={state.checkedB}
                                            // onChange={handleChange('checkedB')}
                                            value="checkedB"
                                            color="primary"
                                        />}
                                    label="Is not"
                                />
  <center>
                                    <h3>Signatures</h3>
                                </center>
                             <h4>Buyer's Signature</h4>
                             <h4>Buyer's Printed Name</h4>
                             <TextField
                                id="buyers_printed_name"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <br/>
                <Container component="main">
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
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
                                <Grid item xs={4}>
                                    <div align="center" className="Button">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleClick}
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
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
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory9));