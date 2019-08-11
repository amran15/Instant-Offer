import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//Material UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import { TextField } from '@material-ui/core';

class PurchaseCategory1 extends Component {

    state = {
        // id:this.props.reduxState.activeUser.id,
        answers: {
            date:'',
            buyerName:'',
            earnestMoney:'',
            earnestMoneyValue:'',
            earnestChecked:'',
            businessName:'',
            streetAddress:'',
            city:'',
            county:'',
            legalDescription:'',
            builtIns:'',
            excludedItems:'',
        }
    }



    handleChangeForGeneralInformation = (propertyName) => (event) => {
        this.setState({
            generalInformation:{
                ...this.state.generalInformation, [propertyName]:event.target.value,
            }
        })
    }



    handleClick = () => {
        this.props.history.push('/PurchaseAgreement')
    }

    handleClickToSave = () => {
        this.props.dispatch({type:'POST_GENERAL_INFORMATION', payload:this.state.generalInformation})
        this.props.history.push('/PurchaseCategory2')
    }

    handleClickNext = () => {
        this.props.history.push('/PurchaseCategory2')
    }

    render() {
        return (
            <div>
                <Container component="main">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <center>
                                <h2>General Information</h2>
                            </center>
                            <h4>Date</h4>
                            <TextField
                                id="date"
                                variant="outlined"
                                type="date"
                                value={this.state.date}
                                onChange={this.handleChangeForGeneralInformation('date')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Buyer's Name</h4>
                            <TextField
                                // label="Song Title"
                                id="buyers_name"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                value={this.state.buyerName}
                                onChange={this.handleChangeForGeneralInformation('buyerName')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Buyer's earnest money in the amount of</h4>
                            <TextField
                                // label="Song Title"
                                id="buyers_earnest_money"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                value={this.state.earnestMoney}
                                onChange={this.handleChangeForGeneralInformation('earnestMoney')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="buyers_earnest_money"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                value={this.state.earnestMoneyValue}
                                onChange={this.handleChangeForGeneralInformation('earnestMoneyValue')}
                            />
                            <h4>shall be delivered to listing broker, or if checked, to</h4>
                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange('checkedB')}
                                        value="checkedB"
                                        color="primary"
                                        value={this.state.earnestChecked}
                                        onChange={this.handleChangeForGeneralInformation('earnestChecked')}
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    <TextField
                                        id="brokers_name"
                                        // value={this.state.song_title}
                                        // onChange={this.handleInputChangeFor('song_title')}
                                        fullWidth
                                        variant="outlined"
                                        value={this.state.businessName}
                                        onChange={this.handleChangeForGeneralInformation('businessName')}
                                    />
                                </Grid>
                            </Grid>
                            <h4>no later than two (2) Business Days after Final Acceptance Date of this Purchase Agreement.</h4>
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Property Address</h4>
                            <TextField
                                id="street_address"
                                label="Street Address"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                value={this.state.streetAddress}
                                onChange={this.handleChangeForGeneralInformation('streetAddress')}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="City"
                                id="city"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                                value={this.state.city}
                                onChange={this.handleChangeForGeneralInformation('city')}
                            />
                        </Grid>
                        <Grid item xs={12}>
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
                            <h4>Legal description of property</h4>
                            <TextField
                                id="legal_description"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>Built-Ins and the following personal property shall be transferred with no additional monetary value, and free and clear of all liens and encumbrances:</h4>
                            <TextField
                                id="built_ins"
                                // value={this.state.song_title}
                                // onChange={this.handleInputChangeFor('song_title')}
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <h4>The following item(s) are excluded from the purchase:</h4>
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
            </div >
        )
    }
}

const mapReduxStateToProps = reduxState => ({ reduxState })
export default connect(mapReduxStateToProps)(withRouter(PurchaseCategory1));