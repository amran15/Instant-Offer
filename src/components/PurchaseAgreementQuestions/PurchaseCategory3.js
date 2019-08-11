import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';
import { classPrivateProperty } from "@babel/types";

class PurchaseCategory3 extends Component {
    state = {
        closingDate: {
            date: '',
        }
    }

    handleChangeDate = (propertyName) => (event)=> {
        this.setState({ 
            closingDate:{
            [propertyName]:event.target.value
        }})
    }

    handleClickNext = () => {
        this.props.history.push('/PurchaseCategory4')
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h4>Closing Date</h4>
                            </center>
                            <h4>Date</h4>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                                value={this.state.closingDate.date}
                                onChange={this.handleChangeDate('date')}
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
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory3));