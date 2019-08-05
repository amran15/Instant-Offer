import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';

class PurchaseCategory2 extends Component {
    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>Purchase Price</h2>
                            </center>
                            <h4>Seller has agreed to sell the Property to Buyer for the sum of</h4>
                            <TextField
                                id="sum"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="dollars"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Buyer agrees to pay in the following manner:</h4>
                            <h4>Sale price in CASH</h4>
                            <TextField
                                id="percent"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                            />
                            <h4>Sale price in MORTGAGE FINANCING</h4>
                            <TextField
                                id="percent"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                            />
                            <h4>Sale price by ASSUMING Seller's current mortgage</h4>
                            <TextField
                                id="percent"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
                            />
                            <h4>Sale price by CONTRACT FOR DEED</h4>
                            <TextField
                                id="percent"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                }}
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
                                    onClick={this.handleClick}
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
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory2));