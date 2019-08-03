import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


// Material UI
// import Button from '@material-ui/core/Button';
import { TextField, Checkbox,  FormControlLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


class ListingCategory3 extends Component {
    handleClick = () => {
        this.props.history.push('/ListingContract')
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
                        </Grid>
                        <h4>The property is currently listed for lease?</h4>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
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
                            />
                        </Grid>
                        <h4>If selected yes, who is the listing broker?</h4>
                        <Grid item xs={12}>
                        <TextField
                            id="listing_broker"
                            fullWidth
                            variant="outlined"
                        />
                        </Grid>
                        <h4>If selected no, the property can be listed for lease during the terms of this contract with another broker</h4>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="checkedB"
                                        color="primary" />
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
                                    onClick={this.handleClick}
                                >
                                    Save
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
export default connect(mapReduxStateToProps)(withRouter(ListingCategory3));