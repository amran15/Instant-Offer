import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


//Material UI       
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Checkbox, FormControlLabel } from '@material-ui/core';


class ListingCategory2 extends Component {
    state = {
        id: this.props.reduxState.activeUserReducer.id,
        answers: {
            L41: null,
            L54: null,
            L63: null,
            L71: null,
        }
    }

    handleClickForCheckbox = (propertyName, event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: event,
            }
        })
    }

    handleClick = () => {
        this.props.history.push('/ListingContract')
    }

    handleClickNext = () => {
        this.props.dispatch({type:'SAVE_ANSWERS', payload: this.state})
        this.props.history.push('/ListingCategory3')
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>MLS Data Feed Options</h2>
                            </center>
                            <h4>Display listing on the internet?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.state.answers.L41 === true}
                                        value="checkedB"
                                        color="primary"
                                        onClick={() => { this.handleClickForCheckbox('L41', true) }}
                                    />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.state.answers.L41 === false}
                                    value="checkedB"
                                    color="primary"
                                    onClick={() => { this.handleClickForCheckbox('L41', false) }}
                                />
                            }
                            label="No"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Display listing address on the internet?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.answers.L54 === true}
                                        value="checkedB"
                                        color="primary"
                                        onClick={() => { this.handleClickForCheckbox('L54', true) }}
                                    />
                                }
                                label="Yes"
                                />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.state.answers.L54 === false}
                                    value="checkedB"
                                    color="primary"
                                    onClick={() => { this.handleClickForCheckbox('L54', false) }}
                                />
                            }
                            label="No"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Display link of automated valuation of the property on the internet?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.state.answers.L63 === true}
                                    value="checkedB"
                                    color="primary"
                                    onClick={() => { this.handleClickForCheckbox('L63', true) }}
                                />
                            }
                            label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.state.answers.L63 === false}
                                    value="checkedB"
                                    color="primary"
                                    onClick={() => { this.handleClickForCheckbox('L63', false) }}
                                />
                            }
                            label="No"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Display comments or reviews about property by persons other than Broker on the internet?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.state.answers.L71 === true}
                                    value="checkedB"
                                    color="primary"
                                    onClick={() => { this.handleClickForCheckbox('L71', true) }}
                                />
                            }
                            label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.state.answers.L71 === false}
                                    value="checkedB"
                                    color="primary"
                                    onClick={() => { this.handleClickForCheckbox('L71', false) }}
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

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory2));