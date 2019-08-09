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


    handleChangeForDataFeed = (propertyName) => (event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: true,
            }
        })
    }


    handleChangeForDataNo = (propertyName) => (event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: false,
            }
        })
    }


    handleClick = () => {
        this.props.history.push('/ListingContract')
    }

    handleClickToSave = () => {
        this.props.dispatch({ type: 'SAVE_ANSWERS', payload: this.state })
    }

    handleClickNext = () => {
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
                                        id="checkedB"
                                        color="primary"
                                        value={this.state.answers.L41}
                                        onClick={this.handleChangeForDataFeed('L41')}
                                    />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                        value={this.state.answers.L41}
                                        onClick={this.handleChangeForDataNo('L41')}
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
                                        value="checkedB"
                                        color="primary"
                                        value={this.state.answers.L54}
                                        onChange={this.handleChangeForDataFeed('L54')}
                                    />
                                }
                                label="Yes"

                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
                                }
                                label="No"
                                value={this.state.answers.L54}
                                onChange={this.handleChangeForDataNo('L54')}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Display link of automated valuation of the property on the internet?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                        value={this.state.answers.L63}
                                        onChange={this.handleChangeForDataFeed('L63')} />
                                }
                                label="Yes"

                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                        value={this.state.answers.L63}
                                        onChange={this.handleChangeForDataNo('L63')}
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
                                        value="checkedB"
                                        color="primary"
                                        value={this.state.answers.L63}
                                        onChange={this.handleChangeForDataFeed('L71')}
                                    />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary"
                                        value={this.state.answers.L63}
                                        onChange={this.handleChangeForDataNo('L71')}
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
export default connect(mapReduxStateToProps)(withRouter(ListingCategory2));