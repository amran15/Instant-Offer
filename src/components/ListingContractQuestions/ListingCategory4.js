import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextField, InputAdornment } from '@material-ui/core';




class ListingCategory4 extends Component {

    state = {
        brokerCompensation: {
            retainerFee: '',
            sellingPrice: '',
            brokerCommision: '',
            other: ''
        }
    }


    handleChange = (propertyName) => (event) => {
        this.setState({
            brokerCompensation: {
                ...this.state.brokerCompensation, [propertyName]: event.target.value
            }
        })
    }


    handleClick = () => {
        this.props.history.push('/ListingContract')
    }

    handleClickToSave = () => {
        console.log('we are posting listing cat 4 - Brokers Comp')
        this.props.dispatch({ type: 'POST_BROKERCOMPENSATION', payload: this.state.brokerCompensation })
    }


    handleClickNext = () => {
        this.props.history.push('/ListingCategory5')
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Broker's Compensation</h2>
                            </center>
                            <h4>Broker's retainer fee</h4>
                            <TextField
                                id="retainer_fee"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                onChange={this.handleChange('retainerFee')}
                            />
                            <h4>Percent of selling price</h4>
                            <TextField
                                id="percent"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                onChange={this.handleChange('sellingPrice')}
                            />
                            <h4>Broker's commission price in CASH </h4>
                            <TextField
                                id="commission_price"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                onChange={this.handleChange('brokerCommision')}
                            />
                            <h4>Other</h4>
                            <TextField
                                id="additional_info"
                                fullWidth
                                variant="outlined"
                                onChange={this.handleChange('other')}
                            />
                            <h4>If within the indicated days below (not to exceed six (6) months) after the expiration of this Contract, Seller sells or agrees to sell the Property to anyone who:</h4>
                            <h4>1. during this Contract made inquiry of Seller about the Property and Seller did not tell Broker about the inquiry; or</h4>
                            <h4>2. during this Contract made an affirmative showing of interest in the Property by responding to an advertisement, or by contacting Borker or the licensee involved</h4>
                            <h4>then Seller shall still pay Broker the compensation noted here, even if Seller sells the Property without Broker's assistance.</h4>
                            <TextField
                                label="Days"
                                id="days"
                                fullWidth
                                variant="outlined"
                                onChange={this.handleChange('other')}
                            />
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
                                <div align="center" className="Button">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleClickToSave}
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
                </Container>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory4));