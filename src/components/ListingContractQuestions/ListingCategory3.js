import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


// Material UI
// import Button from '@material-ui/core/Button';
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


class ListingCategory3 extends Component {

    state = {
        listedForLease: {
            listedProperty: '',
            ifYes: '',
            ifNo: '',
        }
    }

    //this will handle the checkbox event -  if the answer is yes
    hanldeClickForCheckBox = (propertyName) => (event) => {
        this.setState({
            listedForLease: {
                ...this.state.listedForLease, [propertyName]: true,
            }
        })
    }

    // this will handle the checkbox if no is the answer
    handleClickForCheckBoxNo = (propertyName) => (event) => {
        this.setState({
            listedForLease: {
                ...this.state.listedForLease, [propertyName]: false,
            }
        })
    }

    handleChangeForInput = (propertyName) => (event) => {
        console.log(this.state.ifYes);
        this.setState({
            listedForLease: {
                ...this.state.listedForLease, [propertyName]: event.target.value,
            }
        })
    }

    // this.setState ({
    //     ...this.state, [event.target.id]:event.target.value,
    //  });

    handleSaveButton = () => {
        console.log('we are saving category 3');
        this.props.dispatch({ type: 'POST_LISTEDFOR_LEASE', payload: this.state.listedForLease })
        this.props.history.push('ListingContract')
    }


    handleClick = () => {
        this.props.history.push('/ListingContract')
    }


    handleClickNext = () => {
        this.props.history.push('/ListingCategory4')
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Listed for Lease</h2>
                            </center>
                            <h4>The property is currently listed for lease?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id="checkedB"
                                        color="primary"
                                        value={this.state.listedForLease.listedProperty}
                                        onClick={this.hanldeClickForCheckBox('listedProperty')}
                                    />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                        onClick={this.handleClickForCheckBoxNo('listedProperty')}
                                    />
                                }
                                label="No"
                            />
                        </Grid>
                        <h4>If yes, who is the listing broker?</h4>
                        <Grid item xs={12}>
                            <TextField
                                id="listing_broker"
                                fullWidth
                                variant="outlined"
                                value={this.setState.ifYes}
                                onChange={this.handleChangeForInput('ifYes')}
                            />
                        </Grid>
                        <h4>If no, the property can be listed for lease during the terms of this contract with another broker.</h4>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                        onClick={this.hanldeClickForCheckBox('ifNo')}
                                    />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                        onClick={this.handleClickForCheckBoxNo('ifNo')}
                                    />
                                }
                                label="No"
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
                            <div align="center" className="Button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleSaveButton}
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
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory3));