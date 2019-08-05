import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { TextField, InputAdornment } from '@material-ui/core';


class ListingCategory5 extends Component {

    state = {
        compensationDisclosure: {
            cooperatingBrokers: '',
            grossPercent: '',
            grossCash: '',
        }
    }


    handleClickForCheckbox = (propertyName) => (event) => {
        this.setState({
            compensationDisclosure: {
                ...this.state.compensationDisclosure, [propertyName]: true,
            }
        })
    }

    handleClickForCheckboxNo = (propertyName) => (event) => {
        this.setState({
            compensationDisclosure: {
                ...this.state.compensationDisclosure, [propertyName]: false,
            }
        })
    }

    handleChangeForInputs = (propertyName) => (event) => {
        this.setState({
            compensationDisclosure: {
                ...this.state.compensationDisclosure, [propertyName]: event.target.value
            }
        })
    }


    handleClick = () => {
        this.props.history.push('/ListingContract')
    }

    handleClickToSave = () => {
        console.log('we can save listingcat5 now!!!!!!!!');
        this.props.dispatch({type:'POST_COMPENSATION_DISCLOSURE', payload:this.state.compensationDisclosure})
        this.props.history.push('/ListingContract')
    }




    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Compensation Disclosure</h2>
                            </center>
                        </Grid>
                        <h4>Broker will offer compensation to cooperating brokers?</h4>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                        onClick={this.handleClickForCheckbox('cooperatingBrokers')}
                                    />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                        onClick={this.handleClickForCheckboxNo('cooperatingBrokers')}
                                    />
                                }
                                label="No"
                            />
                        </Grid>
                        <h4>If yes, the compensation to cooperating shall be as follows:</h4>
                        <Grid item xs={12}>
                            <h4>Percent of gross sales price</h4>
                            <TextField
                                id="percent"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                onChange={this.handleChangeForInputs('grossPercent')}
                            />
                            <h4>Gross sales price in CASH </h4>
                            <TextField
                                id="commission_price"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                onChange={this.handleChangeForInputs('grossCash')}
                            />
                        </Grid>
                    </Grid>
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
                                        onClick={this.handleClickToSave}
                                    >
                                        Save
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
export default connect(mapReduxStateToProps)(withRouter(ListingCategory5));