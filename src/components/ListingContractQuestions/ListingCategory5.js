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
        id: this.props.reduxState.activeUserReducer.id,
        answers: {
            L146: '',
            L148B: '',
            L148C: '',
        }
    }

    handleClickForCheckbox = (propertyName, event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: event,
            }
        })
    }


    handleChangeForInputs = (propertyName) => (event) => {
        this.setState({
            answers: {
                ...this.state.answers, [propertyName]: event.target.value
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
        this.props.history.push('/ListingCategory6')
    }

    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Compensation Disclosure</h2>
                            </center>
                            <h4>Broker will offer compensation to cooperating brokers?</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.state.answers.L146 === true}
                                        value="checkedB"
                                        color="primary"
                                        onClick={()=>{this.handleClickForCheckbox('L146', true)}}
                                    />
                                }
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                    checked={this.state.answers.L146 === false}
                                        value="checkedB"
                                        color="primary"
                                        onClick={()=>{this.handleClickForCheckbox('L146', false)}}
                                    />
                                }
                                label="No"
                            />
                            <h4>If yes, the compensation to cooperating shall be as follows:</h4>
                            <h4>Percent of gross sales price</h4>
                            <TextField
                                id="percent"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                                onChange={this.handleChangeForInputs('L148C')}
                            />
                            <h4>Gross sales price in CASH </h4>
                            <TextField
                                id="commission_price"
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                onChange={this.handleChangeForInputs('L148B')}
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
            </div>

        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory5));