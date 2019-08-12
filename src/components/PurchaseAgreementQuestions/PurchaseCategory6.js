import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI       
import { Button, RadioGroup, Radio, } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';

class PurchaseCategory6 extends Component {

    state = {
        id: this.props.match.params.id,
        answers: {
            L170: (typeof this.props.listingAnswers.L170 === 'undefined') ? null : this.props.listingAnswers.L170,
            L172: (typeof this.props.listingAnswers.L172 === 'undefined') ? null : this.props.listingAnswers.L172,
            L178: (typeof this.props.listingAnswers.L178 === 'undefined') ? null : this.props.listingAnswers.L178,
            L184: (typeof this.props.listingAnswers.L184 === 'undefined') ? null : this.props.listingAnswers.L184,
            L192: (typeof this.props.listingAnswers.L192 === 'undefined') ? null : this.props.listingAnswers.L192
        }
    }


    handleChangeForInspections = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            answers: {
                ...this.state.answers, [propertyName]: event.target.value,
            }
        })
    }


    handleChangeForCheckbox = (propertyName) => (event) => {
        this.setState({
            inspections: {
                ...this.state.inspections, [propertyName]: true,
            }
        })
    }

    handleChangeForCheckboxNo = (propertyName) => (event) => {
        this.setState({
            inspections: {
                ...this.state.inspections, [propertyName]: false,
            }
        })
    }

    handleClick = () => {
        this.props.history.push(`/PurchaseCategory5/${this.state.id}`)
    }

    handleClickNext = () => {
        this.props.history.push(`/PurchaseCategory7/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Inspections</h2>
                            </center>
                            <h4>Does the buyer agree to have a Property inspection performed at Buyer's expense?</h4>
                            <RadioGroup
                                value={this.state.answers.L170}
                                onChange={this.handleChangeForInspections('L170')}>
                                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Is this Purchase Agreement contingent upon any inspections(s) of the Property obtained by Buyer to determine its condition, including any non-intrusive testing or any intrusive testing as allowed pursuant to this Purchase Agreement?</h4>
                            <RadioGroup
                                value={this.state.answers.L172}
                                onChange={this.handleChangeForInspections('L172')}>
                                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Does the Seller agree to allow Buyer to perform intrusive testing or inspection(s).</h4>
                            <RadioGroup
                                value={this.state.answers.L178}
                                onChange={this.handleChangeForInspections('L178')}>
                                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>All inspection(s), test(s), and resulting negotiations, if any, shall be done within how many Calendar Days of Final Acceptance Date of this Purchase Agreement ("Inspection Period")?</h4>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                                value={this.state.answers.L184}
                                onChange={this.handleChangeForInspections('L184')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Other Inspection Items:</h4>
                            <TextField
                                id="other_inspection_items"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L192}
                                onChange={this.handleChangeForInspections('L192')}
                            />
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
            </div>
        )
    }
}
const mapReduxStateToProps = reduxState => reduxState
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory6));