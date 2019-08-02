import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';

class ListingCategory1 extends Component {
    render() {
        return (
            <>
            <p>Date</p>
            <TextField
                    // label="Song Title"
                    id="buyers_earnest_money"
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    minWidth
                    variant="outlined"
                    input type="date"
                />
                <p><strong>DEFINITIONS:</strong> This Contract involves ths property located at </p>
                <TextField
                    // label="Song Title"
                    id="buyers_name"
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    fullWidth
                    variant="outlined"
                />
                <p>Legally described as</p>
                <TextField
                    // label="Song Title"
                    id="buyers_earnest_money"
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    fullWidth
                    variant="outlined"
                /> 
                <p>Seller's Name </p>
                <TextField
                    // label="Song Title"
                    id="buyers_earnest_money"
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    fullWidth
                    variant="outlined"
                />
                <p>Broker's Name</p>
                <TextField
                    // label="Song Title"
                    id="buyers_earnest_money"
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    fullWidth
                    variant="outlined"
                />
                <p>This Contract starts on  </p> <TextField
                    // label="Song Title"
                    id="buyers_earnest_money"
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    minWidth
                    variant="outlined"
                    input type="date"
                /><p>, and ends at 11:59 p.m. on</p>
                <TextField
                    // label="Song Title"
                    id="buyers_earnest_money"
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    minWidth
                    variant="outlined"
                    type="date"
                />
                <p>. This Contract terminates upon successful closing of the property(ies) specified in this Contract or expiration or expiration or cancellation of this Contract,<br/>
                 whichever occurs first.</p>
                 <p>This Contract may only be canceled by written mutual agreement of the parties.</p>
                 <p><strong>PRICE:</strong>Seller offers the Property for sale for the price</p>
                 <TextField
                    label="$"
                    id="buyers_earnest_money"
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    minWidth
                    variant="outlined"
                /><p>upon the following terms:</p>
                  <TextField
                    // label="$"
                    id="buyers_earnest_money"
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    fullWidth
                    variant="outlined"
                />
                
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
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(ListingCategory1));