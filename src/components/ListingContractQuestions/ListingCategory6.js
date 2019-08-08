import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import { TextField } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

class ListingCategory6 extends Component {
    state = {
        id: this.props.reduxState.activeUserReducer.id,
        answers: {
            L163: '',
            L164: '',
            L165A: '',
        }
    }


    handleClickForCheckBox = (propertyName) => (event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: true,
            }
        })
    }

    handleChangeForInitials = (propertyName) => (event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: event.target.value,
            }
        })
    }

    handleClickToSave = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS', payload: this.state })
    }

    handleClickNext = () => {
        this.props.history.push('/ListingCategory7')
    }


    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <center>
                                <h2>Closing Services</h2>
                            </center>
                            <h4>Seller's choice for closing services (Check one):</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="Broker will arrange for the closing."
                                onClick={this.handleClickForCheckBox('L163')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="Qualified agent or Seller's attorney will conduct the closing."
                                onClick={this.handleClickForCheckBox('L164')}
                            />
                        </Grid>
                        <br />
                        <br />
                        <Grid item xs={12}>
                            <TextField
                                label="Seller's Initials"
                                fullWidth
                                variant="outlined"
                                value={this.state.answers.L165A}
                                onChange={this.handleChangeForInitials('L165A')}
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
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
                <pre>
                    {JSON.stringify(this.props.reduxState, null, 2)}
                </pre>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory6));