import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';

class PurchaseCategory5 extends Component {
    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Seller's Contributions to Buyer's Costs</h2>
                            </center>
                            <h4>Will Seller be contributing to Buyer's costs.</h4>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="Yes"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                    />}
                                label="No"
                            />
                        </Grid>

                        <h4>If yes, Seller agrees to pay at closing, up to: <i>(Check one)</i></h4>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange('checkedB')}
                                    value="checkedB"
                                    color="primary"
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    id="sellers_contribution"
                                    // value={this.state.song_title}
                                    // onChange={this.handleInputChangeFor('song_title')}
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={2}>
                                <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange('checkedB')}
                                    value="checkedB"
                                    color="primary"
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    id="sellers_contribution"
                                    // value={this.state.song_title}
                                    // onChange={this.handleInputChangeFor('song_title')}
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start">%</InputAdornment>,
                                    }}
                                />
                            </Grid>
                            <h4>of the sale price</h4>
                        </Grid>
                        <Container component="main">
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <div align="left">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                        >
                                            Back
                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div align="right">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                        >
                                            Save
                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>


                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory5));