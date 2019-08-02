import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


// Material UI
import { TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import InputAdornment from '@material-ui/core/InputAdornment';



class ListingCategory4 extends Component {
    render() {
        return (
            <>
                <p><strong>BROKER'S COMPENSATION:</strong></p>
                <p>Seller agrees to pay Broker a retainer fee of 
                 <TextField
                    label="$"
                    id="buyers_earnest_money"
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    minWidth variant="outlined"
                /></p>
                <p>at the commencement of this Contract, which fee should be kept by Broker whether or not Seller sells the Property. The retainer fee will apply toward satisfaction of any obligation to compensate Broker.</p>
                <p>Seller shall pay Broker, as Broker's compensation, <TextField
                    label="$"
                    id="buyers_earnest_money"
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    minWidth
                    variant="outlined"
                    style={{width:90}}
                /></p><p>percent(%) of the selling price plus $495 (this "commision") or </p>
                 <TextField
                    label="$"
                    id=""
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    minWidth
                    variant="outlined"
                    style={{width:90}}
                /><p>, whichever is greater, if SEller sells or agrees to sellthe Property during the term of this Contract.</p>
                <p>Other:</p>
                <TextField
                    id=""
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    fullWidth
                    variant="outlined"
                />
                <p>If within </p>
                <TextField
                    id=""
                    // value={this.state.song_title}
                    // onChange={this.handleInputChangeFor('song_title')}
                    minWidth
                    variant="outlined"
                    style={{width:90}}
                    placeholder="number of days"
                />
                <p>days (not to exceed sx (6) months) after the exprirations of the Contract, Seller sessl or agrees to sell the Property to anyone.</p>
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
export default connect(mapReduxStateToProps)(withRouter(ListingCategory4));