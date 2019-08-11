import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';

class PurchaseCategory2 extends Component {
    state = {
        purchasePrice:{
            propertySumValue:'',
            propertySum:'',
            salePriceCash:'',
            mortgageFinancing:'',
            assumedCurrentMortgage:'',
            contractForDeed:'',
        }
    }

    handleChangeForPurchasePrice = (propertyName) => (event) => {
        this.setState ({
            purchasePrice: {
                ...this.state.purchasePrice, [propertyName]:event.target.value
            }
        })
    }

    handleClick = () => {
        this.props.history.push('/PurchaseAgreement')
    }

    handleClickNext = () => {
        this.props.history.push('/PurchaseCategory3')
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Purchase Price</h2>
                            </center>
                            <h4>Seller has agreed to sell the Property to Buyer for the sum of</h4>
                            <TextField
                                id="sum"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value ={this.state.propertySumValue}
                                onChange={this.handleChangeForPurchasePrice('propertySumValue')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="dollars"
                                fullWidth
                                variant="outlined"
                                value ={this.state.propertySum}
                                onChange={this.handleChangeForPurchasePrice('propertySum')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Buyer agrees to pay in the following manner:</h4>
                            <h4>Sale price in CASH</h4>
                            <TextField
                                id="percent"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                value ={this.state.salePriceCash}
                                onChange={this.handleChangeForPurchasePrice('salePriceCash')}
                            />
                            <h4>Sale price in MORTGAGE FINANCING</h4>
                            <TextField
                                id="percent"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                value ={this.state.mortgageFinancing}
                                onChange={this.handleChangeForPurchasePrice('mortgageFinancing')}
                            />
                            <h4>Sale price by ASSUMING Seller's current mortgage</h4>
                            <TextField
                                id="percent"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                value ={this.state.assumedCurrentMortgage}
                                onChange={this.handleChangeForPurchasePrice('assumedCurrentMortgage')}
                            />
                            <h4>Sale price by CONTRACT FOR DEED</h4>
                            <TextField
                                id="percent"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                value ={this.state.contractForDeed}
                                onChange={this.handleChangeForPurchasePrice('contractForDeed')}
                            />
                        </Grid>
                    </Grid>
                </Container>
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
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory2));