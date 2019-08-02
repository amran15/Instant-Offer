import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import swal from 'sweetalert';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import { TextField } from '@material-ui/core';


class PurchaseCategory1 extends Component {
    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>General Information</h2>
                            </center>
                        </Grid>
                        <Grid item xs={12}>
                            <p>Date</p>
                            <TextField
                                id="date"
                                // label="Birthday"
                                type="date"
                                defaultValue="2017-05-24"
                                // className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <p>Buyer's Name</p>
                            <TextField
                                // label="Song Title"
                                id="buyers_name"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <p>Buyer's earnest money in the amount of</p>
                            <TextField
                                // label="Song Title"
                                id="buyers_earnest_money"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                            <TextField
                                label="$"
                                id="buyers_earnest_money"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                            <p>shall be delivered to listing broker, or if checked, to</p>
                            <Checkbox
                                // checked={state.checkedB}
                                // onChange={handleChange('checkedB')}
                                value="checkedB"
                                color="primary"
                            />
                            <TextField
                                id="brokers_name"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                            <p>no later than two (2) Business Days after Final Acceptance Date of this Purchase Agreement.</p>
                        </Grid>
                        <Grid item xs={12}>
                            <p>Property Address</p>
                            <TextField
                                id="street_address"
                                label="Street Addres"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                            <TextField
                                label="City"
                                id="city"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                            <TextField
                                label="County"
                                id="county"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <p>Legal description of property</p>
                            <TextField
                                id="legal_description"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <p>Built-Ins and the following personal property shall be transferred with no additional monetary value, and free and clear of all liens and encumbrances:</p>
                            <TextField
                                id="built_ins"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <p>The following item(s) are exlcuded from the purchase:</p>
                            <TextField
                                id="excluded_items"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </Container>

            </div >
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory1));