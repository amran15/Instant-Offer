import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


import { TextField, Checkbox } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



class ListingCategory5 extends Component {


    
    render() {
        return (
            <>
                <p><strong> COMPENSATION DISCLOSURE:</strong> Broker <Checkbox />
                    <span><strong>SHALL</strong><Checkbox /></span>
                    <span><strong>SHALL NOT</strong></span> offer compensation to cooperating brokers.</p>
                <p>if <strong>SHALL</strong>, the compensation to cooperating brokers shall be as follows:</p>
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
                            id="brokers_name"
                            // value={this.state.song_title}
                            // onChange={this.handleInputChangeFor('song_title')}
                            minWidth
                            variant="outlined"
                            label="%"
                        />
                    </Grid>
                </Grid>
                <p>of the gross sales price or $ </p><Grid item xs={10}>
                        <TextField
                            id="brokers_name"
                            // value={this.state.song_title}
                            // onChange={this.handleInputChangeFor('song_title')}
                            minWidth
                            variant="outlined"
                            label="%"
                        />
                    </Grid>

                    <br/>
            <br/>
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
                                    // i className="fa fa-sign-in"
                                >
                                    Save
                        </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>

            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory5));