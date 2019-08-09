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
            L163: null,
            L164: null,
            L165A: null,
        }
    }


    handleClickForCheckbox = (propertyName, event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: event,
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

    handleClick = () => {
        this.props.history.push('/ListingContract')
    }

    handleClickNext = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS', payload: this.state })
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
                            <h4>Seller wishes to have a Broker arrange for the closing?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.answers.L163 === true}
                                        value="checkedB"
                                        color="primary"
                                        onClick={() => { this.handleClickForCheckbox('L163', true) }}
                                    />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.answers.L163 === false}
                                        value="checkedB"
                                        color="primary"
                                        onClick={() => { this.handleClickForCheckbox('L163', false) }}
                                    />
                                }
                                label="No"
                            />
                            <h4>Seller shall arrange for a qualified closing agent or Seller's attorney to conduct the closing?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.answers.L164 === true}
                                        value="checkedB"
                                        color="primary"
                                        onClick={() => { this.handleClickForCheckbox('L164', true) }}
                                    />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.answers.L164 === false}
                                        value="checkedB"
                                        color="primary"
                                        onClick={() => { this.handleClickForCheckbox('L164', false) }}
                                    />
                                }
                                label="No"
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

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory6));