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
            // L72: null,
            // L7: null,
            // L73: null,
            L72: (typeof this.props.listingAnswers.L72 === 'undefined') ? null : this.props.listingAnswers.L72,
            L7: (typeof this.props.listingAnswers.L7 === 'undefined') ? null : this.props.listingAnswers.L7,
            L73: (typeof this.props.listingAnswers.L73 === 'undefined') ? null : this.props.listingAnswers.L73,
    }

    handleClickForCheckbox = (propertyName, event) => {
        this.setState({
                ...this.state, [propertyName]: event,
        })
    }

    handleChangeForInput = (propertyName) => (event) => {
        this.setState({
                ...this.state, [propertyName]: event.target.value,
        })
    }

    handleClick = () => {
        this.props.dispatch({type:'SAVE_ANSWERS', payload: this.state})
        this.props.history.push('/ListingCategory2')
    }

    handleClickNext = () => {
        console.log('props', this.props.activeUserReducer)
        const database_payload = {
            id: this.props.activeUserReducer.id,
            answers: this.state
        }
        console.log("payload", database_payload)
        this.props.dispatch({ type: 'SAVE_ANSWERS', payload: database_payload })
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
                                        checked={this.props.listingAnswers.L72 === true}
                                        value="checkedB"
                                        color="primary"
                                        onClick={() => { this.handleClickForCheckbox('L72', true) }}
                                    />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.props.listingAnswers.L72 === false}
                                        value="checkedB"
                                        color="primary"
                                        onClick={() => { this.handleClickForCheckbox('L72', false) }}
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
                                value={this.props.listingAnswers.L7}
                                onChange={this.handleChangeForInput('L7')}
                            />
                        </Grid>
                        <h4>If no, the property can be listed for lease during the terms of this contract with another broker.</h4>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.props.listingAnswers.L73 === true}
                                        value="checkedB"
                                        color="primary"
                                        onClick={() => { this.handleClickForCheckbox('L73', true) }}
                                    />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.props.listingAnswers.L73 === false}
                                        value="checkedB"
                                        color="primary"
                                        onClick={() => { this.handleClickForCheckbox('L73', false) }}
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

const mapReduxStateToProps = reduxState => reduxState 
export default connect(mapReduxStateToProps)(withRouter(ListingCategory3));