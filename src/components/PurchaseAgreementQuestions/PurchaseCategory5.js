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

class PurchaseCategory5 extends Component {

    state = {
        id: this.props.match.params.id,
        answers: {
            L59: (typeof this.props.listingAnswers.L59 === 'undefined') ? null : this.props.listingAnswers.L59,
            L160A: (typeof this.props.listingAnswers.l160A === 'undefined') ? null : this.props.listingAnswers.l160A,
            L160B: (typeof this.props.listingAnswers.L160B === 'undefined') ? null : this.props.listingAnswers.L160B,
            L61A: (typeof this.props.listingAnswers.L61A === 'undefined') ? null : this.props.listingAnswers.L61A,
            L61B: (typeof this.props.listingAnswers.L61B === 'undefined') ? null : this.props.listingAnswers.L61B,
        }
    }

    handleChangeForSellerContribution = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            answers: {
                ...this.state.answers, [propertyName]: event.target.value,
            }
        })
    }

    handleChangeForCheckbox = (propertyName) => (event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: true,
            }
        })
    }

    handleChangeForCheckboxNo = (propertyName) => (event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: false,
            }
        })
    }

    handleClick = () => {
        this.props.history.push(`/PurchaseAgreement/${this.state.id}`)
    }

    handleClickNext = () => {
        this.props.history.push(`/PurchaseCategory6/${this.state.id}`)
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Seller's Contributions to Buyer's Costs</h2>
                            </center>
                            <h4>Will Seller be contributing to Buyer's costs?</h4>
                            <RadioGroup
                                value={this.state.answers.L59}
                                onChange={this.handleChangeForSellerContribution('L59')}>
                                <FormControlLabel value='true' control={<Radio />} label="Yes" />
                                <FormControlLabel value='false' control={<Radio />} label="No" />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <h4>If yes, Seller agrees to pay at closing, up to the amount of the sale price: <i>(Check one)</i></h4>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Checkbox
                                id="checkedB"
                                color="primary"
                                value={this.state.answers.L60A}
                                onChange={this.handleChangeForSellerContribution('L60A')}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                id="sellers_contribution"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.answers.L60B}
                                onChange={this.handleChangeForSellerContribution('L60B')}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Checkbox
                                id="checkedB"
                                color="primary"
                                value={this.state.answers.L61A}
                                onChange={this.handleChangeForSellerContribution('L61A')}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                id="sellers_contribution"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="start">%</InputAdornment>,
                                }}
                                value={this.state.answers.L61B}
                                onChange={this.handleChangeForSellerContribution('L61B')}
                            />
                            <br />
                            <br />
                        </Grid>
                    </Grid>
                    <br />
                    <br />
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
                </Container>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => reduxState
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory5));