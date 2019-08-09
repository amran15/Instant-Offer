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
        id: this.props.reduxState.activeUserReducer.id,
        answers: {
            L72: null,
            L73A: '',
            L73B: null,
        }
    }


    handleClickForCheckBox = (propertyName) => (event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: true,
            }
        })
    } 

   

    // this will handle the checkbox if no is the answer
    handleClickForCheckBoxNo = (propertyName) => (event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: false,
            }
        })
    }

    handleChangeForInput = (propertyName) => (event) => {
        console.log(this.state.ifYes);
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: event.target.value,
            }
        })
    }

   
    handleClickToSave = () => {
        this.props.dispatch({type:'SAVE_ANSWERS', payload: this.state})
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
                                        value={this.state.answers.L72}
                                        onClick={this.handleClickForCheckBox('L72')}
                                    />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                        value={this.state.answers.L72}
                                        onClick={this.handleClickForCheckBoxNo('L72')}
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
                                value={this.state.answers.L73A}
                                onChange={this.handleChangeForInput('L73A')}
                            />
                        </Grid>
                        <h4>If no, the property can be listed for lease during the terms of this contract with another broker.</h4>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                        value={this.state.answers.L73B}
                                        onClick={this.handleClickForCheckBox('L73B')}
                                    />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                        value={this.state.answers.L73B}
                                        onClick={this.handleClickForCheckBoxNo('L73B')}
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
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory3));